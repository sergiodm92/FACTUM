"use client";
import PageTransition from "@/components/common/PageTransition";
import HeroSection from "@/components/Software/HeroSoftware";
import FeaturesGrid from "@/components/Software/FeaturesGrid";
import SoftwareAdvantages from "@/components/Software/SoftwareAdvantages";
import ImageSection from "@/components/Software/ImageSection";
import ParticlesAtomTwo from "@/components/common/animated-particles/ParticlesAtomTwo";


export default function Software() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <ParticlesAtomTwo />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <HeroSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <SoftwareAdvantages />
            </div>
            <ImageSection />
          </div>
          <FeaturesGrid />
        </div>
      </div>
    </PageTransition>
  );
}
