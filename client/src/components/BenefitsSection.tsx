import { Zap, Gift, Zap as Lightning, Smartphone, Users, Clock } from 'lucide-react';
import BENEFITS_BG from "../assets/pasted_file_fGLn1h_image.png";
/**
 * Benefits Section Component
 * Design: Cards com fundo branco/azul/amarelo
 * Fundo: Imagem branca com elementos azul/amarelo
 */

const benefits = [
  {
    icon: Clock,
    title: 'Ganhos Semanais',
    description: 'Receba seus ganhos toda semana sem complicações'
  },
  {
    icon: Gift,
    title: 'Material Personalizado',
    description: 'Acesso a materiais de marketing exclusivos para sua campanha'
  },
  {
    icon: Lightning,
    title: 'Pagamento Rápido',
    description: 'Transferência imediata para sua conta bancária'
  },
  {
    icon: Users,
    title: 'Comissão por Indicação',
    description: 'Ganhe mais indicando novos cambistas para o time'
  },
  {
    icon: Zap,
    title: 'Suporte da Equipe',
    description: 'Equipe dedicada pronta para ajudar 24/7'
  },
  {
    icon: Smartphone,
    title: 'Trabalho pelo Celular',
    description: 'Gerencie tudo direto do seu smartphone, em qualquer lugar'
  }
];

export default function BenefitsSection() {
  return (
    <section 
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
      style={{
        backgroundImage: `url("${BENEFITS_BG}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay suave para legibilidade */}
      <div className="absolute inset-0 bg-white/10" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">
            VANTAGENS DE SER UM
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500">
            CAMBISTA MRBET
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto" />
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 border-2 border-blue-500/30 rounded-lg p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg overflow-hidden backdrop-blur-sm"
              >
                {/* Efeito de fundo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-yellow-400/5 group-hover:from-blue-500/15 group-hover:to-yellow-400/15 transition-all duration-300" />
                
                {/* Conteúdo */}
                <div className="relative z-10 space-y-4">
                  {/* Ícone */}
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/20 to-yellow-400/20 flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-yellow-400/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-yellow-500 transition-colors" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-blue-900 group-hover:text-yellow-600 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Borda de destaque no hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-yellow-500/0 group-hover:border-yellow-500/50 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
