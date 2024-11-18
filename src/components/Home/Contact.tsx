import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Estamos aquí para ayudarte a alcanzar tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">contacto@crenterprise.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Teléfono</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">+34 900 123 456</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ubicación</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Calle Principal 123<br />
                  28001 Madrid, España
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}