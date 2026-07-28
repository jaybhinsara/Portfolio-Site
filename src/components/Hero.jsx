import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <header className="shell">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div className="hero__copy" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={itemVariants}>
            QA Tester | Software Engineer | Product-minded bug hunter
          </motion.p>
          <motion.h1 variants={itemVariants}>
            I test the risky parts, build the useful parts, and make product quality easier to see.
          </motion.h1>
          <motion.p className="lede" variants={itemVariants}>
            I work across manual QA, exploratory testing, bug reporting, responsive frontend development, and API-aware debugging. My focus is simple: find issues early, explain them clearly, and help teams ship cleaner software.
          </motion.p>
          <motion.div className="hero__ctas" variants={itemVariants}>
            <a className="btn primary" href="#contact">Start a conversation</a>
            <a className="btn ghost" href="#projects">See projects</a>
            <a className="btn ghost" href="https://github.com/jaybhinsara" target="_blank" rel="noreferrer">GitHub</a>
          </motion.div>
          <motion.div className="hero__meta" variants={itemVariants}>
            <div>
              <span className="label">Testing</span>
              <span className="value">Manual QA, exploratory testing, regression, bug reports, platform testing</span>
            </div>
            <div>
              <span className="label">Engineering</span>
              <span className="value">React, JavaScript, REST APIs, Spring Boot, MySQL, Git</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="panel qa-panel">
            <div className="panel__top panel__top--compact">
              <span>Quality workflow</span>
              <strong>QA + Code</strong>
            </div>
            <p className="panel__body">
              A tester who can read the UI, inspect the browser, understand API behavior, and communicate defects in a way engineers can act on.
            </p>
            <div className="qa-scoreboard" aria-label="Quality assurance strengths">
              <div>
                <span className="score">01</span>
                <span>Explore critical flows</span>
              </div>
              <div>
                <span className="score">02</span>
                <span>Isolate defects</span>
              </div>
              <div>
                <span className="score">03</span>
                <span>Write useful reports</span>
              </div>
              <div>
                <span className="score">04</span>
                <span>Verify fixes</span>
              </div>
            </div>
            <div className="panel__tags">
              <span>Mercor</span>
              <span>test IO</span>
              <span>uTest</span>
              <span>React</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
