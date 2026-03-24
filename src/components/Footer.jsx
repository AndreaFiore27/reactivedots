import DotBackground from './DotBackground';
import styles from '../styles/Footer.module.css';

const NAV_LINKS = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Manifesto', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Lavori', href: '#works' },
];

const SERVICES = [
  'Video Production',
  'Brand Photography',
  'Creative Direction',
  'Post Production',
  'Content Strategy',
];

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Vimeo', href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <DotBackground />
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              REACTIVEDOTS<span className={styles.logoDot}>●</span>
            </div>
            <p className={styles.brandSub}>the making studio</p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Studio</h4>
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Servizi</h4>
              {SERVICES.map((s) => (
                <a key={s} href="#servizi" className={styles.columnLink}>
                  {s}
                </a>
              ))}
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Connect</h4>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className={styles.columnLink}>
                  {s.label}
                </a>
              ))}
              <span className={styles.contactItem}>hello@reactivedots.com</span>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © 2025 REACTIVEDOTS — All rights reserved
          </span>
          <div className={styles.legal}>
            <span className={styles.legalLink}>A Simpol. Universe — Torino, Italia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
