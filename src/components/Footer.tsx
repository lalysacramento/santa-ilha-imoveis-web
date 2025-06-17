
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/3b9131ca-2c13-45e4-a8c3-e8864383fb4f.png" 
                alt="Santa Ilha Imóveis" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A Santa Ilha Imóveis é sua parceira na realização do sonho da casa própria em Florianópolis. 
              Com mais de 10 anos de experiência, transparência e dedicação, encontramos o imóvel perfeito para você.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-santa-purple-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-santa-purple-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-santa-purple-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#imoveis" className="hover:text-santa-purple-400 transition-colors">
                  Imóveis
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-santa-purple-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-santa-purple-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(48) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contato@santailha.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Avenida Pequeno Príncipe, 1515<br />Florianópolis/SC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Santa Ilha Imóveis. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            CRECI: 12345-J | A melhor imobiliária de Florianópolis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
