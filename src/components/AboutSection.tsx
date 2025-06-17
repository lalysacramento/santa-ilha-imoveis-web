
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Shield, MapPin, Star } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Mais de 10 Anos de Experiência",
      description: "Imobiliária líder em Florianópolis com vasta experiência no mercado local"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com profundo conhecimento das regiões mais valorizadas da Ilha"
    },
    {
      icon: Clock,
      title: "Atendimento Personalizado",
      description: "Serviço completo e personalizado para compra, venda e locação de imóveis"
    },
    {
      icon: Shield,
      title: "Registro CRECI",
      description: "Empresa registrada no Conselho Regional de Corretores de Imóveis"
    },
    {
      icon: Star,
      title: "Melhor Avaliada",
      description: "Reconhecida como a imobiliária mais bem avaliada de Florianópolis"
    },
    {
      icon: MapPin,
      title: "Cobertura Completa",
      description: "Atuamos nas regiões Sul, Centro e Norte da cidade"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Imobiliária em Florianópolis
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Seja bem-vindo à Santa Ilha Imóveis, a sua imobiliária em Floripa! Com vasta experiência no mercado imobiliário de Florianópolis, oferecemos um serviço completo e personalizado para quem busca alugar, comprar ou anunciar imóveis nesta região encantadora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Por que escolher a Santa Ilha?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Ao escolher a Santa Ilha, você opta por uma parceira com profundo conhecimento local e uma reputação consolidada de confiabilidade e excelência. Somos uma das maiores imobiliárias de Florianópolis e nossa equipe é composta por especialistas que conhecem cada detalhe das regiões mais valorizadas da Ilha.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Com mais de 10 anos de experiência e uma sólida base de clientes satisfeitos, a Santa Ilha é conhecida por ser a mais bem avaliada imobiliária de Florianópolis e líder em conectar pessoas a seus imóveis ideais, sempre com transparência e dedicação.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-santa-purple-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-santa-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="santa-ilha-gradient-subtle p-8 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Florianópolis - Santa Ilha Imóveis"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
            {/* Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-santa-purple-600 mb-1">
                    #1
                  </div>
                  <p className="text-sm text-gray-600">
                    Melhor Avaliada
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regions Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Regiões Atendidas em Florianópolis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Região Sul */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-santa-purple-600 mb-4">Região Sul</h4>
                <p className="text-gray-600 mb-4">
                  Conhecida por sua natureza exuberante e qualidade de vida, com bairros que combinam tranquilidade residencial com potencial de valorização.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Campeche e Novo Campeche</li>
                  <li>• Ribeirão da Ilha</li>
                  <li>• Morro das Pedras</li>
                  <li>• Armação e Pântano do Sul</li>
                </ul>
              </CardContent>
            </Card>

            {/* Região Central */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-santa-purple-600 mb-4">Região Central</h4>
                <p className="text-gray-600 mb-4">
                  O coração pulsante da cidade, oferecendo praticidade, história e modernidade em um só lugar, com infraestrutura completa.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Centro Histórico</li>
                  <li>• Trindade</li>
                  <li>• Santa Mônica e Itacorubi</li>
                  <li>• Córrego Grande</li>
                </ul>
              </CardContent>
            </Card>

            {/* Região Norte */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-santa-purple-600 mb-4">Região Norte</h4>
                <p className="text-gray-600 mb-4">
                  Sinônimo de sofisticação, com bairros que unem infraestrutura de alto padrão, lazer e qualidade de vida incomparável.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Jurerê e Jurerê Internacional</li>
                  <li>• João Paulo e Cacupé</li>
                  <li>• Saco Grande</li>
                  <li>• Canasvieiras</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
