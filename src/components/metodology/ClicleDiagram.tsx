import { useEffect, useState } from "react";
import { ArrowBigRight } from "lucide-react";

interface Step {
    label: string;
    color: string;
}

const CycleDiagram = () => {
    const steps: Step[] = [
        { label: 'RELEVAR', color: 'bg-blue-500' },
        { label: 'EVALUAR', color: 'bg-green-500' },
        { label: 'DESARROLLAR', color: 'bg-yellow-500' },
        { label: 'IMPLEMENTAR', color: 'bg-orange-500' },
        { label: 'MONITOREAR Y REFINAR', color: 'bg-red-500' },
    ];

    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

    useEffect(() => {
        const timers: NodeJS.Timeout[] = []; // Para almacenar los timers
        steps.forEach((_, index) => {
            const timer = setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
            }, index * 1000); // 1000 ms de retraso entre cada fase
            timers.push(timer);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer)); // Limpiar timers al desmontar
        };
    }, []);

    return (
        <div className="flex items-center justify-center p-12">
            {steps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                    {/* Aplicar animación solo si la fase es visible */}
                    <div
                        className={`ml-2 mr-2 transition-opacity duration-700 ${visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'
                            } ${step.color} text-white px-4 py-2 rounded-full`}
                    >
                        {step.label}
                    </div>
                    {index < steps.length - 1 && visibleSteps.includes(index + 1) && (
                        <ArrowBigRight className="text-gray-600 dark:text-white ml-2" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CycleDiagram;
