import Slider from "react-slick";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(1);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Desactiva las flechas para mayor simplicidad
    autoplay: true, // Activa el autoplay
    autoplaySpeed: 3000, // Velocidad del autoplay (en ms)
    afterChange: (current: number) => setCurrentSlide(current),
    customPaging: (i: number) => (
      <div className="relative">
        <div className={`w-[8px] h-[8px] bg-transparent ${i === currentSlide ? 'bg-orange-700' : 'bg-transparent'
          } border-orange-600 border-[1px] rounded-full absolute top-0 left-0 mt-5 slick-dot`}></div>
      </div>
    ),
  };

  return (
    <section id="home" className="relative py-24 gap-12 flex flex-col items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700">
      {/* Slider de texto */}
      <h1 className="text-4xl lg:text-6xl font-semi-bold text-black dark:text-white">{t('clients.title')}</h1> 
      <h3 className="text-2xl font-semi-bold text-black dark:text-white">Siderurgico e Ingeniería</h3>
      <div className="relative z-10 w-full px-4 text-center">
        <Slider {...settings}>
          <div className="flex items-center justify-center">
          <img src="/clients/edenor.png" alt="Edenor" className="w-64 m-auto" />
          </div>
          <div className="flex items-center justify-center">
          <img src="/clients/edenor.png" alt="Edenor" className="w-64 m-auto" />
          </div>
          <div className="flex items-center justify-center">
          <img src="/clients/edenor.png" alt="Edenor" className="w-64 m-auto" />
          </div>
          <div className="flex items-center justify-center">
          <img src="/clients/edenor.png" alt="Edenor" className="w-64 m-auto" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/clients/edenor.png" alt="Edenor" className="w-64 m-auto" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
