
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, Bed } from 'lucide-react';

const HeroSection = () => {
  const [searchForm, setSearchForm] = useState({
    tipo: '',
    quartos: '',
    bairro: '',
    preco: ''
  });

  const handleSearch = () => {
    console.log('Buscar imóveis:', searchForm);
    // Aqui será integrada a API do Vista
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 santa-ilha-gradient opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Encontre Sua Casa dos Sonhos
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Na Santa Ilha, realizamos o sonho da casa própria com qualidade e confiança
          </p>
        </div>

        {/* Search Form */}
        <Card className="max-w-5xl mx-auto p-6 bg-white/95 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Tipo de Negócio */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tipo</label>
              <Select value={searchForm.tipo} onValueChange={(value) => setSearchForm({...searchForm, tipo: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Venda/Locação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venda">Venda</SelectItem>
                  <SelectItem value="locacao">Locação</SelectItem>
                  <SelectItem value="ambos">Ambos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Número de Quartos */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Quartos</label>
              <Select value={searchForm.quartos} onValueChange={(value) => setSearchForm({...searchForm, quartos: value})}>
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

            {/* Bairro */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Bairro</label>
              <Input
                placeholder="Digite o bairro"
                value={searchForm.bairro}
                onChange={(e) => setSearchForm({...searchForm, bairro: e.target.value})}
                className="bg-white"
              />
            </div>

            {/* Faixa de Preço */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Faixa de Preço</label>
              <Select value={searchForm.preco} onValueChange={(value) => setSearchForm({...searchForm, preco: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o valor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ate-150k">Até R$ 150.000</SelectItem>
                  <SelectItem value="150k-300k">R$ 150.000 - R$ 300.000</SelectItem>
                  <SelectItem value="300k-500k">R$ 300.000 - R$ 500.000</SelectItem>
                  <SelectItem value="500k-800k">R$ 500.000 - R$ 800.000</SelectItem>
                  <SelectItem value="800k-1m">R$ 800.000 - R$ 1.000.000</SelectItem>
                  <SelectItem value="1m-1.5m">R$ 1.000.000 - R$ 1.500.000</SelectItem>
                  <SelectItem value="acima-1.5m">Acima de R$ 1.500.000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Botão de Busca */}
            <div className="flex items-end lg:col-span-2">
              <Button 
                onClick={handleSearch} 
                className="w-full santa-ilha-gradient text-white font-semibold h-10 hover:opacity-90 transition-opacity"
              >
                <Search className="mr-2 h-4 w-4" />
                Buscar Imóveis
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Home className="h-6 w-6 text-santa-purple-600 mr-2" />
                <span className="text-2xl font-bold text-santa-purple-600">500+</span>
              </div>
              <p className="text-gray-600">Imóveis Disponíveis</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-santa-purple-600 mr-2" />
                <span className="text-2xl font-bold text-santa-purple-600">50+</span>
              </div>
              <p className="text-gray-600">Bairros Atendidos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Bed className="h-6 w-6 text-santa-purple-600 mr-2" />
                <span className="text-2xl font-bold text-santa-purple-600">1000+</span>
              </div>
              <p className="text-gray-600">Famílias Realizadas</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
