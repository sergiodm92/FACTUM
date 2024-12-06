import { TrendingUp, Target, Users, BarChart2 } from "lucide-react";
import ServiceItem from "./ServiceItem";

const ServicesGrid = () => {
    const services = [
        {
            icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
            title: "Optimización de Procesos",
            description: "Análisis y mejora de procesos empresariales para maximizar la eficiencia operativa.",
        },
        {
            icon: <Target className="h-8 w-8 text-orange-600" />,
            title: "Planificación Estratégica",
            description: "Desarrollo de estrategias personalizadas para alcanzar objetivos empresariales.",
        },
        {
            icon: <Users className="h-8 w-8 text-orange-600" />,
            title: "Gestión del Cambio",
            description: "Acompañamiento en la transformación organizacional y cultural.",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-orange-600" />,
            title: "Análisis de Datos",
            description: "Interpretación de datos para la toma de decisiones estratégicas.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ServiceItem
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default ServicesGrid;
