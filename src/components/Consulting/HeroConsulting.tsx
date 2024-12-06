"use client";
import { useTranslation } from "react-i18next";

const HeroConsulting = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
        {t("consulting.title")}
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t("consulting.subtitle")}</p>
    </div>
  );
};

export default HeroConsulting;
