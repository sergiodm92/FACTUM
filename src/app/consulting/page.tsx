"use client";
import PageTransition from "@/components/common/PageTransition";
import ParticlesHexagon from "@/components/common/animated-particles/ParticlesHexagon";
import HeroSection from "@/components/Consulting/HeroConsulting";
import ServicesGrid from "@/components/Consulting/ServicesGrid";
import ConsultingAdvantages from "@/components/Consulting/ConsultingAdvantages";
import ImageSection from "@/components/Consulting/ImageSection";
import { useTranslation } from "react-i18next";

export default function Consulting() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <ParticlesHexagon />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <HeroSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('consulting.experience')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {t('consulting.experience_description')}
              </p>
              <ConsultingAdvantages />
            </div>
            <ImageSection />
          </div>
          <ServicesGrid />
        </div>
      </div>
    </PageTransition>
  );
}
