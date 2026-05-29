import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import BENEFITS_BG from "../assets/pasted_file_fGLn1h_image.png";
/**
 * CTA Final Section Component
 * Design: Seção de encerramento com fundo branco/azul/amarelo
 * Background: Imagem branca com elementos azul/amarelo
 */

export default function CTAFinalSection() {
  const whatsappLink = 'https://wa.me/5516982470539?text=Olá, vim pela página e quero saber como funciona para ser cambista da MRBET.';

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
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-white/5" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
              COMECE HOJE SUA
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500">
              RENDA EXTRA
            </h2>
          </div>

          {/* Descrição */}
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Não perca essa oportunidade! Junte-se a milhares de cambistas que já estão ganhando dinheiro com a MRBET. O futuro começa agora!
          </p>

          {/* CTA Button Grande */}
          <div className="pt-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-xl px-12 py-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-7 h-7" />
                <span>👉 FALAR NO WHATSAPP</span>
              </Button>
            </a>
            <p className="text-sm text-gray-700 mt-4">
              Clique acima e converse com nosso time agora mesmo!
            </p>
          </div>

          {/* Garantia */}
          <div className="pt-8 border-t border-blue-500/30 space-y-3">
            <p className="text-sm text-gray-700">
              ✨ Resposta rápida • 🔒 100% seguro • 📱 Suporte 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
