export const data = {
  projects: [
    {
      title: 'E-commerce Checkout QA Suite',
      tech: 'Manual QA | Test Cases | Regression | Browser DevTools',
      category: ['qa'],
      gradient: 'linear-gradient(135deg, #ff4d8d, #6d5dfc)',
      body: 'Dummy case-study project for testing a checkout journey from cart to confirmation across desktop and mobile flows.',
      bullets: [
        'Designed smoke and regression scenarios for cart, coupon, payment, address, and order-summary states.',
        'Documented reproducible bugs with expected result, actual result, severity, environment, and screenshots.',
        'Covered negative paths such as invalid card details, expired coupons, empty carts, and interrupted sessions.'
      ]
    },
    {
      title: 'API Health Check Dashboard',
      tech: 'JavaScript | REST APIs | Postman-style Checks | React',
      category: ['qa', 'frontend'],
      gradient: 'linear-gradient(135deg, #00c2ff, #00e887)',
      body: 'Software engineering and testing project focused on API response validation, clear dashboard states, and practical debugging.',
      bullets: [
        'Mapped API states for success, loading, empty responses, server errors, and malformed payloads.',
        'Built a responsive dashboard interface that makes failing services and stale data easy to spot.',
        'Created test notes for endpoint behavior, browser console checks, and recovery after refresh.'
      ]
    },

    {
      title: 'Crypto Dashboard Testing Project',
      tech: 'HTML | CSS | JavaScript | Public APIs',
      category: ['qa', 'frontend'],
      gradient: 'linear-gradient(135deg, #6d5dfc, #00c2ff)',
      github: 'https://github.com/jaybhinsara/Crypto_dashboard.git',
      body: 'API-driven dashboard project suitable for testing volatile data, loading states, and responsive data presentation.',
      bullets: [
        'Checked API-driven UI behavior for changing prices, missing data, and delayed responses.',
        'Planned exploratory tests around refresh behavior, browser resizing, and readable visual hierarchy.',
        'Practiced JavaScript debugging and clear frontend state handling.'
      ]
    },
    {
      title: 'Password Generator Validation',
      tech: 'HTML | CSS | JavaScript | Functional Testing',
      category: ['qa', 'frontend'],
      gradient: 'linear-gradient(135deg, #00e887, #ffb703)',
      github: 'https://github.com/jaybhinsara/Passwor-Generator.git',
      body: 'Utility project for validating rule combinations, boundary cases, and user feedback in a compact interface.',
      bullets: [
        'Tested character length boundaries, selected character sets, and empty-option edge cases.',
        'Checked generated output against expected rules instead of only visual behavior.',
        'Used the project as a simple example of functional test design.'
      ]
    },
    {
      title: 'Bug Report Pack Placeholder',
      tech: 'uTest | test IO | Mercor | Test Documentation',
      category: ['qa'],
      gradient: 'linear-gradient(135deg, #fb7185, #facc15)',
      body: 'Editable placeholder for selected testing-platform examples once approved details can be added without exposing private client information.',
      bullets: [
        'Add anonymized examples of bug reports, test charters, or accepted issue writeups.',
        'Keep client names, confidential product details, and platform-restricted information out of the public page.',
        'Use this card to show testing judgment, clarity, and repeatable documentation style.'
      ]
    }
  ],
  experience: [
    {
      when: 'Current / recent | Remote',
      tag: 'AI evaluation and quality review',
      role: 'AI Evaluation Contributor',
      place: 'Mercor and related evaluation work',
      bullets: [
        'Reviewed AI-generated outputs for accuracy, instruction following, clarity, and practical usefulness.',
        'Compared responses against task requirements and documented issues with concise feedback.',
        'Editable: add exact platform names, dates, domains evaluated, and approved examples when available.'
      ]
    },
    {
      when: 'Current / recent | Remote platforms',
      tag: 'QA testing platforms',
      role: 'QA Testing Contributor',
      place: 'Mercor, test IO, and uTest',
      bullets: [
        'Participated in software testing work through QA and evaluation platforms including Mercor, test IO, and uTest.',
        'Focused on clear issue reproduction, environment notes, severity reasoning, and concise reporting.',
        'Editable: add exact dates, client-safe project types, device coverage, and approved examples when available.'
      ]
    },
    {
      when: 'Sep 2022 - Nov 2025 | London, UK',
      tag: 'Operations and onsite technology',
      role: 'Manager & OTP (Onsite Tech Person)',
      place: 'Lansia Ltd (T/A McDonald\'s)',
      bullets: [
        'Handled incident triage, reporting workflows, and hands-on troubleshooting for store technology.',
        'Investigated kiosk, POS, network, software, and hardware issues with a structured problem-solving approach.',
        'Coordinated operational handoffs and documented issues clearly for follow-up.'
      ]
    },
    {
      when: 'Dec 2021 - Mar 2022 | Surat, India',
      tag: 'Web development and testing support',
      role: 'Web Developer Intern',
      place: 'Adbookee Media Solutions',
      bullets: [
        'Supported live builds, testing, debugging, and deployment.',
        'Practiced debugging and Git-based workflows.',
        'Applied DRY principles for reusable components.'
      ]
    }
  ],
  certificates: [
    {
      title: 'JPMorganChase Software Engineering Simulation',
      tech: 'Spring Boot | Kafka | REST | JPA | H2',
      bullets: [
        'Built a Spring Boot microservice with transaction processing and validation.',
        'Implemented persistence and balance updates with Spring Data JPA and H2.',
        'Integrated external REST APIs and exposed balance query endpoints.',
        'Used Maven-based testing and debugging during the simulation.'
      ]
    }
  ],
  education: [
    {
      when: 'Nov 2025 - Present | Remote',
      tag: 'Full Stack',
      title: 'Full Stack Developer Course, Scrimba',
      lede: 'HTML5, CSS3, responsive design, JavaScript ES6+, DOM, async/await, TypeScript, React, Node.js, Express, Next.js, REST, JSON, state management, AI-assisted development, databases, Git, and GitHub.'
    },
    {
      when: 'Sep 2022 - Sep 2025 | London, UK',
      tag: 'Postgraduate',
      title: 'MSc Software Engineering, University of West London',
      lede: 'Software design, cloud computing, data management, and advanced programming.'
    },
    {
      when: 'Nov 2018 - Mar 2021 | Surat, India',
      tag: 'Undergraduate',
      title: 'BSc Information Technology, P.P. Savani University',
      lede: 'Web application development, database systems, Python, IoT, and blockchain technology.'
    }
  ],
  skills: [
    { title: 'Manual QA', body: 'Exploratory testing, smoke checks, regression testing, test case design, defect triage, user-flow validation, and release-readiness reviews.' },
    { title: 'Bug Reporting', body: 'Clear reproduction steps, actual vs expected results, environment details, severity notes, screenshots, logs, and developer-friendly summaries.' },
    { title: 'Testing and AI Evaluation', body: 'Mercor, test IO, uTest, AI output evaluation, GitHub issues, browser DevTools, spreadsheet-based test tracking, and API validation workflows.' },
    { title: 'Frontend Engineering', body: 'React, JavaScript ES6+, HTML5, CSS3, responsive layouts, component structure, UI state handling, and accessibility-minded implementation.' },
    { title: 'Backend & APIs', body: 'Spring Boot, REST APIs, Express.js, MySQL, CRUD workflows, server administration basics, and command-line debugging.' },
    { title: 'Workflow', body: 'Git and GitHub, debugging, code review readiness, structured documentation, DRY patterns, and performance-aware UI work.' }
  ]
};

