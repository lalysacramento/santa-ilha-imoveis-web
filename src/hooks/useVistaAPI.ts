
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
  destaque: boolean;
}

interface SearchFilters {
  categoria?: 'Venda' | 'Locacao' | '';
  cidade?: string;
  tipo?: string;
  precoMin?: number;
  precoMax?: number;
}

const fetchProperties = async (filters: SearchFilters = {}): Promise<VistaProperty[]> => {
  const params = new URLSearchParams();
  
  if (filters.categoria) params.append('categoria', filters.categoria);
  if (filters.cidade) params.append('cidade', filters.cidade);
  if (filters.tipo) params.append('tipo', filters.tipo);
  if (filters.precoMin) params.append('precoMin', filters.precoMin.toString());
  if (filters.precoMax) params.append('precoMax', filters.precoMax.toString());
  
  params.append('key', API_KEY);
  
  const response = await fetch(`${API_BASE_URL}/imoveis?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar imóveis');
  }
  
  return response.json();
};

export const useProperties = (filters: SearchFilters = {}) => {
  return useQuery({
    queryKey: ['properties', filters],
    queryFn: () => fetchProperties(filters),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

export type { VistaProperty, SearchFilters };
