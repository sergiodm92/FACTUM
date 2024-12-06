 "use client";
 import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center min-h-screen justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="flex justify-center flex-col sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('not_found.title')}</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{t('not_found.subtitle')}</p>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
            {t('not_found.button')}
          </a>
        </div>
      </div>
    </div>
  );
}