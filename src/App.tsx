import React from 'react';
import { Wallet, Building2, Users, HelpCircle, ChevronDown, Shield, CreditCard, Smartphone, ArrowRight, CheckCircle2, Star } from 'lucide-react';

function App() {
  const handleLogin = () => {
    window.location.href = 'https://validpay-victor-ariels-projects.vercel.app/';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="text-[#4CAF50] h-8 w-8" />
            <span className="text-2xl font-bold">
              <span className="text-[#3F51B5]">Valid</span>
              <span className="text-[#4CAF50]">Pay</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#3F51B5] font-medium">Página Inicial</a>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-[#3F51B5] font-medium">
                Para você <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Conta Digital</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Cartão de Crédito</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Investimentos</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-[#3F51B5] font-medium">
                Para seu negócio <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Conta PJ</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Maquininhas</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Gateway de Pagamento</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-[#3F51B5] font-medium">
                ValidPay <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <a href="#" className="text-gray-600 hover:text-[#3F51B5] font-medium">Ajuda</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogin}
              className="hidden sm:block px-6 py-2 text-[#3F51B5] border-2 border-[#3F51B5] rounded-full hover:bg-[#3F51B5] hover:text-white transition-colors font-semibold"
            >
              Entrar
            </button>
            <button className="px-6 py-2 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-colors font-semibold shadow-lg shadow-green-200" 
            onClick={handleLogin}>           
              Cadastrar-se
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-600 text-sm sm:text-base">Mais de 1 milhão de clientes satisfeitos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-[#3F51B5]">CONFIABILIDADE</span>
              <br />
              <span className="text-[#4CAF50]">GARANTIDA PARA</span>
              <br />
              <span>SUAS TRANSFERÊNCIAS</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Faça suas transações com segurança e praticidade através do ValidPay. 
              Sua nova experiência em serviços financeiros começa aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#4CAF50] text-white rounded-full text-lg hover:bg-[#45a049] transition-colors font-semibold shadow-lg shadow-green-200 flex items-center justify-center gap-2">
                Comece agora
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-3 bg-white text-[#3F51B5] rounded-full text-lg hover:bg-gray-50 transition-colors font-semibold shadow-lg">
                Saiba mais
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#3F51B5]">+1M</div>
                <div className="text-sm sm:text-base text-gray-600">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#4CAF50]">4.8/5</div>
                <div className="text-sm sm:text-base text-gray-600">Avaliação</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#3F51B5]">24/7</div>
                <div className="text-sm sm:text-base text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute -z-10 w-full aspect-square bg-gradient-to-r from-[#3F51B5]/20 to-[#4CAF50]/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80"
              alt="ValidPay App Interface"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Por que escolher o ValidPay?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções financeiras completas para você e seu negócio, 
              com a segurança e praticidade que você merece.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Users className="h-12 w-12 text-[#3F51B5] mb-4" />
              <h3 className="text-xl font-bold mb-2">Para Você</h3>
              <p className="text-gray-600 mb-4">Conta digital gratuita, cartão sem anuidade e muito mais.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Transferências gratuitas</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Cartão sem anuidade</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Rendimento superior à poupança</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Building2 className="h-12 w-12 text-[#4CAF50] mb-4" />
              <h3 className="text-xl font-bold mb-2">Para seu Negócio</h3>
              <p className="text-gray-600 mb-4">Soluções completas para gestão financeira da sua empresa.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Conta PJ sem mensalidade</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Maquininhas com taxas justas</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Gestão financeira completa</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <HelpCircle className="h-12 w-12 text-[#3F51B5] mb-4" />
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600 mb-4">Atendimento especializado sempre que você precisar.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Chat 24 horas</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Atendimento humanizado</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#4CAF50]" />
                  <span>Resolução rápida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-[#3F51B5] to-[#4CAF50] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Benefícios exclusivos para você</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Descubra todas as vantagens de ser um cliente ValidPay
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <Shield className="h-10 w-10 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Segurança Garantida</h3>
              <p className="text-white/80">Suas transações protegidas por tecnologia de ponta</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <CreditCard className="h-10 w-10 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cartão Internacional</h3>
              <p className="text-white/80">Aceito em mais de 30 milhões de estabelecimentos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <Smartphone className="h-10 w-10 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">App Completo</h3>
              <p className="text-white/80">Gerencie sua conta direto do seu smartphone</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <Star className="h-10 w-10 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Programa de Pontos</h3>
              <p className="text-white/80">Ganhe pontos em todas as suas compras</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Abra sua conta digital gratuitamente e comece a aproveitar todos os benefícios do ValidPay
          </p>
          <button className="px-8 py-3 bg-[#4CAF50] text-white rounded-full text-lg hover:bg-[#45a049] transition-colors font-semibold shadow-lg shadow-green-200">
            Abra sua conta grátis
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;