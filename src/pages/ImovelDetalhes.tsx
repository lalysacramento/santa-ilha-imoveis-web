
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Bed, Car, Home, ArrowLeft, Phone, Mail, Share2, Heart, Calendar, User, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data - será substituído pela API do Vista
const propertyData = {
  1: {
    id: 1,
    title: "Casa Moderna com Piscina",
    price: "R$ 850.000",
    type: "Casa",
    saleType: "Venda",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "180m²",
    neighborhood: "Campeche",
    address: "Rua das Flores, 123 - Campeche, Florianópolis/SC",
    description: "Linda casa moderna com piscina, localizada em um dos bairros mais valorizados de Florianópolis. A propriedade conta com 3 quartos sendo 1 suíte, sala ampla com pé direito alto, cozinha planejada, área gourmet com churrasqueira e piscina. Garagem para 2 carros. Excelente localização próxima a escolas, supermercados e praia.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Piscina",
      "Área Gourmet",
      "Churrasqueira",
      "Jardim",
      "Portão Eletrônico",
      "Cozinha Planejada"
    ],
    featured: true
  }
};

const ImovelDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const property = propertyData[parseInt(id || '1') as keyof typeof propertyData] || propertyData[1];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário de contato enviado:', contactForm);
    // Aqui será integrada a API do Bitrix24
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleShare = () => {
    navigator.share({
      title: property.title,
      text: property.description,
      url: window.location.href,
    }).catch(() => {
      // Fallback para navegadores que não suportam Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-6 border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-96 object-cover"
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
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/80 border-white hover:bg-white"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/80 border-white hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Image Thumbnails */}
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-santa-purple' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Property Details */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.address}</span>
                  </div>
                  <div className="text-3xl font-bold text-santa-purple mb-6">
                    {property.price}
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-santa-purple" />
                    <div className="text-lg font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Quartos</div>
                  </div>
                  <div className="text-center">
                    <Home className="h-6 w-6 mx-auto mb-2 text-santa-purple" />
                    <div className="text-lg font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Banheiros</div>
                  </div>
                  <div className="text-center">
                    <Car className="h-6 w-6 mx-auto mb-2 text-santa-purple" />
                    <div className="text-lg font-semibold">{property.parking}</div>
                    <div className="text-sm text-gray-600">Vagas</div>
                  </div>
                  <div className="text-center">
                    <Home className="h-6 w-6 mx-auto mb-2 text-santa-purple" />
                    <div className="text-lg font-semibold">{property.area}</div>
                    <div className="text-sm text-gray-600">Área</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">Descrição</h2>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">Características</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-santa-purple rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-santa-purple" />
                  Tenho Interesse
                </h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Seu telefone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem (opcional)"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-santa-purple text-white hover:bg-santa-purple/90"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Contato Direto</h2>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-santa-yellow text-black hover:bg-santa-yellow/90 flex items-center justify-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    (48) 9999-9999
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-santa-purple text-santa-purple hover:bg-santa-purple hover:text-white flex items-center justify-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar E-mail
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Visit */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-santa-purple" />
                  Agendar Visita
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Agende uma visita personalizada para conhecer este imóvel
                </p>
                <Button 
                  className="w-full bg-santa-purple text-white hover:bg-santa-purple/90"
                >
                  Agendar Visita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ImovelDetalhes;
