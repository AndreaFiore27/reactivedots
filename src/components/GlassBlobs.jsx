import styles from '../styles/GlassBlobs.module.css';

export default function GlassBlobs() {
  return (
    <div className={styles.container}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
    </div>
  );
}
