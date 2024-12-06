"use client";
import { LineChart, Settings, TrendingUp, Code } from 'lucide-react';
import { useTranslation } from "react-i18next";

export function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Settings className="h-8 w-8 text-orange-600 dark:text-orange-500" />,
      title: t("home.services.consulting"),
      description: t("home.services.consulting_description")
    },
    {
      icon: <Code className="h-8 w-8 text-orange-600 dark:text-orange-500" />,
      title: t("home.services.software"),
      description: t("home.services.software_description")
    },
    {
      icon: <LineChart className="h-8 w-8 text-orange-600 dark:text-orange-500" />,
      title: t("home.services.data"),
      description: t("home.services.data_description")
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-500" />,
      title: t("home.services.process_optimization"),
      description: t("home.services.process_optimization_description")
    },

  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("home.services.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t("home.services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
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
    </section>
  );
}