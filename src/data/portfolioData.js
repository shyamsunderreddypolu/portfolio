// ============================================================
// portfolioData.js — Centralized configuration for Polu Shyam Sunder Reddy's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Polu Shyam Sunder Reddy",
  firstName: "Shyam Sunder",
  brandName: "Shyam Sunder Reddy",
  shortName: "Shyam",
  title: "Java Developer & Backend Engineer",
  location: "Hyderabad, India",
  phone: "+91 9948491312",
  emails: {
    primary: "polushyamsunderreddy@gmail.com",
  },
  summary:
    "Information Technology undergraduate with strong fundamentals in Core Java, Object-Oriented Programming, and Data Structures. Hands-on experience architecting scalable backend systems, secure RESTful APIs, stateless JWT authentication, and automated test suites with Spring Boot, Hibernate, MySQL, and JUnit 5.",
  resumeUrl: "/Shyam_Sunder_Reddy_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/shyamsunderreddypolu",
  linkedin: "https://linkedin.com/in/polushyamsunderreddy",
  email: "mailto:polushyamsunderreddy@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Shyam Sunder Reddy",
  titleHighlight: "Java Developer & Backend Engineer",
  subtitle:
    "I engineer high-performance backend systems, secure REST APIs, and scalable architectures using Java, Spring Boot, Hibernate, and MySQL.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:polushyamsunderreddy@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Shyam Sunder Reddy,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Shyam_Sunder_Reddy_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Polu Shyam Sunder Reddy</span>, an IT undergraduate at GNITC Hyderabad specializing in crafting robust backend systems, secure RESTful APIs, and scalable enterprise architectures using <span class="text-black font-black">Java</span>, <span class="text-black font-black">Spring Boot</span>, and <span class="text-black font-black">MySQL</span>.`,
  techStack: ["Java", "Spring Boot", "MySQL", "Hibernate"],
};

export const skillsContent = {
  badge: "Engineering Process",
  heading: "How I architect reliable, production-ready backend systems",
  description:
    "From database schema modeling to stateless JWT security and automated test coverage, I follow a disciplined, test-driven engineering approach.",
  cards: [
    {
      number: "01",
      title: "Architecture & Design",
      text: "Analyzing business domain logic and entity relationships to design normalized database schemas, modular service boundaries, and clean RESTful endpoint contracts.",
    },
    {
      number: "02",
      title: "Security & API Engineering",
      text: "Implementing stateless JWT authentication, password hashing with BCrypt, and role-based access control (RBAC) with Spring Security across microservice endpoints.",
    },
    {
      number: "03",
      title: "Persistence & Optimization",
      text: "Developing data access layers using Spring Data JPA and Hibernate ORM, optimizing MySQL queries, and maintaining strict data integrity constraints.",
    },
    {
      number: "04",
      title: "Testing & Reliability",
      text: "Constructing automated test suites with JUnit 5, Mockito, and MockMvc, with centralized @RestControllerAdvice exception handling to ensure zero unhandled server errors.",
    },
  ],
  endText: "Engineered to scale!",
};

// Comprehensive Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java (Core & Advanced)", level: 94 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 78 },
      ],
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Spring Boot", level: 92 },
        { name: "Spring Security & JWT", level: 90 },
        { name: "Spring Data JPA & Hibernate", level: 88 },
        { name: "RESTful Web Services", level: 94 },
        { name: "Maven", level: 85 },
      ],
    },
    {
      title: "Core Computer Science",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: 95 },
        { name: "Data Structures & Algorithms (DSA)", level: 88 },
        { name: "Database Management (DBMS)", level: 90 },
        { name: "Software Engineering & Architecture", level: 86 },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 92 },
        { name: "Relational Schema Design", level: 90 },
        { name: "Query Optimization & Indexing", level: 85 },
      ],
    },
    {
      title: "Testing & Reliability",
      skills: [
        { name: "JUnit 5", level: 90 },
        { name: "Mockito", level: 88 },
        { name: "MockMvc & TestRestTemplate", level: 85 },
        { name: "Centralized Error Handling", level: 92 },
      ],
    },
    {
      title: "Tools & AI-Assisted Dev",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 92 },
        { name: "GitHub Copilot & AI Coding Tools", level: 92 },
        { name: "VS Code & IntelliJ IDEA", level: 90 },
      ],
    },
  ],
};

// Leadership & Co-Curricular
export const leadershipList = [
  {
    title: "Treasurer, Infonex Association",
    description:
      "Managed the association's finances, budgeting, and resource allocations for technical workshops and events, collaborating seamlessly with faculty and student teams.",
    role: "Treasurer",
    badge: "Finance & Operations",
    duration: "2025 – Present",
  },
  {
    title: "Team Lead – Techtrix Hackathon",
    description:
      "Spearheaded the organizing committee for the Techtrix Hackathon, overseeing volunteer management, technical logistics, and participant engagement alongside faculty coordinators.",
    role: "Team Lead & Organizer",
    badge: "Leadership",
    duration: "GNITC, Hyderabad",
  },
];

// Internships Data
export const internshipsList = [
  {
    organization: "Wheeltrix",
    role: "Web Development Intern",
    duration: "June 2026 – August 2026",
    skills: [
      "Engineered stateless authentication and role-based access control (RBAC) in Java/Spring Boot using Spring Security, JWT (JJWT), and BCrypt, securing 15+ REST endpoints across 3 user roles (Admin, Faculty, Student).",
      "Analyzed feedback workflows and developed 3 core REST API services (FeedbackFormService, QuestionService, FeedbackAssignmentService) supporting 5+ question types and multi-criteria targeting for 1,000+ student profiles.",
      "Eliminated unhandled server crashes via centralized @RestControllerAdvice exception handling, validated by a comprehensive 92-case automated test suite (JUnit 5, Mockito, MockMvc, TestRestTemplate).",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "BCrypt",
      "MySQL",
      "Hibernate",
      "JUnit 5",
      "Mockito",
      "MockMvc",
    ],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Analytical Problem-Solving",
    icon: "🧩",
    desc: "Deconstructing intricate backend logic into clean, modular, and maintainable services.",
  },
  {
    name: "Communication & Teamwork",
    icon: "🤝",
    desc: "Collaborating proactively across engineering teams, faculty coordinators, and peers.",
  },
  {
    name: "Eagerness to Learn",
    icon: "🚀",
    desc: "Constantly expanding knowledge in cloud architectures, microservices, and AI-accelerated dev.",
  },
  {
    name: "Detail-Oriented Testing",
    icon: "🛡️",
    desc: "Enforcing high automated test coverage to catch edge cases before deployment.",
  },
  {
    name: "Leadership & Responsibility",
    icon: "👑",
    desc: "Directing student associations, handling institutional budgets, and organizing hackathons.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Rapidly adapting to evolving frameworks, new API standards, and fast-paced environments.",
  },
  {
    name: "Clear Technical Documentation",
    icon: "📝",
    desc: "Documenting RESTful endpoints, API contracts, and testing scenarios with precision.",
  },
  {
    name: "Time & Task Management",
    icon: "⏰",
    desc: "Balancing academic rigor, hands-on development, and leadership commitments efficiently.",
  },
];

// Featured Projects
export const projects = [
  {
    id: "placement-prep-platform",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Placement Prep Platform",
    description:
      "A full-stack placement-readiness platform developed with Java Spring Boot and React, unifying DSA practice tracking with automated resume evaluation for campus recruitment. Implemented stateless JWT authentication with Spring Security and BCrypt password hashing, including server-side token expiration and refresh handling. Built an intelligent resume ATS analyzer using Apache PDFBox for text extraction and a keyword-matching algorithm that scores resumes against job descriptions with actionable feedback. Backed by rigorous JUnit 5 and Mockito test suites.",
    techTags: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Spring Security",
      "JWT",
      "Apache PDFBox",
      "JUnit 5",
      "Mockito",
      "RESTful API",
    ],
    links: {
      github: "https://github.com/shyamsunderreddypolu",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "secure-ranked-search",
    number: "02",
    badge: "🔐 Cryptographic Security",
    title: "Secure Ranked Multi-Keyword Search System",
    description:
      "A Searchable Symmetric Encryption (SSE) application enabling multi-keyword searches over AES-256 encrypted files without exposing plaintext or decrypting records server-side. Re-architected a legacy JSP/Servlet codebase into a modern Spring Boot REST API using Spring Data JPA and Hibernate, reinforced with stateless JWT role-based access control. Devised a TF-IDF relevance ranking algorithm to sort encrypted search matches without compromising confidentiality, paired with a responsive Bootstrap 5 dashboard.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "AES-256",
      "TF-IDF Algorithm",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Bootstrap 5",
    ],
    links: {
      github: "https://github.com/shyamsunderreddypolu",
      demo: null,
    },
    isFlagship: false,
  },
];

// Verified Certifications
export const certificates = {
  featured: [
    {
      name: "Java Developer Certification",
      issuer: "Infosys Springboard",
      date: "October 19, 2025",
      icon: "☕",
      verifyUrl: "https://verify.onwingspan.com",
      pdfUrl: "/Infosys_Springboard_Java_Developer_Certificate.pdf",
      highlight: "Issued by Infosys Limited",
    },
    {
      name: "Introduction to SQL",
      issuer: "Simplilearn SkillUp",
      date: "May 12, 2026",
      icon: "🗄️",
      verifyCode: "Certificate Code: 10216216",
      pdfUrl: "/Simplilearn_SQL_Certificate.pdf",
      highlight: "SkillUp Verified",
    },
  ],
  viewAllUrl: "/Infosys_Springboard_Java_Developer_Certificate.pdf",
};

// Education Details
export const education = {
  degree: "Bachelor of Technology in Information Technology",
  shortDegree: "B.Tech – Information Technology",
  institution: "Guru Nanak Institutions Technical Campus (GNITC)",
  location: "Hyderabad, India",
  cgpa: "8.1",
  graduation: "Expected May 2027",
  highlights: [
    "Core Focus: Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), DBMS",
    "Active Member & Treasurer of Infonex Association",
    "GNITC Techtrix Hackathon Organizing Lead",
  ],
};

export const footerContent = {
  taglines: [
    "Backend Engineering & Distributed APIs",
    "Java · Spring Boot · Hibernate · MySQL",
    "Secure · Scalable · Test-Driven",
  ],
  credential: "B.Tech IT (GNITC) · CGPA 8.1",
  copyright: `© ${new Date().getFullYear()} Polu Shyam Sunder Reddy | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
