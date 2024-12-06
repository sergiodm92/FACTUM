//clients
import acerbrag from '@public/assets/clients/acerbrag.png'
import agroland from '@public/assets/clients/agroland.png'
import alpargatas from '@public/assets/clients/alpargatas.png'
import alpek from '@public/assets/clients/alpek.png'
import cabargentina from '@public/assets/clients/cabargentina.png'
import carboclor from '@public/assets/clients/carboclor.png'
import danone from '@public/assets/clients/danone.webp'
import idelpro from '@public/assets/clients/idelpro.png'
import kohinoor from '@public/assets/clients/kohinoor.png'
import lartirigoyen from '@public/assets/clients/lartirigoyen.svg'
import magret from '@public/assets/clients/magret.png'
import mccain from '@public/assets/clients/mccain.png'
import modulmet from '@public/assets/clients/modulmet.png'
import ricoh from '@public/assets/clients/ricoh.png'
import roemmers from '@public/assets/clients/roemmers.png'
import styropek from '@public/assets/clients/styropek.png'
import telecom from '@public/assets/clients/telecom.png'
import varroc from '@public/assets/clients/varroc.png'

//Metadata del sitio
export const siteProps = {
  title: "Factum",
  authors: [{ name: "Luis Gimenez", url: "https://www.linkedin.com/in/luisergimenez/" }, { name: "Danimir Lorkovic", url: "https://www.linkedin.com/in/danimirlorkovic/" }],
  description: "Transform your business with strategy and innovation",
  url: "https://factum.vercel.app",
  image: "https://factum.vercel.app/assets/images/factum-logo.png",
  twitter: "https://twitter.com/factum",
  linkedin: "https://www.linkedin.com/company/factum/",
  instagram: "https://www.instagram.com/factum/",
  email: "sergiodm92@gmail.com",
  keywords: "factum, software, consulting, process optimization, optimizacion de procesos, paperless",
};


//estadísticas en home
export const stats = [
  { value: 500, label: 'home.hero.stats.projects' }, //proyectos
  { value: 98, label: 'home.hero.stats.satisfaction' }, //satisfacción
  { value: 15, label: 'home.hero.stats.years' }, //años
  { value: 200, label: 'home.hero.stats.clients' }, //clientes
];

//slider de clientes
export const clients = [
  { name: 'Agroland', logo: agroland },
  { name: 'Alpargatas', logo: alpargatas },
  { name: 'Acerbrag', logo: acerbrag },
  { name: 'alpek', logo: alpek },
  { name: 'Cabargentina', logo: cabargentina },
  { name: 'Carboclor', logo: carboclor },
  { name: 'Danone', logo: danone },
  { name: 'Idelpro', logo: idelpro },
  { name: 'Kohinoor', logo: kohinoor, },
  { name: 'Lartirigoyen', logo: lartirigoyen },
  { name: 'Magret', logo: magret },
  { name: 'Mccain', logo: mccain },
  { name: 'Modulmet', logo: modulmet },
  { name: 'Ricoh', logo: ricoh },
  { name: 'Roemmers', logo: roemmers },
  { name: 'Styropek', logo: styropek },
  { name: 'Telecom', logo: telecom },
  { name: 'Varroc', logo: varroc },
];


export const contactInfo = {
  visible: false, // true para mostrar el formulario de contacto, false para ocultarlo
  name: 'Luis Gimenez',
  email: 'luis.gimenez@factum.com',
  phone: '+56 999 999 999',
  address: 'Av. de las Américas, 100, Buenos Aires',
  city: 'Buenos Aires',
  country: 'Argentina'
}

