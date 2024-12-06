import PageTransition from "@/components/common/PageTransition";
import HeroSection from "@/components/Contact/HeroContact";
import ContactInfo from "@/components/Contact/ContactInfo";
import { FormContact } from "@/components/common/FormContact";
import ParticlesAtom from "@/components/common/animated-particles/ParticlesAtom";

export default function Contact() {
  return (
    <PageTransition>
        <ParticlesAtom />
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <HeroSection />
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
            <FormContact />
            <ContactInfo />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
