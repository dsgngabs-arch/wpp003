import { MessageCircle, FileText, Rocket } from 'lucide-react';
import HOW_BG from "../assets/3e8c9d11-df01-4562-91e2-963f27a93b4e (1).png";
/**
 * How It Works Section Component
 * Design: 3 passos com ícones e conexões visuais
 * Fundo: Escuro com efeitos neon
 */

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Clique no botão',
    description: 'Clique no botão e fale com um gerente'
  },
  {
    number: 2,
    icon: FileText,
    title: 'Receba as informações',
    description: 'Receba todas as informações para começar'
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Comece sua jornada',
    description: 'Comece sua jornada como cambista MRBET'
  }
];

export default function HowItWorksSection() {
  return (
    <section 
      className="relative w-full py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url("${HOW_BG}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-glow-primary">
            COMO COMEÇAR
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto neon-divider" />
        </div>

        {/* Steps Container */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (apenas em desktop) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 neon-divider" />

            {/* Steps */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Número do passo em círculo */}
                  <div className="relative z-20 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center glow-primary-intense border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 transform hover:scale-110">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-yellow-400">{step.number}</div>
                      </div>
                    </div>
                    
                    {/* Ícone */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white opacity-0" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Seta para próximo passo (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden mt-6 text-yellow-400 text-3xl">↓</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Texto adicional */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            É simples, rápido e sem complicações. Em poucos minutos você estará pronto para começar a ganhar dinheiro como cambista oficial MRBET.
          </p>
        </div>
      </div>
    </section>
  );
}
