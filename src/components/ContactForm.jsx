import { useState } from 'react';
import DotBackground from './DotBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from '../styles/ContactForm.module.css';

const PROJECT_TYPES = [
  'Video Production',
  'Brand Photography',
  'Creative Direction',
  'Post Production',
  'Content Strategy',
  'Altro / Non sono sicuro',
];

const BUDGETS = [
  '< 5.000€',
  '5.000€ — 15.000€',
  '15.000€ — 30.000€',
  '30.000€ — 50.000€',
  '> 50.000€',
  'Preferisco discuterne',
];

const SOURCES = [
  'Google',
  'Social Media',
  'Passaparola',
  'Simpol Agency',
  'Evento',
  'Altro',
];

export default function ContactForm() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal({ threshold: 0.05 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    source: '',
    privacy: false,
  });

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contatti" className={styles.section}>
      <DotBackground />
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <p className={styles.tag} data-reveal="fade">LET'S WORK TOGETHER</p>
          <h2 className={styles.heading} data-reveal>
            START A<br />PROJECT<span className={styles.pulseDot}>●</span>
          </h2>
        </div>

        <div ref={formRef}>
          <div className={styles.formCard} data-reveal="scale">
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successDot}>●</div>
                <h3 className={styles.successTitle}>GRAZIE!</h3>
                <p className={styles.successText}>
                  Abbiamo ricevuto il tuo brief.<br />
                  Ti ricontatteremo entro 48 ore con pensieri concreti.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Nome e Cognome <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      className={styles.input}
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      className={styles.input}
                      value={form.email}
                      onChange={update('email')}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Azienda / Brand</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={form.company}
                      onChange={update('company')}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Tipo di progetto <span className={styles.required}>*</span>
                    </label>
                    <select
                      className={styles.select}
                      value={form.projectType}
                      onChange={update('projectType')}
                      required
                    >
                      <option value="" disabled>Seleziona...</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Budget indicativo</label>
                    <select
                      className={styles.select}
                      value={form.budget}
                      onChange={update('budget')}
                    >
                      <option value="">Seleziona...</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Come ci hai conosciuto?</label>
                    <select
                      className={styles.select}
                      value={form.source}
                      onChange={update('source')}
                    >
                      <option value="">Seleziona...</option>
                      {SOURCES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>
                    Raccontaci il progetto <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    className={styles.textarea}
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    required
                  />
                </div>

                <label className={styles.checkboxField}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={form.privacy}
                    onChange={update('privacy')}
                    required
                  />
                  <span className={styles.checkboxLabel}>
                    Ho letto e accetto la <a href="#">Privacy Policy</a>
                  </span>
                </label>

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  INVIA IL TUO BRIEF →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
