import { useRef, useState, useEffect } from 'react';
import DotBackground from './DotBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useMouseGlow } from '../hooks/useMouseGlow';
import placeholderImg from '../assets/placeholder-portfolio.jpg';
import styles from '../styles/Services.module.css';

const BUDGETS = [
  '< 5.000€',
  '5.000€ — 15.000€',
  '15.000€ — 30.000€',
  '30.000€ — 50.000€',
  '> 50.000€',
  'Preferisco discuterne',
];

const RELATED_PROJECTS = [
  { title: 'Brand Film — Caffè Vergnano', category: 'Video Production', client: 'Caffè Vergnano', service: '01' },
  { title: 'Docu-series — Behind the Brand', category: 'Branded Content', client: 'Fashion House', service: '01' },
  { title: 'VFX Spot — Automotive', category: 'Post-Produzione', client: 'Automotive Brand', service: '01' },
  { title: 'Shooting Day — 30 Asset in 8 ore', category: 'Content for Social', client: 'Brand Fashion', service: '02' },
  { title: 'Kappa FuturFestival — Live Coverage', category: 'Eventi & Live', client: 'Kappa FuturFestival', service: '02' },
  { title: 'Packshot Collection — Lindt', category: 'Fotografia', client: 'Lindt', service: '03' },
  { title: 'Shooting Day — 30 Asset in 8 ore', category: 'Content for Social', client: 'Brand Fashion', service: '03' },
  { title: 'AI Avatar — Virtual Spokesperson', category: 'AI Content', client: 'Tech Startup', service: '04' },
  { title: 'Product CGI — Launch Reveal', category: '3D & Virtual', client: 'Consumer Electronics', service: '04' },
  { title: 'VFX Spot — Automotive', category: 'Post-Produzione', client: 'Automotive Brand', service: '04' },
  { title: 'Kappa FuturFestival — Live Coverage', category: 'Eventi & Live', client: 'Kappa FuturFestival', service: '05' },
  { title: 'Brand Film — Caffè Vergnano', category: 'Video Production', client: 'Caffè Vergnano', service: '05' },
  { title: 'Docu-series — Behind the Brand', category: 'Branded Content', client: 'Fashion House', service: '06' },
  { title: 'Brand Film — Caffè Vergnano', category: 'Video Production', client: 'Caffè Vergnano', service: '06' },
  { title: 'Shooting Day — 30 Asset in 8 ore', category: 'Content for Social', client: 'Brand Fashion', service: '06' },
];

const SERVICES = [
  {
    num: '01',
    title: 'VIDEO PRODUCTION',
    desc: 'Spot TV, brand film, documentari, social video. Dalla regia alla color grading, ogni frame con intenzione.',
    featured: true,
    fullDesc: 'Il nostro reparto video è il cuore pulsante di REACTIVEDOTS. Produciamo contenuti video di qualità cinematografica per ogni esigenza: spot TV e digital, brand film emozionali, video corporate istituzionali, documentari e docu-series.',
    workflow: ['Brief & Concept', 'Storyboard & Moodboard', 'Casting & Location Scouting', 'Shooting (Multi-cam)', 'Montaggio & Color Grading', 'Sound Design & Mix', 'Delivery Multi-formato'],
    useCases: ['Spot pubblicitari TV & Digital', 'Brand Film', 'Video Corporate', 'Documentari & Docu-series', 'Music Video', 'Testimonial & Interviste'],
    gear: ['RED V-Raptor', 'ARRI Alexa Mini', 'Sony FX6', 'DJI Ronin 4D', 'Cooke Anamorphic', 'DaVinci Resolve'],
    clients: ['Caffè Vergnano', 'Lavazza', 'Ferrero', 'Fiat', 'Eataly', 'OVS', 'Reale Mutua', 'Martini'],
  },
  {
    num: '02',
    title: 'BRAND PHOTOGRAPHY',
    desc: 'Campaign, editorial, product, portrait, lifestyle. Immagini ad alta risoluzione che catturano l\'essenza del tuo brand.',
    featured: false,
    fullDesc: 'Creiamo contenuti nativi per ogni piattaforma social. Il nostro approccio "batch production" permette di produrre decine di asset in una singola giornata di shooting, ottimizzando budget e tempi senza sacrificare la qualità.',
    workflow: ['Analisi Canali & Benchmark', 'Calendario Editoriale', 'Concept & Shot List', 'Shooting Day', 'Editing Multi-formato', 'Caption & Hashtag Strategy'],
    useCases: ['Instagram Reels & Carousel', 'TikTok Content', 'YouTube Shorts', 'LinkedIn Video', 'Stories & Behind the Scenes', 'UGC-style Content'],
    gear: ['Sony A7S III', 'Canon RF 50mm f/1.2', 'DJI RS 3 Pro', 'Aputure 600d', 'Rode Wireless GO II'],
    clients: ['Zara', 'H&M', 'Calzedonia', 'Intimissimi', 'Kiko Milano', 'Diesel', 'Benetton', 'Liu Jo'],
  },
  {
    num: '03',
    title: 'CREATIVE DIRECTION',
    desc: "Art direction, concept, storyboard, styling. Ogni scelta creativa ha un perché.",
    featured: false,
    fullDesc: 'Dal packshot prodotto alla fotografia editoriale, il nostro team di fotografi crea immagini che comunicano. Ogni scatto è pensato per funzionare nel contesto in cui verrà utilizzato: e-commerce, stampa, social o campagna pubblicitaria.',
    workflow: ['Art Direction & Moodboard', 'Setup Lighting', 'Shooting', 'Selezione & Culling', 'Retouching Avanzato', 'Delivery Hi-Res & Web'],
    useCases: ['Packshot & Still Life', 'Ritratti Corporate', 'Fotografia Editoriale', 'Reportage Eventi', 'E-commerce & Catalogo', 'Campagne ADV'],
    gear: ['Phase One IQ4 150MP', 'Canon R5', 'Broncolor Siros 800', 'Profoto B10', 'Capture One Pro'],
    clients: ['Lindt', 'Barilla', 'Illy', 'Samsonite', 'Luxottica', 'Moncler', 'Tod\'s', 'Venchi'],
  },
  {
    num: '04',
    title: 'POST PRODUCTION',
    desc: "Color grading, editing, motion graphics, VFX. La magia prende forma in post.",
    featured: true,
    fullDesc: 'Integriamo intelligenza artificiale e computer grafica 3D nei nostri workflow produttivi. Dalla creazione di avatar virtuali alla modellazione fotorealistica di prodotti, offriamo soluzioni che superano i limiti della produzione tradizionale.',
    workflow: ['Analisi Fattibilità', 'Concept & Design', 'Modeling & Texturing', 'Animazione & Rendering', 'Compositing', 'Quality Check & Delivery'],
    useCases: ['Product CGI & Visualization', 'Virtual Spokesperson', 'AI-Generated Content', 'Motion Graphics 3D', 'Virtual Try-On', 'Ambienti Virtuali'],
    gear: ['Blender', 'Unreal Engine 5', 'Substance Painter', 'Octane Render', 'ElevenLabs', 'Midjourney & Stable Diffusion'],
    clients: ['Samsung', 'Dyson', 'Bang & Olufsen', 'Technogym', 'De\'Longhi', 'Brembo'],
  },
  {
    num: '05',
    title: 'CONTENT STRATEGY',
    desc: 'Social media, campagne, copy, piano editoriale. Strategia e contenuti che lavorano insieme.',
    featured: true,
    fullDesc: 'Gestiamo la produzione video e fotografica di eventi di ogni scala: dai corporate event ai festival, dai lanci prodotto alle conferenze. Il nostro team è specializzato nella content creation real-time e nel live streaming multi-piattaforma.',
    workflow: ['Sopralluogo & Planning Tecnico', 'Setup Multi-cam & Regia', 'Live Streaming', 'Content Creation Real-time', 'Recap Giornaliero', 'Aftermovie & Highlight'],
    useCases: ['Corporate Event', 'Festival & Concerti', 'Lanci Prodotto', 'Conferenze & Convention', 'Fiere & Exhibition', 'Live Streaming Multi-piattaforma'],
    gear: ['Sony FX6 (x6)', 'Blackmagic ATEM Mini Extreme', 'Hollyland Mars 4K', 'DJI Mavic 3 Pro', 'Sennheiser EW-D', 'LiveU Solo+'],
    clients: ['Kappa FuturFestival', 'Club To Club', 'Salone del Libro', 'Aurora', 'Juventus', 'Torino Film Festival', 'Nitto ATP Finals'],
  },
];

export default function Services() {
  const headerRef = useScrollReveal();
  const revealGridRef = useScrollReveal({ threshold: 0.05 });
  const mouseGridRef = useRef(null);
  const [activeService, setActiveService] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: '', message: '', privacy: false,
  });

  useMouseGlow(mouseGridRef);

  const updateField = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const openService = (s) => {
    setActiveService(s);
    setFormSubmitted(false);
    setForm({ name: '', email: '', company: '', budget: '', message: '', privacy: false });
  };

  const closeService = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveService(null);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeService]);

  return (
    <section id="servizi" className={styles.section}>
      <DotBackground />
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <div className={styles.headerTitle}>
            <p className={styles.tag} data-reveal="left">WHAT WE DO</p>
            <h2 className={styles.heading} data-reveal="left">WHAT WE DO<span className={styles.pulseDot}>●</span></h2>
          </div>
          <p className={styles.subheading} data-reveal="right">
            Dall'ideazione all'esecuzione. Dal briefing al master file.
            Ogni formato, ogni piattaforma, ogni storia.
          </p>
        </div>

        <div className={styles.grid} ref={(el) => {
          revealGridRef.current = el;
          mouseGridRef.current = el;
        }}>
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className={`${styles.card} ${s.featured ? styles.featuredCard : ''}`}
              data-reveal="scale"
              onClick={() => openService(s)}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.number}>{s.num}</div>
                </div>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.description}>{s.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.link}>
                    SCOPRI DI PIÙ
                    <span className={styles.arrow}>→</span>
                  </span>
                </div>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-page Service Detail */}
      {activeService && (() => {
        const relatedProjects = RELATED_PROJECTS.filter((p) => p.service === activeService.num);

        return (
          <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
            <div className={styles.modalScroll}>
              <button
                className={styles.modalClose}
                onClick={closeService}
                aria-label="Chiudi"
              >
                ✕
              </button>

              {/* Hero */}
              <div className={styles.modalHero}>
                <img src={placeholderImg} alt={activeService.title} className={styles.modalHeroImg} />
                <div className={styles.modalHeroOverlay} />
                <div className={styles.modalHeroContent}>
                  <span className={styles.modalNum}>{activeService.num}</span>
                  <h2 className={styles.modalTitle}>{activeService.title}</h2>
                </div>
              </div>

              {/* Clients marquee */}
              {activeService.clients && activeService.clients.length > 0 && (
                <div className={styles.modalClients}>
                  <div className={styles.modalClientsTrack}>
                    {[...activeService.clients, ...activeService.clients, ...activeService.clients].map((c, i) => (
                      <span key={i} className={styles.modalClientName}>{c}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Body */}
              <div className={styles.modalBody}>
                {/* Overview + Use Cases */}
                <div className={styles.modalRow}>
                  <div className={styles.modalCol}>
                    <h3 className={styles.modalSectionTitle}>Overview</h3>
                    <p className={styles.modalText}>{activeService.fullDesc}</p>
                  </div>
                  <div className={styles.modalCol}>
                    <h3 className={styles.modalSectionTitle}>Casi d&#39;Uso</h3>
                    <ul className={styles.modalList}>
                      {activeService.useCases.map((u) => (
                        <li key={u} className={styles.modalListItem}>{u}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Showreel */}
                <div className={styles.modalVideoSection}>
                  <h3 className={styles.modalSectionTitle}>Showreel</h3>
                  <div className={styles.modalVideo}>
                    <img src={placeholderImg} alt="Showreel" className={styles.modalVideoImg} />
                    <div className={styles.modalPlayBtn}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Workflow */}
                <div className={styles.modalWorkflowSection}>
                  <h3 className={styles.modalSectionTitle}>Il Nostro Workflow</h3>
                  <div className={styles.modalWorkflow}>
                    {activeService.workflow.map((step, i) => (
                      <div key={step} className={styles.modalWorkflowStep}>
                        <span className={styles.modalWorkflowNum}>{String(i + 1).padStart(2, '0')}</span>
                        <span className={styles.modalWorkflowLabel}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gear */}
                <div className={styles.modalGearSection}>
                  <h3 className={styles.modalSectionTitle}>Attrezzatura</h3>
                  <div className={styles.modalGearGrid}>
                    {activeService.gear.map((g) => (
                      <div key={g} className={styles.modalGearItem}>
                        <span className={styles.modalGearName}>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                  <div className={styles.modalRelated}>
                    <h3 className={styles.modalSectionTitle}>Progetti Correlati</h3>
                    <div className={styles.modalRelatedGrid}>
                      {relatedProjects.map((p) => (
                        <div key={p.title} className={styles.modalRelatedCard}>
                          <img src={placeholderImg} alt={p.title} className={styles.modalRelatedImg} />
                          <div className={styles.modalRelatedOverlay}>
                            <span className={styles.modalRelatedCategory}>{p.category}</span>
                            <h4 className={styles.modalRelatedTitle}>{p.title}</h4>
                            <span className={styles.modalRelatedClient}>{p.client}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <div className={styles.modalFormSection}>
                  <h3 className={styles.modalSectionTitle}>Richiedi un Preventivo</h3>
                  <p className={styles.modalFormSubtitle}>
                    Hai bisogno di {activeService.title.toLowerCase()}? Compila il form e ti ricontatteremo entro 24 ore.
                  </p>

                  {formSubmitted ? (
                    <div className={styles.modalFormSuccess}>
                      <div className={styles.modalFormSuccessDot}>●</div>
                      <h4 className={styles.modalFormSuccessTitle}>GRAZIE!</h4>
                      <p className={styles.modalFormSuccessText}>
                        Abbiamo ricevuto la tua richiesta per {activeService.title.toLowerCase()}.<br />
                        Ti ricontatteremo entro 24 ore.
                      </p>
                    </div>
                  ) : (
                    <form className={styles.modalForm} onSubmit={handleFormSubmit}>
                      <input type="hidden" value={activeService.title} />
                      <div className={styles.modalFormRow}>
                        <div className={styles.modalFormField}>
                          <label className={styles.modalFormLabel}>
                            Nome e Cognome <span className={styles.modalFormRequired}>*</span>
                          </label>
                          <input
                            type="text"
                            className={styles.modalFormInput}
                            value={form.name}
                            onChange={updateField('name')}
                            required
                          />
                        </div>
                        <div className={styles.modalFormField}>
                          <label className={styles.modalFormLabel}>
                            Email <span className={styles.modalFormRequired}>*</span>
                          </label>
                          <input
                            type="email"
                            className={styles.modalFormInput}
                            value={form.email}
                            onChange={updateField('email')}
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.modalFormRow}>
                        <div className={styles.modalFormField}>
                          <label className={styles.modalFormLabel}>Azienda / Brand</label>
                          <input
                            type="text"
                            className={styles.modalFormInput}
                            value={form.company}
                            onChange={updateField('company')}
                          />
                        </div>
                        <div className={styles.modalFormField}>
                          <label className={styles.modalFormLabel}>Budget indicativo</label>
                          <select
                            className={styles.modalFormSelect}
                            value={form.budget}
                            onChange={updateField('budget')}
                          >
                            <option value="">Seleziona...</option>
                            {BUDGETS.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className={styles.modalFormField}>
                        <label className={styles.modalFormLabel}>
                          Raccontaci il progetto <span className={styles.modalFormRequired}>*</span>
                        </label>
                        <textarea
                          className={styles.modalFormTextarea}
                          rows={4}
                          value={form.message}
                          onChange={updateField('message')}
                          required
                        />
                      </div>
                      <label className={styles.modalFormCheckbox}>
                        <input
                          type="checkbox"
                          checked={form.privacy}
                          onChange={updateField('privacy')}
                          required
                        />
                        <span>Ho letto e accetto la <a href="#">Privacy Policy</a></span>
                      </label>
                      <button type="submit" className={`btn btn-primary ${styles.modalFormSubmit}`}>
                        INVIA RICHIESTA →
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
