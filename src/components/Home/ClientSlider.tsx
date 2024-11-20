import { motion } from 'framer-motion';

export function ClientSlider() {
  // Array of client logos with their names and URLs
  const clients = [
    {
      name: 'Tech Corp',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
    },
    {
      name: 'Innovate Solutions',
      logo: 'https://images.unsplash.com/photo-1599305446868-59e861c26d41?w=200&h=100&fit=crop&q=80',
    },
    {
      name: 'Global Systems',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
    },
    {
      name: 'Future Finance',
      logo: 'https://images.unsplash.com/photo-1599305446868-59e861c26d41?w=200&h=100&fit=crop&q=80',
    },
    {
      name: 'Smart Solutions',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
    },
    {
      name: 'Digital Dynamics',
      logo: 'https://images.unsplash.com/photo-1599305446868-59e861c26d41?w=200&h=100&fit=crop&q=80',
    },
  ];

  // Double the array to create seamless infinite effect
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Nuestros Clientes
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Empresas que confían en nosotros
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
          
          {/* Slider container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 30,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {doubledClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4 group"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300 rounded-lg" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}