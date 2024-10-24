import React from 'react'
import { Code, Server, Database, Globe, Cpu, Cloud } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

const WhyUs: React.FC = () => {
  const { t } = useLanguage()

    const data = [
    {
      title: "Diagnostico",
      icon: Code,
      description: "Mas de 50 empresas en 70 locaciones ubicados en 4 paises diferentes(Argentina, Mexico, Perú y Uruguay) han sido nuestros clientes. Mas de 15 rubros diferentes (Alimentos, Energía, Petroquímicos, Quimicos, Laboratorios, etc.) han sido nuestros servicios.",
    },
    {
      title: "Proyectos de Transformación",
      icon: Server,
      description: "Estamos comprometidos con la innovación y la mejora continua en nuestros procesos y tecnologías.",
    },
    {
      title: "Entrenamientos",
      icon: Database,
      description: "Llevamos a cabo un analisis integral, porque el valor agregado y la rentabilidad de la compañia estan en función de la integración de personas, procesos y tecnologías.",
    },
    {
      title: "Gerencia de desempeño",
      icon: Cpu,
      description: "Nos encargamos de agregar valor mejorando procesos de negocio.",
    },
    {
      title: "Automatización de procesos",
      icon: Globe,
      description: "Nuestros procesos y tecnologías se enfocan en la eficacia y la seguridad de nuestros sistemas.",
    },
    
  ]

  return (
    <section id="whyus" className="py-20 bg-orange-300 dark:bg-orange-500  ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-700">{t('whyus.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((feature, index) => {
            return (
              <div key={index} className="skill-card bg-white dark:bg-white p-6 rounded-lg shadow-md">
                  <h2 className='text-2xl font-semi-bold mb-5'>{feature.title}</h2>
                  <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs