
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos no mercado imobiliário com centenas de negócios realizados"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Equipe especializada para encontrar o imóvel perfeito para seu perfil"
    },
    {
      icon: Clock,
      title: "Agilidade nos Processos",
      description: "Documentação e processos otimizados para maior rapidez nas negociações"
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Todos os imóveis verificados e documentação regularizada"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Santa Ilha Imóveis
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma imobiliária comprometida em realizar o sonho da casa própria. 
              Com anos de experiência no mercado, oferecemos um atendimento personalizado 
              e soluções completas para compra, venda e locação de imóveis.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nossa missão é conectar pessoas aos seus lares ideais, com transparência, 
              agilidade e total segurança em todas as etapas do processo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-santa-purple-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-santa-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
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
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe Santa Ilha Imóveis"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
            {/* Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-santa-purple-600 mb-1">
                    1000+
                  </div>
                  <p className="text-sm text-gray-600">
                    Clientes Satisfeitos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
