import PageTransition from '@/components/common/PageTransition';
import { ClientSlider, Hero, Services, Software, Contact } from '../components/Home';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <ClientSlider />
      <Software />
      <Contact />
    </PageTransition>
  );
}