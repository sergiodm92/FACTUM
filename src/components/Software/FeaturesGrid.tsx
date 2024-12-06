import FeaturesItem from "./FeaturesItem";
import { Code, Database, Lock, Cloud } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-orange-600" />,
      title: "Desarrollo a Medida",
      description: "Soluciones personalizadas que se adaptan perfectamente a tus necesidades específicas.",
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: "Gestión de Datos",
      description: "Sistemas robustos para almacenar y analizar datos empresariales de manera eficiente.",
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600" />,
      title: "Seguridad Avanzada",
      description: "Protección integral de datos con los más altos estándares de seguridad.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      title: "Soluciones Cloud",
      description: "Implementaciones en la nube para máxima escalabilidad y disponibilidad.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <FeaturesItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
