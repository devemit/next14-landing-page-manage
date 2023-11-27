import Button from '../ui/button.tsx/button';
import styles from './footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook, CiYoutube, CiTwitter } from 'react-icons/ci';
import logo from '../../public/logo.svg';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.first}>
        <input type='text' placeholder='Updates in your inbox' />
        <Button
          title='GO'
          style={{ backgroundColor: 'var(--primary-red)', fontSize: 15, color: 'white' }}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.list_left}>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </div>
        <div className={styles.list_rigth}>
          <li>Carees</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </div>
      </div>
      <div className={styles.one}>
        <div className={styles.icons}>
          <FaInstagram size={22} className={styles.icon} />
          <CiFacebook size={22} className={styles.icon} />
          <CiTwitter size={22} className={styles.icon} />
          <CiYoutube size={22} className={styles.icon} />
        </div>
        <Image src={logo} height={20} width={85} alt='logo' />
      </div>
    </footer>
  );
}
