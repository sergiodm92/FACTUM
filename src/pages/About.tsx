import { useTranslation } from 'react-i18next';
import { Award, Target, Users, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ParticlesGlow from '../components/animated-particles/ParticlesGlow';

export default function About() {
  const { t } = useTranslation();


  const team = [
    {
      name: 'Carlos Rodríguez',
      role: 'CEO & Consultor Principal',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      description: 'Con más de 15 años de experiencia en consultoría estratégica y transformación empresarial.'
    },
    {
      name: 'Ana Martínez',
      role: 'CTO & Directora de Tecnología',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      description: 'Experta en desarrollo de software y soluciones tecnológicas innovadoras.'
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Excelencia',
      description: 'Compromiso con la calidad y mejora continua en todos nuestros servicios.'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'Innovación',
      description: 'Búsqueda constante de soluciones creativas y tecnologías avanzadas.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Colaboración',
      description: 'Trabajo en equipo cercano con nuestros clientes para alcanzar objetivos comunes.'
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: 'Impacto Global',
      description: 'Soluciones que trascienden fronteras y generan valor internacional.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ParticlesGlow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('about.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Nuestro Equipo Directivo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-500 mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}