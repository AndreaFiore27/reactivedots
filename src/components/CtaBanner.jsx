import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from '../styles/CtaBanner.module.css';

export default function CtaBanner() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section}>
      <div className={styles.dotOverlay} />
      <div className={styles.inner} ref={ref}>
        <span className={styles.tag} data-reveal="fade">PRONTO A PARTIRE?</span>
        <h2 className={styles.heading} data-reveal>
          LET'S MAKE IT<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.subtitle} data-reveal="fade">
          Hai un'idea, un brief, o anche solo un foglio bianco?<br />
          Inizia da qui. Ti rispondiamo entro 48 ore con pensieri concreti.
        </p>
        <div className={styles.actions} data-reveal="fade">
          <a href="#contatti" className={styles.btnPrimary}>
            Richiedi preventivo
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#works" className={styles.btnSecondary}>
            Vedi i lavori
          </a>
        </div>
      </div>
      <div className={styles.stripe} />
    </section>
  );
}
