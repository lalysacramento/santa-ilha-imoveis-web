import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = `https://${import.meta.env.VITE_VISTA_API_URL}`;
const API_KEY = import.meta.env.VITE_VISTA_API_KEY;

interface VistaProperty {
  id: number;
  titulo: string;
  preco: number;
  tipo: string;
  categoria: string; // "Venda" ou "Locacao"
  quartos: number;
  vagas: number;
  area: number;
  cidade: string;
  bairro: string;
  fotos: Array<{ url: string }>;
  // Adicione mais campos que você espera da API aqui, baseando-se no que a API retorna para uma lista
  // Por exemplo, o endpoint de listagem pode não retornar todos os detalhes que o /detalhes retorna.
  // É bom adicionar um 'codigoImovel' se a API retornar isso.
  Codigo?: string; // Adicionado com base no campo "Codigo" que você usou em "pesquisa"
  URLImagemPrincipal?: string; // Supondo que o link da imagem principal venha neste campo
}

interface SearchFilters {
  categoria?: 'Venda' | 'Locacao' | '';
  cidade?: string;
  tipo?: string;
  // Certifique-se de que os campos usados nos filtros correspondem aos campos da API
  // e que a API realmente suporta esses filtros no endpoint de listagem.
  // O exemplo de /detalhes tinha "Codigo", "Categoria", etc.
  // Você pode querer adicionar um "fields" aqui para usar na "pesquisa"
  fields?: string[]; // Para enviar quais campos você quer na resposta
}

const fetchProperties = async (filters: SearchFilters = {}): Promise<VistaProperty[]> => {
  const params = new URLSearchParams();

  // **ATENÇÃO:** O endpoint /imoveis provavelmente espera um parâmetro 'pesquisa' com JSON.
  // Vamos construir esse JSON baseado nos filtros.

  const searchJson: any = {
    fields: filters.fields || ["Codigo", "Categoria", "Valor", "Finalidade", "Tipo", "Cidade", "Bairro", "URLImagemPrincipal", "Dormitorios", "Vagas"], // Campos básicos para listagem
    // Adicione aqui outros filtros que a API pode aceitar no parâmetro "pesquisa"
    // Ex: { "Tipo": "Apartamento" }
  };

  if (filters.categoria) {
    searchJson.Finalidade = filters.categoria; // 'Venda' ou 'Locacao' - 'categoria' do seu filtro mapeia para 'Finalidade' na API
  }
  if (filters.cidade) {
    searchJson.Cidade = filters.cidade;
  }
  if (filters.tipo) {
    searchJson.Tipo = filters.tipo;
  }
  // Outros filtros de precoMin/Max podem precisar ser adicionados ao searchJson
  // Ex: searchJson.PrecoMin = filters.precoMin;

  // Adiciona a chave da API
  params.append('key', API_KEY);
  // Adiciona o JSON de pesquisa codificado
  params.append('pesquisa', encodeURIComponent(JSON.stringify(searchJson)));

  // URL base para listagem: MUDANÇA AQUI
  // O endpoint correto para LISTAR IMÓVEIS é um palpite: "/imoveis" ou "/imoveis/listar"
  // Se /imoveis não funcionar, tente /imoveis/listar ou /imoveis/pesquisar
  const response = await fetch(`<span class="math-inline">\{API\_BASE\_URL\}/imoveis?</span>{params.toString()}`);
  if (!response.ok) {
    // Tente logar a resposta de erro para mais detalhes
    const errorText = await response.text();
    console.error("Erro na resposta da API:", response.status, errorText);
    throw new Error(`Erro ao buscar imóveis: ${response.status} ${errorText}`);
  }

  // **Atenção:** A API da Vista retorna um JSON com uma estrutura específica,
  // geralmente um objeto com uma propriedade "Imoveis" que é um array.
  // Você precisará adaptar o retorno.
  const data = await response.json();
  console.log("Resposta da API:", data); // Loga a resposta completa para inspecionar

  // Supondo que a resposta seja { "Imoveis": [...] }
  if (data && data.Imoveis && Array.isArray(data.Imoveis)) {
    // Mapeie os dados da API para o seu tipo VistaProperty
    return data.Imoveis.map((item: any) => ({
      id: item.Codigo, // Assumindo que Codigo da API é o seu ID
      titulo: item.TituloSite || item.TituloAnuncio || `Imóvel ${item.Codigo}`,
      preco: item.Valor || 0,
      tipo: item.Tipo || 'N/A',
      categoria: item.Finalidade || 'N/A', // Mapeando Finalidade da API para categoria
      quartos: item.Dormitorios || 0,
      vagas: item.Vagas || 0,
      area: item.AreaTotal || item.AreaUtil || 0,
      cidade: item.Cidade || 'N/A',
      bairro: item.Bairro || 'N/A',
      fotos: item.Fotos ? item.Fotos.map((foto: any) => ({ url: foto.URLArquivo })) : [],
      destaque: item.DestaqueSite || false,
      // Outros campos relevantes que você precisa
      Codigo: item.Codigo,
      URLImagemPrincipal: item.URLImagemPrincipal,
    }));
  } else {
    console.warn("Formato inesperado da resposta da API:", data);
    return []; // Retorna um array vazio se o formato não for o esperado
  }
};

export const useProperties = (filters: SearchFilters = {}) => {
  return useQuery<VistaProperty[], Error>({ // Adicionado tipo para erro
    queryKey: ['properties', filters],
    queryFn: () => fetchProperties(filters),
    staleTime: 5 * 60 * 1000, // 5 minutos
    // Descomente e ajuste se precisar de mais opções de retry ou refetch
    // retry: 1,
    // refetchOnWindowFocus: false,
  });
};

export type { VistaProperty, SearchFilters };
