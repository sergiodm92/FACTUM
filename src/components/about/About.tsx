import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (id: string) => {
    setActiveModal(id);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Esperar la duración de la animación antes de ocultar el modal
    setTimeout(() => {
      setActiveModal(null);
    }, 300); // Duración de la animación (en milisegundos)
  };

  const renderModal = (id: string, name: string, imgSrc: string, role: string, description: string, experience: string, profession: string, email: string, phone: string, linkedin: string, linkedinName: string) => (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${activeModal === id && isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={closeModal}
    >
      <div
        className={`bg-orange-300 dark:bg-gray-600 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto relative transform transition-transform duration-300 ${activeModal === id && isModalVisible ? 'scale-100' : 'scale-75'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-black dark:text-white font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
        <img src={imgSrc} alt={name} className="h-40 w-40 object-cover rounded-full mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 text-center dark:text-white">{name}</h3>
        <p className="text-center text-gray-600 mb-2 dark:text-white">{role}</p>
        <p className="text-center text-gray-600 mb-4 dark:text-white">{experience} años de experiencia</p>
        <p className="text-center text-gray-600 mb-4 dark:text-white">{profession}</p>
        <p className="text-left text-gray-700 dark:text-white">{description}</p>
        <a href='mailto:comercial@factumconsultora.com' className="flex items-center text-gray-600 dark:text-gray-300 mt-4">
          <Mail size={20} className="mr-2" />
          {email}
        </a>
        <p className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
          <Phone size={20} className="mr-2" />
          {phone}
        </p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
          <Linkedin size={20} className="mr-2" />
          {linkedinName}
        </a>
      </div>
    </div>
  );

  return (
    <section id="aboutus" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-md text-center mb-3 text-gray-900 dark:text-orange-500">{t('about.uperTitle')}</p>
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-3 text-gray-700 dark:text-white">{t('about.description')}</p>
        </div>
      </div>

      {/* CEOs Section */}
      <div className="flex flex-wrap w-full justify-center mt-12 gap-24 ">
        {/* CEO 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="/about/avatar-1.png" alt="DANIMIR LORKOVIC" className="h-64 w-64 object-cover rounded-full shadow-lg" />
          <h3 className="text-xl font-semibold mt-4 text-black dark:text-white">DANIMIR LORKOVIC</h3>
          <h3 className="text-md mt-2 text-black dark:text-orange-500">CO-FOUNDER</h3>
          <button
            onClick={() => openModal('ceo1')}
            className="mt-2 text-black hover:text-gray-800 dark:text-white dark:hover:text-orange-500 transition duration-200"
          >
            Ver más
          </button>
        </div>

        {/* CEO 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="/about/avatar-2.png" alt="LUIS GIMENEZ" className="h-64 w-64 object-cover rounded-full shadow-lg" />
          <h3 className="text-xl font-semibold mt-4 text-black dark:text-white">LUIS GIMENEZ</h3>
          <h3 className="text-md mt-2 text-black dark:text-orange-500">CO-FOUNDER</h3>
          <button
            onClick={() => openModal('ceo2')}
            className="mt-2 text-black hover:text-gray-800 dark:text-white dark:hover:text-orange-500 transition duration-200"
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Modals */}
      {renderModal(
        'ceo1',
        'DANIMIR LORKOVIC',
        '/about/avatar-1.png',
        'CEO & Co-Founder',
        'Ingeniero Eléctrico con 15 años de experiencia en el desarrollo de proyectos tecnológicos. Especializado en gestión de equipos multidisciplinarios y estrategia de innovación.',
        '15',
        'Socio Consultor',
        'danimir@factumconsultora.com',
        '(+54)11 6300 3314',
        'https://www.linkedin.com/in/danimirlorkovic/?originalSubdomain=ar',
        'Danimir Lorkovic'

      )}

      {renderModal(
        'ceo2',
        'LUIS GIMENEZ',
        '/about/avatar-2.png',
        'CTO & Co-Founder',
        'Ingeniero en Software con 12 años de experiencia en desarrollo de software de alto rendimiento. Experto en diseño de sistemas y arquitecturas escalables.',
        '12',
        'Socio Consultor',
        'luis@factumconsultora.com',
        '(+54)11 4165 8088',
        'https://www.linkedin.com/in/luisergimenez/?originalSubdomain=ar',
        'Luis Ernesto Gimenez'
      )}
    </section>
  );
};

export default About;
