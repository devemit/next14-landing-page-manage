import styles from './styles/home.module.css';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Experiences from '@/components/experiences/experiences';
import MiniFooter from '@/components/subfooter/mini-footer';
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <MiniFooter />
    </main>
  );
}
