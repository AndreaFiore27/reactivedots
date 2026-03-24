import { useState } from 'react';
import { useCompactNav } from '../hooks/useCompactNav';
import styles from '../styles/Navbar.module.css';

const NAV_LINKS = [
  { label: 'Studio', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Lavori', href: '#works' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const isCompact = useCompactNav(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${isCompact ? styles.compact : ''}`}>
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            REACTIVEDOTS<span className={styles.logoDot}>●</span>
          </a>

          <div className={styles.desktopLinks}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
            <a href="#contatti" className={`btn btn-primary ${styles.navBtn}`}>
              Start a project
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <div className={styles.mobileCta}>
          <a href="#contatti" className="btn btn-primary" onClick={handleLinkClick}>
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
