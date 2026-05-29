import { Button } from '@/components/ui/button';
import HERO_IMAGE from "../assets/hero.png.png";/**
 * Hero Section Component
 * Design: Pantoja à esquerda, copy + CTA à direita
 * Headline em 3 linhas: "Transforme seu" / "tempo livre em" / "RENDA EXTRA"
 * Fundo: Imagem do Pantoja com identidade azul/amarelo
 */
export default function HeroSection() {
  const whatsappLink = 'https://wa.me/5567984040301?text=Olá, vim pela página e quero saber como funciona para ser cambista da MRBET.';

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay gradiente para melhor legibilidade do lado direito */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-950/60" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex items-center min-h-screen">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo - Imagem (ocupada pela foto do Pantoja no background) */}
            <div className="hidden lg:block" />
            
            {/* Lado Direito - Copy + CTA */}
            <div className="space-y-8 lg:pl-8">
              {/* Headline - 3 linhas */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
                  Transforme seu
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
                  tempo livre em
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-yellow-400">
                  RENDA EXTRA
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-xl">
                Seja um <span className="text-yellow-400 font-semibold">cambista oficial MRBET</span> e comece a ganhar dinheiro com futebol de forma simples e rápida.
              </p>

              {/* Benefícios - 2 Linhas, sem emojis */}
              <div className="grid grid-cols-2 gap-6 max-w-xl">
                <div className="text-white text-lg font-semibold">
                  Pagamento rápido
                </div>
                <div className="text-white text-lg font-semibold">
                  Material personalizado
                </div>
                <div className="text-white text-lg font-semibold">
                  Comissão por indicação
                </div>
                <div className="text-white text-lg font-semibold">
                  Plataforma simples
                </div>
              </div>

              {/* CTA Button - Maior */}
              <div className="pt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black text-2xl px-12 py-8 rounded-lg glow-secondary-intense hover:glow-secondary-intense transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    QUERO SER CAMBISTA
                  </Button>
                </a>
                <p className="text-xs text-gray-300 mt-4">
                  Clique acima para conversar com um gerente via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
