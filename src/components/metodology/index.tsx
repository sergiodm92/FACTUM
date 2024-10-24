import { useEffect, useRef, useState } from "react";
import CycleDiagram from "./ClicleDiagram";

const Metodology = () => {
    const diagramRef = useRef<HTMLDivElement | null>(null); // Crear una referencia para el diagrama
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Cambiar a verdadero cuando se está en el viewport
                    observer.disconnect(); // Dejar de observar una vez que es visible
                }
            },
            { threshold: 0.1 } // Activar cuando al menos el 10% es visible
        );

        if (diagramRef.current) {
            observer.observe(diagramRef.current); // Observar el elemento
        }

        return () => {
            if (diagramRef.current) {
                observer.unobserve(diagramRef.current); // Limpiar el observador
            }
        };
    }, []);

    return (
        <section id="automation-process" className="py-20 bg-gray-200 dark:bg-gray-700 text-white">
            <div className="container mx-auto px-4 text-center text-black dark:text-white">
                <h2 className="text-4xl font-bold mb-8">Automatización de Procesos</h2>
                <p className="mb-8">
                    La automatización de procesos es fundamental para optimizar la eficiencia operativa y reducir errores. Al implementar soluciones automatizadas, las organizaciones pueden liberar a sus empleados de tareas repetitivas y monótonas, permitiéndoles enfocarse en actividades de mayor valor. Además, la automatización mejora la consistencia en los procesos, lo que resulta en un mejor servicio al cliente y un aumento en la rentabilidad.
                </p>
                <h3 className="text-2xl font-bold mb-12 text-black dark:text-white">¿Cómo abordamos la automatización?</h3>
                
                {/* Descripción sobre la automatización de procesos */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {/* Relevamiento de oportunidades */}
                    <div>
                        <h4 className="text-2xl font-bold text-orange-500">Relevamiento de oportunidades.</h4>
                        <p className="mt-2">
                            Con foco en el valor agregado en el cliente y rentabilidad de la compañía, mediante entrevistas y visitas al proceso, se relevan las necesidades y oportunidades de automatización.
                        </p>
                    </div>

                    {/* Evaluación de factibilidad */}
                    <div>
                        <h4 className="text-2xl font-bold text-orange-500">Evaluación de factibilidad.</h4>
                        <p className="mt-2">
                            Luego del relevamiento, evaluamos la capacidad del proceso y analizamos las ventajas de llevar a cabo la automatización, considerando las condiciones de contexto, costo y nivel de impacto del resultado.
                        </p>
                    </div>

                    {/* Desarrollo e implementación */}
                    <div>
                        <h4 className="text-2xl font-bold text-orange-500">Desarrollo e implementación.</h4>
                        <p className="mt-2">
                            Dada la sensibilidad e importancia, el proceso de desarrollo e implementación es realizado por Factum.
                        </p>
                    </div>

                    {/* Monitoreo y Refinamiento */}
                    <div>
                        <h4 className="text-2xl font-bold text-orange-500">Monitoreo y Refinamiento.</h4>
                        <p className="mt-2">
                            Por razones metodológicas, la implementación es controlada y asegurado su refinamiento.
                        </p>
                    </div>
                </div>

                {/* Diagrama de Sección */}
                <div className="hidden md:flex w-full justify-center mt-12" ref={diagramRef}>
                    {isVisible && <CycleDiagram />} {/* Renderizar solo si es visible */}
                </div>
            </div>
        </section>
    );
};

export default Metodology;
