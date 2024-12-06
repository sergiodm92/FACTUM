import { Zap, Settings, Folder, BarChart2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const SoftwareAdvantages = () => {
  const { t } = useTranslation();

  const advantages = [
    { icon: <Zap className="h-5 w-5" />, label: t("software.high_performance") },
    { icon: <Settings className="h-5 w-5" />, label: t("software.customizable") },
    { icon: <Folder className="h-5 w-5" />, label: t("software.paperless") },
    { icon: <BarChart2 className="h-5 w-5" />, label: t("software.data_analysis") },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 text-orange-600 dark:text-orange-500"
        >
          {advantage.icon}
          <span>{advantage.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SoftwareAdvantages;
