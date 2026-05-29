/**
 * Footer Component
 * Design: Visual premium escuro com aviso legal
 * Cores: Azul/Amarelo com branco para texto
 */
import FOOTER_LOGO from "../assets/pasted_file_DzZJei_image.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative w-full border-t border-blue-500/30 py-12 lg:py-16 overflow-hidden"
      style={{
        backgroundImage: 'url(/manus-storage/mrbet-neon-bg_5a469d95.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={FOOTER_LOGO} alt="MRBET Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              A plataforma oficial para cambistas de apostas esportivas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-white font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-white font-bold">Suporte</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-yellow-400">WhatsApp:</span> +55 16 98247-0539
              </p>
              <p className="text-xs text-gray-500 mt-4">
                Disponível 24/7 para ajudar você
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-8" />

        {/* Avisos Legais */}
        <div className="space-y-4">
          {/* Aviso 18+ */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-400">18+</span>
              <p className="text-white font-semibold">Apenas para maiores de 18 anos</p>
            </div>
            <p className="text-gray-300 text-sm">
              Este serviço é destinado apenas para maiores de 18 anos de idade. Verificação de idade é obrigatória.
            </p>
          </div>

          {/* Aviso de Responsabilidade */}
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 space-y-2">
            <p className="text-yellow-400 font-semibold">⚠️ Aposte com Responsabilidade</p>
            <p className="text-gray-300 text-sm">
              As apostas envolvem risco. Jogue apenas o que pode perder. Se você ou alguém que conhece tem problemas com jogos, procure ajuda profissional.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-gray-500 text-xs space-y-2">
            <p>
              MRBET é uma plataforma de recrutamento de cambistas. Esta página é destinada apenas a fins informativos e de recrutamento. Não somos responsáveis por atividades ilegais.
            </p>
            <p>
              A MRBET opera de acordo com as leis e regulamentações aplicáveis. Todos os cambistas devem cumprir com a legislação local.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-500/20 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} MRBET. Todos os direitos reservados. | Desenvolvido com ❤️ para cambistas
          </p>
        </div>
      </div>
    </footer>
  );
}
