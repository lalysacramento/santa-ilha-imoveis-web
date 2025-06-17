
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Car, Home } from 'lucide-react';

// Mock data - será substituído pela API do Vista
const featuredProperties = [
  {
    id: 1,
    title: "Casa Moderna com Piscina",
    price: "R$ 850.000",
    type: "Casa",
    saleType: "Venda",
    bedrooms: 3,
    parking: 2,
    area: "180m²",
    neighborhood: "Vila Olimpia",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    neighborhood: "Jardins",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedProperties = () => {
  const handlePropertyClick = (propertyId: number) => {
    console.log('Ver detalhes do imóvel:', propertyId);
    // Aqui será integrada navegação para página de detalhes
  };

  return (
    <section id="imoveis" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Imóveis em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecionamos os melhores imóveis para você. Qualidade, localização e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      property.saleType === 'Venda' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
                  >
                    {property.saleType}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {property.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.neighborhood}</span>
                  </div>
                  <div className="text-2xl font-bold text-santa-purple-600">
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

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-santa-purple-600 text-santa-purple-600 hover:bg-santa-purple-600 hover:text-white"
          >
            Ver Todos os Imóveis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
