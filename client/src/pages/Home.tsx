import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTAFinalSection from '@/components/CTAFinalSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Landing Page MRBET
 * Design: Neon Glow Esportivo com foco em conversão
 * Seções: Hero, Benefícios, Como Funciona, CTA Final, Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTAFinalSection />
      <Footer />
    </div>
  );
}
