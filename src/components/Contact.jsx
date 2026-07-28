import { motion } from 'framer-motion';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section shell contact">
      <motion.div
        className="contact__copy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="eyebrow">Contact</p>
        <h2>Need someone who can test carefully and build practically?</h2>
        <p className="lede">
          I am open to QA testing, software testing, frontend engineering, and hybrid roles where product quality and implementation meet.
        </p>
        <motion.div
          className="contact__actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a className="btn primary" href="mailto:jaybhinsara9@gmail.com">
            jaybhinsara9@gmail.com
          </a>
          <a className="btn ghost" href="tel:+4915511348813">
            +49 155 1134 8813
          </a>
        </motion.div>
        <motion.div
          className="contact__links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://linkedin.com/in/jay-bhinsara" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/jaybhinsara" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>Heilbronn, Germany</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="contact__panel"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="panel contact-card">
          <div className="panel__top panel__top--compact">
            <span>Availability</span>
            <strong>Open to roles</strong>
          </div>
          <p className="panel__body">
            Editable: add preferred role type, notice period, work authorization, and strongest platform examples when confirmed.
          </p>
          <div className="panel__tags">
            <span>QA Tester</span>
            <span>Software Tester</span>
            <span>Software Engineer</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
