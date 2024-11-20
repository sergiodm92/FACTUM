import { useTranslation } from 'react-i18next';
import { Code, Database, Lock, Zap, Cloud, BarChart2, Settings, Folder } from 'lucide-react';
import PageTransition from '@/components/common/PageTransition';
import ParticlesAtom from '@/components/common/animated-particles/ParticlesAtom';

export default function Software() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Code className="h-8 w-8 text-orange-600" />,
      title: 'Desarrollo a Medida',
      description: 'Soluciones personalizadas que se adaptan perfectamente a tus necesidades específicas.'
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: 'Gestión de Datos',
      description: 'Sistemas robustos para almacenar y analizar datos empresariales de manera eficiente.'
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600" />,
      title: 'Seguridad Avanzada',
      description: 'Protección integral de datos con los más altos estándares de seguridad.'
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      title: 'Soluciones Cloud',
      description: 'Implementaciones en la nube para máxima escalabilidad y disponibilidad.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ParticlesAtom numberOfParticles={250} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('software.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              {t('software.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('software.title2')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
           {t('software.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <Zap className="h-5 w-5" />
                  <span>{t('software.high_performance')}</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <Settings className="h-5 w-5" />
                  <span>{t('software.customizable')}</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <Folder className="h-5 w-5" />
                  <span>{t('software.paperless')}</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <BarChart2 className="h-5 w-5" />
                  <span>{t('software.data_analysis')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 dark:from-orange-500/10 dark:to-yellow-500/10 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Software Development"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}