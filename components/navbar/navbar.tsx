import styles from './navbar.module.css';
import Button from '../ui/button.tsx/button';
import logo from '../../public/logo.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} height={20} width={85} alt='logo' />
        </div>
        <div className={styles.button}>
          <Button
            title='Get Started'
            style={{
              backgroundColor: 'var(--primary-red)',
              fontSize: 12,
              color: 'white',
            }}
          />
        </div>
      </nav>
    </div>
  );
}
