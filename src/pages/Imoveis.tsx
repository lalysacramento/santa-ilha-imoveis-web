
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { useNavigate } from 'react-router-dom';
import { useProperties, SearchFilters } from '@/hooks/useVistaAPI';

const Imoveis = () => {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();

  const { data: properties = [], isLoading, error } = useProperties(filters);

  const handleTypeFilter = (type: string) => {
    const newFilters = { ...filters };
    if (type === '') {
      delete newFilters.categoria;
    } else {
      newFilters.categoria = type as 'Venda' | 'Locacao';
    }
    setFilters(newFilters);
  };

  const handlePropertyClick = (propertyId: number) => {
    navigate(`/imovel/${propertyId}`);
  };

  const toggleFavorite = (propertyId: number) => {
    console.log('Toggle favorito:', propertyId);
    // Aqui será integrada a lógica de favoritos
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-santa-purple py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Encontre Seu Imóvel Ideal
            </h1>
            <p className="text-xl opacity-90">
              {isLoading ? 'Carregando...' : `${properties.length} imóveis disponíveis em Florianópolis`}
            </p>
          </div>

          {/* Simple Filter */}
          <div className="max-w-md mx-auto">
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700">Tipo de Negócio</label>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleTypeFilter('')}
                    variant={!filters.categoria ? 'default' : 'outline'}
                    className={`flex-1 ${!filters.categoria ? 'bg-santa-purple text-white' : 'border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white'}`}
                  >
                    Todos
                  </Button>
                  <Button
                    onClick={() => handleTypeFilter('Venda')}
                    variant={filters.categoria === 'Venda' ? 'default' : 'outline'}
                    className={`flex-1 ${filters.categoria === 'Venda' ? 'bg-santa-purple text-white' : 'border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white'}`}
                  >
                    Venda
                  </Button>
                  <Button
                    onClick={() => handleTypeFilter('Locacao')}
                    variant={filters.categoria === 'Locacao' ? 'default' : 'outline'}
                    className={`flex-1 ${filters.categoria === 'Locacao' ? 'bg-santa-purple text-white' : 'border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white'}`}
                  >
                    Locação
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Imóveis Encontrados
              </h2>
              <p className="text-gray-600">
                {isLoading ? 'Carregando...' : `${properties.length} resultados encontrados`}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-white rounded-lg p-1 shadow-sm">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-santa-purple text-white' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-santa-purple text-white' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort */}
              <Select defaultValue="relevancia">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Mais Relevantes</SelectItem>
                  <SelectItem value="preco-menor">Menor Preço</SelectItem>
                  <SelectItem value="preco-maior">Maior Preço</SelectItem>
                  <SelectItem value="mais-novos">Mais Novos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-8 w-1/3" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-red-800 font-semibold mb-2">Erro ao carregar imóveis</h3>
                <p className="text-red-600 text-sm mb-4">
                  Não foi possível buscar os imóveis. Tente novamente.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-santa-purple text-white hover:bg-santa-purple/90"
                >
                  Tentar Novamente
                </Button>
              </div>
            </div>
          )}

          {/* No Results */}
          {!isLoading && !error && properties.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-gray-800 font-semibold mb-2">Nenhum imóvel encontrado</h3>
                <p className="text-gray-600 mb-4">
                  Nenhum imóvel encontrado com os critérios selecionados.
                </p>
                <Button 
                  onClick={() => setFilters({})}
                  className="bg-santa-purple text-white hover:bg-santa-purple/90"
                >
                  Limpar Filtros
                </Button>
              </div>
            </div>
          )}

          {/* Properties Grid/List */}
          {!isLoading && !error && properties.length > 0 && (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onPropertyClick={handlePropertyClick}
                  onToggleFavorite={toggleFavorite}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}

          {/* Load More */}
          {!isLoading && !error && properties.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white px-8"
              >
                Carregar Mais Imóveis
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imoveis;
