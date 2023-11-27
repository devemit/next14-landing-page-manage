import Button from '../ui/button.tsx/button';
import styles from './mini-footer.module.css';
export default function MiniFooter() {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}
