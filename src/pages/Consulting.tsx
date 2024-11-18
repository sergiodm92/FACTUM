import { useTranslation } from 'react-i18next';
import { TrendingUp, Target, Users, BarChart2, Briefcase, PieChart, LineChart, ArrowUpRight } from 'lucide-react';
import PageTransition from '@/components/common/PageTransition';
import ParticlesHexagon from '@/components/common/animated-particles/ParticlesHexagon';

export function Consulting() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: 'Optimización de Procesos',
      description: 'Análisis y mejora de procesos empresariales para maximizar la eficiencia operativa.'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'Planificación Estratégica',
      description: 'Desarrollo de estrategias personalizadas para alcanzar objetivos empresariales.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Gestión del Cambio',
      description: 'Acompañamiento en la transformación organizacional y cultural.'
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-orange-600" />,
      title: 'Análisis de Datos',
      description: 'Interpretación de datos para la toma de decisiones estratégicas.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ParticlesHexagon />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('consulting.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              {t('consulting.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Experiencia y Resultados
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Nuestro equipo de consultores expertos trabaja estrechamente con tu empresa para identificar
                oportunidades de mejora y desarrollar soluciones estratégicas que impulsen tu crecimiento.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <Briefcase className="h-5 w-5" />
                  <span>Experiencia Comprobada</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <PieChart className="h-5 w-5" />
                  <span>Análisis Detallado</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <LineChart className="h-5 w-5" />
                  <span>Mejora Continua</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-500">
                  <ArrowUpRight className="h-5 w-5" />
                  <span>Resultados Medibles</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 dark:from-orange-500/10 dark:to-yellow-500/10 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Consulting Services"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}