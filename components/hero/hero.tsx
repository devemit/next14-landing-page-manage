import Image from 'next/image';
import styles from './herosec.module.css';
import hero from '../../public/illustration-intro.svg';
import Button from '../ui/button.tsx/button';
export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.image_wrapper}>
        <Image src={hero} alt='hero-image' fill className={styles.image} />
      </div>
      <section className={styles.hero_section}>
        <h1 className={styles.title}>Bring everyone togheter to build better products.</h1>
        <p className={styles.text}>
          Manage makes it simple for software teams to plan day to day tasks while keeping the
          larger team goals in view.
        </p>
        <div className={styles.button}>
          <Button
            title='Get Started'
            style={{
              backgroundColor: 'var(--primary-red)',
              color: 'white',
              fontSize: 16,
            }}
          />
        </div>
      </section>
    </main>
  );
}
