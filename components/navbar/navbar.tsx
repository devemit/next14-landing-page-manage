'use client';
import { useState } from 'react';
import styles from './navbar.module.css';
import { routes } from '@/utils/routes';
import Button from '../ui/button.tsx/button';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  function toggle() {
    setNav(!nav);
  }
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} height={20} width={85} alt='logo' />
        </div>
        <div onClick={toggle} className={styles.hamburger}>
          {nav ? <MdClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <ul className={`${styles.list} ${nav && styles.active}`}>
          {routes.map((route) => (
            <li key={route} className={styles.list_item}>
              {route}
            </li>
          ))}
        </ul>
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
