
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Car, Home, Grid, List, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

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
  const [selectedType, setSelectedType] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const navigate = useNavigate();

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    if (type === '') {
      setFilteredProperties(allProperties);
    } else {
      const filtered = allProperties.filter(property => property.saleType === type);
      setFilteredProperties(filtered);
    }
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
              {filteredProperties.length} imóveis disponíveis em Florianópolis
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
                    variant={selectedType === '' ? 'default' : 'outline'}
                    className={`flex-1 ${selectedType === '' ? 'bg-santa-purple text-white' : 'border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white'}`}
                  >
                    Todos
                  </Button>
                  <Button
                    onClick={() => handleTypeFilter('Venda')}
                    variant={selectedType === 'Venda' ? 'default' : 'outline'}
                    className={`flex-1 ${selectedType === 'Venda' ? 'bg-santa-purple text-white' : 'border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white'}`}
                  >
                    Venda
                  </Button>
                  <Button
                    onClick={() => handleTypeFilter('Locação')}
                    variant={selectedType === 'Locação' ? 'default' : 'outline'}
                    className={`flex-1 ${selectedType === 'Locação' ? 'bg-santa-purple text-white' : 'border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white'}`}
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
                      <Badge className="bg-santa-yellow text-black font-medium">
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-santa-purple transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.neighborhood}</span>
                    </div>
                    <div className="text-2xl font-bold text-santa-purple">
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
                    className="w-full bg-santa-purple text-white hover:bg-santa-purple/90 transition-colors"
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
              className="border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white px-8"
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
