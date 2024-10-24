const OursBeginning = () => {
  return (
    <section className="bg-orange-300 dark:bg-orange-500 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Nuestros Valores y Principios</h2>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-16 md:mt-12">
          {/* Descripción a la izquierda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg mb-6">
              En Factum, nos guiamos por un conjunto de valores fundamentales que definen nuestra cultura y nuestro enfoque en la consultoría. Creemos en la integridad, la innovación y el compromiso con nuestros clientes.
            </p>
            <p className="text-lg mb-4">
              Nuestra misión es crear un impacto positivo y sostenible en las organizaciones a través de una colaboración cercana y un profundo entendimiento de sus necesidades.
            </p>
            <p className="text-lg">
              Promovemos un ambiente de trabajo inclusivo y diverso, donde cada voz es escuchada y valorada.
            </p>
          </div>

          {/* Esquema de principios a la derecha */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="border-l-4 h-16 border-blue-500 pl-4 mb-6">
              <h3 className="text-lg font-bold">Integridad</h3>
              <p className="text-sm">Actuamos con transparencia y ética en todas nuestras interacciones.</p>
            </div>

            <div className="border-l-4 h-16 border-green-500 pl-4 mb-6">
              <h3 className="text-lg font-bold">Innovación</h3>
              <p className="text-sm">Buscamos constantemente nuevas formas de mejorar y optimizar.</p>
            </div>

            <div className="border-l-4 h-16 border-yellow-500 pl-4 mb-6">
              <h3 className="text-lg font-bold">Colaboración</h3>
              <p className="text-sm">Fomentamos el trabajo en equipo y la comunicación abierta.</p>
            </div>

            <div className="border-l-4 h-16 border-purple-500 pl-4 mb-6">
              <h3 className="text-lg font-bold">Sostenibilidad</h3>
              <p className="text-sm">Nos comprometemos a generar un impacto positivo en la comunidad y el medio ambiente.</p>
            </div>

            <div className="border-l-4 h-16 border-red-500 pl-4">
              <h3 className="text-lg font-bold">Compromiso</h3>
              <p className="text-sm">Estamos dedicados a cumplir con las expectativas de nuestros clientes y superar sus necesidades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OursBeginning;
