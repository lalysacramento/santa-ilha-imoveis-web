
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Car, Home, Heart } from 'lucide-react';
import { VistaProperty } from '@/hooks/useVistaAPI';

interface PropertyCardProps {
  property: VistaProperty;
  onPropertyClick: (propertyId: number) => void;
  onToggleFavorite: (propertyId: number) => void;
  viewMode: 'grid' | 'list';
}

const PropertyCard = ({ property, onPropertyClick, onToggleFavorite, viewMode }: PropertyCardProps) => {
  const formatPrice = (price: number, category: string) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    
    return category === 'Locacao' ? `${formattedPrice}/mês` : formattedPrice;
  };

  const mainImage = property.fotos && property.fotos.length > 0 
    ? property.fotos[0].url 
    : 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
      viewMode === 'list' ? 'flex flex-row' : ''
    }`}>
      <div className={`relative ${viewMode === 'list' ? 'w-80' : ''}`}>
        <img
          src={mainImage}
          alt={property.titulo}
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
          }`}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge 
            className={`${
              property.categoria === 'Venda' 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {property.categoria}
          </Badge>
          {property.destaque && (
            <Badge className="bg-santa-yellow text-black font-medium">
              Destaque
            </Badge>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(property.id);
          }}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-santa-purple transition-colors">
            {property.titulo}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bairro}, {property.cidade}</span>
          </div>
          <div className="text-2xl font-bold text-santa-purple">
            {formatPrice(property.preco, property.categoria)}
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.quartos} quartos</span>
          </div>
          <div className="flex items-center">
            <Car className="h-4 w-4 mr-1" />
            <span>{property.vagas} vagas</span>
          </div>
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>{property.area}m²</span>
          </div>
        </div>

        <Button 
          onClick={() => onPropertyClick(property.id)}
          className="w-full bg-santa-purple text-white hover:bg-santa-purple/90 transition-colors"
        >
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
