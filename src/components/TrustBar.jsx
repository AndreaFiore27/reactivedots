import DotBackground from './DotBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from '../styles/TrustBar.module.css';

// Client logos
import logoAnci from '../assets/clients/anci.png';
import logoBoolean from '../assets/clients/boolean.webp';
import logoCaffarel from '../assets/clients/caffarel.webp';
import logoVergnano from '../assets/clients/vergnano.webp';
import logoCredenza from '../assets/clients/credenza-group.png';
import logoFutur from '../assets/clients/futurfestival.png';
import logoIqos from '../assets/clients/iqos.webp';
import logoIeg from '../assets/clients/ieg.png';
import logoKappa from '../assets/clients/kappa.png';
import logoKozel from '../assets/clients/kozel.png';
import logoLigier from '../assets/clients/ligier.avif';
import logoLindt from '../assets/clients/lindt.webp';
import logoLingotto from '../assets/clients/lingotto.avif';
import logoMerlo from '../assets/clients/merlo.webp';
import logoNaturaViva from '../assets/clients/natura-viva.png';
import logoPepsi from '../assets/clients/pepsi.png';
import logoPeroni from '../assets/clients/peroni.png';
import logoRedbull from '../assets/clients/redbull.avif';
import logoSantanna from '../assets/clients/santanna.webp';
import logoStellantis from '../assets/clients/stellantis.avif';
import logoTorinoFC from '../assets/clients/torino-fc.png';
import logoTurismo from '../assets/clients/turismo-torino.png';
import logoTwinkly from '../assets/clients/twinkly.webp';
import logoZoom from '../assets/clients/zoom.avif';
import logoPromoArredo from '../assets/clients/promo-arredo.png';

const LOGOS = [
  { src: logoVergnano, alt: 'Caffè Vergnano' },
  { src: logoTorinoFC, alt: 'Torino FC' },
  { src: logoKappa, alt: 'Kappa' },
  { src: logoLigier, alt: 'Ligier' },
  { src: logoRedbull, alt: 'Red Bull' },
  { src: logoPepsi, alt: 'Pepsi' },
  { src: logoLindt, alt: 'Lindt' },
  { src: logoStellantis, alt: 'Stellantis' },
  { src: logoPeroni, alt: 'Peroni' },
  { src: logoIqos, alt: 'IQOS' },
  { src: logoCaffarel, alt: 'Caffarel' },
  { src: logoFutur, alt: 'Kappa FuturFestival' },
  { src: logoKozel, alt: 'Kozel' },
  { src: logoMerlo, alt: 'Merlo' },
  { src: logoSantanna, alt: "Acqua Sant'Anna" },
  { src: logoTwinkly, alt: 'Twinkly' },
  { src: logoBoolean, alt: 'Boolean' },
  { src: logoAnci, alt: 'ANCI' },
  { src: logoNaturaViva, alt: 'Natura Viva' },
  { src: logoLingotto, alt: 'Lingotto Fiere' },
  { src: logoIeg, alt: 'IEG' },
  { src: logoCredenza, alt: 'Credenza Group' },
  { src: logoTurismo, alt: 'Turismo Torino' },
  { src: logoZoom, alt: 'Zoom' },
  { src: logoPromoArredo, alt: 'Promo Arredo' },
];

export default function TrustBar() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} ref={ref}>
      <DotBackground />
      <p className={styles.label} data-reveal="fade">Hanno lavorato con noi</p>
      <div className={styles.marqueeWrapper} data-reveal="fade">
        <div className={styles.marqueeTrack}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className={styles.logo}>
              <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
