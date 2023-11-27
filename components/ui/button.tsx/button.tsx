import styles from './button.module.css';
type ButtonProps = {
  title: string;
  style: React.CSSProperties;
};

export default function Button({ style, title }: ButtonProps) {
  return (
    <button className={styles.button} style={style}>
      {title}
    </button>
  );
}
