// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE ONLY.
//  Everything on the site is driven by the values below.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Divya Chouhan',
  // Rotating words in the hero headline. One entry = types out once, no rotation.
  roles: ['Software Developer'],
  tagline:
    'I build web applications end to end — JavaScript and React in the browser, Node.js, Firebase and REST APIs behind them. Final-year BCA student looking for my first full-time developer role.',
  location: 'Delhi, India',
  availability: 'Open to junior software developer roles',
  email: 'dc1906584@gmail.com',
  phone: '+91 76830 50896',

  // TODO: copy Divya_Chouhan_Resume.pdf into  public/resume/  and
  // uncomment the line below so the Résumé button appears.
  // resumeUrl: '/resume/Divya_Chouhan_Resume.pdf',
  resumeUrl: '',

  // TODO: drop a photo into  public/  (e.g. public/divya.jpg) and set it here.
  avatar: '',
}

export const socials = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/divyachouhan272004' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/chouhandivya2701' },
  { label: 'Email', icon: 'mail', url: 'mailto:dc1906584@gmail.com?subject=Portfolio%20Contact' },
]

export const about = {
  // Each string is its own paragraph.
  paragraphs: [
    "I'm a software developer in my final year of a BCA at IGNOU. JavaScript is my main language — React on the client, Node.js and Firebase on the server, REST APIs in between — and I'm comfortable taking a feature from an idea to something deployed and working.",
    'Most of what I know came from building things and finishing them. I started with small, self-contained programs — task persistence, input validation, calculation logic — because a finished program teaches you far more than an abandoned one. Three internships later the habit holds: get it running, get it correct, then make it clean.',
    'Alongside my degree I work as a Data Analyst at Prime Database, processing corporate filings from the NSE and BSE with SQL and Excel. A daily deadline on data that has to be exactly right taught me more about care and precision than any course has.',
  ],
  stats: [
    { value: '6', label: 'Projects built' },
    { value: '3', label: 'Internships' },
    { value: '2+ yrs', label: 'Working with data' },
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frameworks & Runtimes',
    items: ['React.js', 'Node.js', 'Firebase'],
  },
  {
    group: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Deployment'],
  },
  {
    group: 'APIs & Data',
    items: ['REST APIs', 'Data Analysis', 'Advanced Excel', 'UI/UX Design'],
  },
]

// `status` renders as a small badge: 'Completed' | 'In progress' | 'Planned'
// `featured: true` gives a project a large two-column card at the top.
export const projects = [
  {
    title: 'ResQMeal',
    status: 'In progress',
    blurb:
      'An application that connects surplus food from restaurants and events with NGOs who can distribute it. Donors post what is available; NGOs claim it before it spoils.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    repo: 'https://github.com/divyachouhan272004/ResQMeal',
    demo: '', // TODO: add once it's deployed
    featured: true,
    image: '',
    highlights: [
      'Models the full lifecycle of a donation — posted, claimed, collected',
      'Built around a real problem rather than a tutorial brief',
    ],
  },
  {
    title: 'Tomato — Food Ordering App',
    status: 'In progress',
    blurb:
      'A food ordering application built in React: browse a menu, build a cart and place an order, with cart state shared across every view.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    repo: '', // TODO: add the GitHub link once the repo is public
    demo: '',
    featured: true,
    image: '',
    highlights: [
      'Component-driven architecture with state lifted to a shared owner',
      'My first project written entirely in React rather than vanilla JavaScript',
    ],
  },
  {
    title: 'To-Do List App',
    status: 'Completed',
    blurb:
      'A task manager that persists to browser Local Storage, so the list survives a refresh. Add, complete and delete, with no backend.',
    tags: ['JavaScript', 'Local Storage', 'HTML5', 'CSS3'],
    repo: 'https://github.com/divyachouhan272004/todo-list-app',
    demo: 'https://divyachouhan272004.github.io/todo-list-app/',
    featured: false,
    image: '',
    highlights: [],
  },
  {
    title: 'BMI Calculator',
    status: 'Completed',
    blurb:
      'Takes height and weight, applies the BMI formula and classifies the result into standard categories, with validation on the inputs.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    repo: 'https://github.com/divyachouhan272004/BMI_calculator',
    demo: 'https://divyachouhan272004.github.io/BMI_calculator/',
    featured: false,
    image: '',
    highlights: [],
  },
  {
    title: 'Simple Calculator',
    status: 'Completed',
    blurb:
      'A calculator handling chained arithmetic and keyboard input, written in vanilla JavaScript with no libraries.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    repo: 'https://github.com/divyachouhan272004/Simple_Calculator',
    demo: 'https://divyachouhan272004.github.io/Simple_Calculator/',
    featured: false,
    image: '',
    highlights: [],
  },
  {
    title: 'Intern Portfolio',
    status: 'Completed',
    blurb:
      'A profile site written in plain HTML during my first internship — the first thing I ever deployed.',
    tags: ['HTML5'],
    repo: 'https://github.com/divyachouhan272004/Intern-portfolio',
    demo: 'https://divyachouhan272004.github.io/Intern-portfolio/',
    featured: false,
    image: '',
    highlights: [],
  },

  // ─────────────────────────────────────────────────────────────
  //  SUGGESTED NEXT BUILDS — not built yet.
  //  These three fill the gaps a hiring manager will notice above:
  //  consuming a live API, authentication with a real database, and
  //  handling loading/error states. Each uses only skills already
  //  on your list. Build one, set `status` to 'Completed' and add
  //  the links. To drop them, delete these three entries.
  // ─────────────────────────────────────────────────────────────
  {
    title: 'Weather Dashboard',
    status: 'Planned',
    blurb:
      'Live weather for any city from the OpenWeather API, with a five-day forecast, recent-search history and unit switching. Handles loading, empty and error states properly.',
    tags: ['React.js', 'REST APIs', 'JavaScript'],
    repo: '',
    demo: '',
    featured: false,
    image: '',
    highlights: [],
  },
  {
    title: 'Expense Tracker',
    status: 'Planned',
    blurb:
      'Expense tracking behind Firebase Authentication, with entries stored per user so they sync across devices. Monthly totals and category breakdowns.',
    tags: ['React.js', 'Firebase', 'JavaScript'],
    repo: '',
    demo: '',
    featured: false,
    image: '',
    highlights: [],
  },
  {
    title: 'GitHub Profile Finder',
    status: 'Planned',
    blurb:
      'Search any GitHub username and see their profile, top repositories and language mix, pulled live from the GitHub REST API with rate-limit handling.',
    tags: ['React.js', 'REST APIs', 'JavaScript'],
    repo: '',
    demo: '',
    featured: false,
    image: '',
    highlights: [],
  },
]

export const experience = [
  {
    role: 'Data Analyst',
    company: 'Prime Database Pvt. Ltd.',
    url: '',
    period: 'March 2024 — Present',
    location: 'Delhi, India',
    tags: ['SQL', 'Advanced Excel', 'Data Analysis', 'Reporting'],
    bullets: [
      'Process corporate announcement data from the NSE and BSE on a daily cycle.',
      'Query, validate and reshape datasets with SQL and Advanced Excel.',
      'Run quality checks and produce reports against fixed deadlines.',
      'Work with the team to keep accuracy consistent across sources.',
    ],
  },
  {
    role: 'Junior Full Stack Developer Intern',
    company: 'YuvaIntern',
    url: '',
    period: 'Aug 2026 — Sep 2026 · 6 weeks',
    location: 'Remote',
    tags: ['JavaScript', 'React.js', 'REST APIs', 'Git', 'GitHub'],
    bullets: [
      'Built application features across the stack from assigned specifications.',
      'Implemented interactive interface components in React and vanilla JavaScript.',
      'Integrated REST APIs and handled their loading and error states.',
      'Worked on a shared codebase through Git and GitHub.',
    ],
  },
  {
    role: 'Frontend Web Developer Intern',
    company: 'YuvaIntern',
    url: '',
    period: 'Aug 2026 — Sep 2026 · 5 weeks',
    location: 'Remote',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
    bullets: [
      'Implemented interface features in HTML, CSS and JavaScript.',
      'Built layouts that hold their structure across screen sizes.',
      'Used Git and GitHub for version control and collaboration.',
    ],
  },
  {
    role: 'Full Stack Development Intern',
    company: 'IndiWebPros',
    url: '',
    period: 'Jun 2026 — Aug 2026 · 8 weeks',
    location: 'Online',
    tags: ['React.js', 'JavaScript', 'Firebase', 'REST APIs', 'Deployment'],
    bullets: [
      'Completed weekly assignments, coding exercises and a live team project.',
      'Worked with React.js on the client and Firebase for authentication and storage.',
      'Consumed REST APIs and deployed the finished work.',
      'Recognised as Most Active Student and Best Performer of the Week.',
    ],
  },
]

export const education = [
  {
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Indira Gandhi National Open University (IGNOU)',
    url: '',
    period: 'Expected December 2026',
    location: '',
    bullets: ['Computer applications and software development.'],
  },
  {
    role: 'Class XII — CBSE',
    company: '',
    url: '',
    period: '2022',
    location: '',
    bullets: ['Scored 70%.'],
  },
  {
    role: 'Class X — CBSE',
    company: '',
    url: '',
    period: '2020',
    location: '',
    bullets: ['Scored 80.2%.'],
  },
]

// Certificate links currently point at the files on your previous portfolio.
// To make this site self-contained, copy that repo's `certificates/` folder into
// `public/certificates/` here and change each url to e.g. '/certificates/<file>'.
const OLD_SITE = 'https://divyachouhan272004.github.io/Personal_Portfolio'

export const certifications = [
  {
    title: 'HTML, CSS, Java & JavaScript: Full Stack Programming Course',
    issuer: 'Udemy',
    date: 'July 2026',
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-d9cbfadf-3aa9-44c1-aaee-115d3cb9cda5.jpg?v=1783961787000',
  },
  {
    title: 'JavaScript for Beginners: The Complete Course',
    issuer: 'Udemy',
    date: 'July 2026',
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-cabbd850-e56b-4719-973e-e08b72050b3e.jpg?v=1783963931000',
  },
  {
    title: 'Full Stack Development Internship',
    issuer: 'IndiWebPros · 8 weeks · Online',
    date: 'Completed August 2026',
    url: `${OLD_SITE}/certificates/IndiWebPros_Full_Stack_Internship.pdf`,
  },
  {
    title: 'Most Active Student',
    issuer: 'IndiWebPros',
    date: 'August 2026',
    url: `${OLD_SITE}/certificates/Most_Active_Student.png`,
  },
  {
    title: 'Best Performer of the Week',
    issuer: 'IndiWebPros · Full Stack Web Development Internship',
    date: 'July 2026',
    url: `${OLD_SITE}/certificates/Best_Performer_Week.png`,
  },
  {
    title: 'Best Performing Team — Week 3',
    issuer: 'IndiWebPros · Full Stack Development Internship',
    date: 'July 2026',
    url: `${OLD_SITE}/certificates/Best_Team_Week_3.png`,
  },
  {
    title: 'AI Tools Workshop',
    issuer: 'be10x',
    date: 'August 2026',
    url: `${OLD_SITE}/certificates/be10x_AI_Tools_Workshop.pdf`,
  },
]

export const contact = {
  heading: 'Looking for my first developer role',
  body:
    "I'm after a junior software developer position or internship where I can work on a real product and learn from people who have shipped more than I have. Email reaches me fastest — I reply within a day.",
}
