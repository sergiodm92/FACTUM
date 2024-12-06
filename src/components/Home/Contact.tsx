"use client";
import { FormContact } from "../common/FormContact";
import { useTranslation } from "react-i18next";

export function Contact() {

  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:pl-32 md:pr-32"> 
            {t("contact.description")}
          </p>
        </div>

        <div className="flex items-center justify-center gap-12">
          <FormContact />
        </div>
      </div>
    </section>
  );
}
