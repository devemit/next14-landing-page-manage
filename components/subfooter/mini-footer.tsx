'use client';

import Button from '../ui/button.tsx/button';
import styles from './mini-footer.module.css';
import { motion } from 'framer-motion';

export default function MiniFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      <div className={styles.title}>Simplify how your team works today</div>
      <div>
        <Button
          title='Get Started'
          style={{
            backgroundColor: 'white',
            color: 'var(--primary-red)',
            fontSize: 15,
          }}
        />
      </div>
    </motion.div>
  );
}
