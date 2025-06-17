
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Car, Home, Search, Filter, Grid, List, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data - será substituído pela API do Vista
const allProperties = [
  {
    id: 1,
    title: "Casa Moderna com Piscina",
    price: "R$ 850.000",
    type: "Casa",
    saleType: "Venda",
    bedrooms: 3,
    parking: 2,
    area: "180m²",
    neighborhood: "Campeche",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Apartamento Luxo Centro",
    price: "R$ 3.500/mês",
    type: "Apartamento",
    saleType: "Locação",
    bedrooms: 2,
    parking: 1,
    area: "95m²",
    neighborhood: "Centro",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Cobertura com Vista Panorâmica",
    price: "R$ 1.200.000",
    type: "Cobertura",
    saleType: "Venda",
    bedrooms: 4,
    parking: 3,
    area: "250m²",
    neighborhood: "Jurerê",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Casa na Beira-Mar",
    price: "R$ 2.100.000",
    type: "Casa",
    saleType: "Venda",
    bedrooms: 5,
    parking: 4,
    area: "320m²",
    neighborhood: "Ribeirão da Ilha",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Apartamento Studio Moderno",
    price: "R$ 2.200/mês",
    type: "Apartamento",
    saleType: "Locação",
    bedrooms: 1,
    parking: 1,
    area: "45m²",
    neighborhood: "Trindade",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Casa Familiar Completa",
    price: "R$ 680.000",
    type: "Casa",
    saleType: "Venda",
    bedrooms: 3,
    parking: 2,
    area: "160m²",
    neighborhood: "João Paulo",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

const Imoveis = () => {
  const [searchFilters, setSearchFilters] = useState({
    tipo: '',
    quartos: '',
    bairro: '',
    preco: '',
    saleType: ''
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const handleSearch = () => {
    console.log('Filtrar imóveis:', searchFilters);
    // Aqui será integrada a lógica de filtro real
    setFilteredProperties(allProperties);
  };

  const handlePropertyClick = (propertyId: number) => {
    console.log('Ver detalhes do imóvel:', propertyId);
    // Aqui será integrada navegação para página de detalhes
  };

  const toggleFavorite = (propertyId: number) => {
    console.log('Toggle favorito:', propertyId);
    // Aqui será integrada a lógica de favoritos
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="santa-ilha-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Encontre Seu Imóvel Ideal
            </h1>
            <p className="text-xl opacity-90">
              {filteredProperties.length} imóveis disponíveis em Florianópolis
            </p>
          </div>

          {/* Advanced Search */}
          <Card className="max-w-6xl mx-auto p-6 bg-white/95 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Negócio</label>
                <Select value={searchFilters.saleType} onValueChange={(value) => setSearchFilters({...searchFilters, saleType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Venda/Locação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venda">Venda</SelectItem>
                    <SelectItem value="locacao">Locação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Tipo</label>
                <Select value={searchFilters.tipo} onValueChange={(value) => setSearchFilters({...searchFilters, tipo: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de imóvel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="cobertura">Cobertura</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Quartos</label>
                <Select value={searchFilters.quartos} onValueChange={(value) => setSearchFilters({...searchFilters, quartos: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Qtd. Quartos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 quarto</SelectItem>
                    <SelectItem value="2">2 quartos</SelectItem>
                    <SelectItem value="3">3 quartos</SelectItem>
                    <SelectItem value="4">4+ quartos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Bairro</label>
                <Input
                  placeholder="Digite o bairro"
                  value={searchFilters.bairro}
                  onChange={(e) => setSearchFilters({...searchFilters, bairro: e.target.value})}
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preço</label>
                <Select value={searchFilters.preco} onValueChange={(value) => setSearchFilters({...searchFilters, preco: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Faixa de preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ate-150k">Até R$ 150.000</SelectItem>
                    <SelectItem value="150k-300k">R$ 150.000 - 300.000</SelectItem>
                    <SelectItem value="300k-500k">R$ 300.000 - 500.000</SelectItem>
                    <SelectItem value="500k-800k">R$ 500.000 - 800.000</SelectItem>
                    <SelectItem value="800k-1m">R$ 800.000 - 1.000.000</SelectItem>
                    <SelectItem value="acima-1m">Acima de R$ 1.000.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleSearch} 
                  className="w-full santa-ilha-gradient text-white font-semibold h-10"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </Button>
              </div>
            </div>
          </Card>
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
                {filteredProperties.length} resultados encontrados
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-white rounded-lg p-1 shadow-sm">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'santa-ilha-purple text-white' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'santa-ilha-purple text-white' : ''}
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

          {/* Properties Grid/List */}
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {filteredProperties.map((property) => (
              <Card key={property.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}>
                <div className={`relative ${viewMode === 'list' ? 'w-80' : ''}`}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                    }`}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge 
                      className={`${
                        property.saleType === 'Venda' 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      } text-white`}
                    >
                      {property.saleType}
                    </Badge>
                    {property.featured && (
                      <Badge className="santa-ilha-gradient text-white">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(property.id);
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-santa-purple-950 transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.neighborhood}</span>
                    </div>
                    <div className="text-2xl font-bold text-santa-purple-950">
                      {property.price}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms} quartos</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      <span>{property.parking} vagas</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handlePropertyClick(property.id)}
                    className="w-full santa-ilha-gradient text-white hover:opacity-90 transition-opacity"
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-santa-purple-950 text-santa-purple-950 hover:bg-santa-purple-950 hover:text-white px-8"
            >
              Carregar Mais Imóveis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imoveis;
