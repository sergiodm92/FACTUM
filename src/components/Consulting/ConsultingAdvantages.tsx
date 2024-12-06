import { Briefcase, PieChart, LineChart, ArrowUpRight } from "lucide-react";

const ConsultingAdvantages = () => {
  const advantages = [
    { icon: <Briefcase className="h-5 w-5" />, label: "Experiencia Comprobada" },
    { icon: <PieChart className="h-5 w-5" />, label: "Análisis Detallado" },
    { icon: <LineChart className="h-5 w-5" />, label: "Mejora Continua" },
    { icon: <ArrowUpRight className="h-5 w-5" />, label: "Resultados Medibles" },
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

export default ConsultingAdvantages;
