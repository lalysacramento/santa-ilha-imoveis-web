
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-santa-purple-600 to-santa-purple-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>(48) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>contato@santailha.com.br</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Horário: Segunda à Sexta, 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3b9131ca-2c13-45e4-a8c3-e8864383fb4f.png" 
              alt="Santa Ilha Imóveis" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
              Início
            </a>
            <a href="#imoveis" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
              Imóveis
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
              Contato
            </a>
            <Button className="santa-ilha-gradient text-white hover:opacity-90 transition-opacity">
              Anunciar Imóvel
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
                Início
              </a>
              <a href="#imoveis" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
                Imóveis
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-santa-purple-600 transition-colors font-medium">
                Contato
              </a>
              <Button className="santa-ilha-gradient text-white w-full">
                Anunciar Imóvel
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
