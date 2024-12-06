"use client";
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Target, Users, Globe } from 'lucide-react';
import PageTransition from '@components/common/PageTransition';
import ParticlesGlow from '@components/common/animated-particles/ParticlesGlow';
import TeamMember from '@components/About/TeamMember';
import ValueCard from '@components/About/ValueCard';
import HeroSection from '@components/About/HeroSection';
import CompanyInfo from '@components/About/CompanyInfo';

const About: FC = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Danimir Lorkovic',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      description: t('about.danimir.description')
    },
    {
      name: 'Luis Gimenez',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      description: t('about.luis.description')
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: t('about.values.excellence'),
      description: t('about.values.excellence_description')
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: t('about.values.innovation'),
      description: t('about.values.innovation_description')
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: t('about.values.collaboration'),
      description: t('about.values.collaboration_description')
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: t('about.values.global_impact'),
      description: t('about.values.global_impact_description')
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <ParticlesGlow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <HeroSection />

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              {t('about.team')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <CompanyInfo />

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              {t('about.values_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
