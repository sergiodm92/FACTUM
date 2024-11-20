import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesGoUp from '../common/animated-particles/ParticlesGoUp';
import { useTranslation } from 'react-i18next';
import { AnimatedCounter } from '../common';
import { useState, useEffect } from 'react';

export function Hero() {
  const { t } = useTranslation();
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % 3); // Cambia el número de título (3 es el total de títulos dinámicos)
    }, 4000); // Cambiar cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const stats = [
    { value: 500, label: t('home.hero.stats.projects') },
    { value: 98, label: t('home.hero.stats.satisfaction') },
    { value: 15, label: t('home.hero.stats.years') },
    { value: 200, label: t('home.hero.stats.clients') },
  ];

  return (
    <div
      id="home"
      className="relative lg:pt-16 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <ParticlesGoUp />
      <div className="relative py-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('home.hero.title')}
            </motion.h1>
            {/* Texto dinámico con efecto */}
            <div className="overflow-hidden h-16">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={titleNumber} // Clave única para que Framer Motion detecte cambios
                  className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
                  initial={{ opacity: 0, x: 0 }} // Animación de entrada
                  animate={{ opacity: 1, y: 0 }} // Animación cuando está activo
                  exit={{ opacity: 0, x: 0 }} // Animación de salida
                  transition={{ duration: 0.5 }}
                >
                  {t(`home.hero.title_dynamic.${titleNumber}`)}
                </motion.h1>
              </AnimatePresence>
            </div>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                {t('home.hero.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {t('home.hero.button2')}
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 dark:from-orange-500/10 dark:to-yellow-500/10 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Business consulting"
              className="relative rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <AnimatedCounter value={stat.value} />
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
