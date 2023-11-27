import Button from '../ui/button.tsx/button';
import styles from './experiences.module.css';
import Person from '../card/person';

export default function Experiences() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>What they have said</div>
      <div className={styles.persons}>
        <Person />
      </div>

      <Button
        title='Get Started'
        style={{
          backgroundColor: 'var(--primary-red)',
          color: 'white',
          fontSize: 16,
          marginTop: '2rem',
        }}
      />
    </div>
  );
}
