import { Database, Shield, Zap, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Software() {
  const { t } = useTranslation();
  return (
    <section id="software" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t('home.software.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t('home.software.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 dark:from-orange-500/10 dark:to-yellow-500/10 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Software solutions"
              className="relative rounded-3xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Database className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('home.software.data')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('home.software.data_description')}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('home.software.security')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('home.software.security_description')}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Zap className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('home.software.automation')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('home.software.automation_description')}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Smartphone className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('home.software.mobile')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('home.software.mobile_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}