// ============================================================
// portfolioData.js — Centralized configuration for Polu Shyam Sunder Reddy
// Full-Stack Java Developer | Spring Boot | React | REST APIs | MySQL
// ============================================================

export const personalInfo = {
  name: "Polu Shyam Sunder Reddy",
  firstName: "Shyam Sunder",
  brandName: "Shyam Sunder Reddy",
  shortName: "Shyam",
  title: "Full-Stack Java Developer | Spring Boot | React",
  role: "Full-Stack Java Developer",
  location: "Hyderabad, India",
  phone: "+91 9948491312",
  emails: {
    primary: "polushyamsunderreddy@gmail.com",
  },
  summary:
    "Full-Stack Java Developer and B.Tech Information Technology undergraduate at GNITC Hyderabad (8.1 CGPA). Experienced in building production-ready web applications, secure RESTful APIs, and database architectures using Java, Spring Boot, Spring Security, React, and MySQL. Strong background in Data Structures, Algorithms, and Object-Oriented Design.",
  resumeUrl: "/Shyam_Sunder_Reddy_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/shyamsunderreddypolu",
  linkedin: "https://linkedin.com/in/polushyamsunderreddy",
  email: "mailto:polushyamsunderreddy@gmail.com",
};

export const heroContent = {
  badge: "Available for Software Developer Roles & Placements",
  greeting: "Hi, I'm Shyam Sunder Reddy",
  titleHighlight: "Full-Stack Java Developer | Spring Boot | React",
  subtitle:
    "I build full-stack applications and backend systems using Java, Spring Boot, React, REST APIs, and MySQL.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaResume: { text: "Download Resume", href: "/Shyam_Sunder_Reddy_Resume.pdf" },
  ctaGitHub: { text: "GitHub", href: "https://github.com/shyamsunderreddypolu" },
  ctaLinkedIn: { text: "LinkedIn", href: "https://linkedin.com/in/polushyamsunderreddy" },
  ctaContact: { text: "Contact Me", href: "#contact" },
};

export const aboutContent = {
  heading: "About Me",
  tagline: "Full-Stack Java Developer | Spring Boot | React",
  bio: "I am a <strong>Full-Stack Java Developer</strong> and B.Tech Information Technology undergraduate at <strong>GNITC Hyderabad (8.1 CGPA)</strong>, actively preparing for software development campus placements. My technical core centers on building end-to-end full-stack applications and secure backend systems using <strong>Java, Spring Boot, REST APIs, React, and MySQL</strong>.<br /><br />During my web development internship at <strong>Wheeltrix Group</strong>, I engineered modular REST services, stateless authentication with <strong>Spring Security & JWT</strong>, and relational schemas in MySQL. With a solid foundation in <strong>Data Structures, Algorithms (DSA)</strong>, and Object-Oriented Design, I focus on engineering clean, scalable architectures with robust security and verified test coverage.",
  stats: [
    { label: "B.Tech IT CGPA", value: "8.1" },
    { label: "Backend Core", value: "Java & Spring Boot" },
    { label: "Frontend", value: "React & Modern UI" },
    { label: "Database", value: "MySQL & Relational Design" },
  ],
};

// Categorized Technical Skills (Zero fake percentages, zero progress bars)
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      icon: "code",
      skills: ["Java", "JavaScript", "Python"],
    },
    {
      title: "Backend",
      icon: "server",
      skills: ["Spring Boot", "Spring Security", "REST APIs", "JWT", "JDBC"],
    },
    {
      title: "Frontend",
      icon: "layout",
      skills: ["React", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Database",
      icon: "database",
      skills: ["MySQL"],
    },
    {
      title: "Tools",
      icon: "tool",
      skills: ["Git", "GitHub", "Maven", "Postman", "VS Code / Eclipse"],
    },
  ],
};

// Work Experience Section
export const internshipsList = [
  {
    organization: "Wheeltrix Group",
    role: "Web Development Intern",
    location: "Hyderabad, India",
    duration: "June 2026 – August 2026",
    summary:
      "Engineered backend RESTful services and authentication architecture for the Feedback Collection System (FBCS), an enterprise survey management platform designed for structured student and faculty evaluation.",
    bullets: [
      "Developed modular REST APIs using Spring Boot for dynamic question creation, survey lifecycle management, and automated response collection.",
      "Implemented stateless authentication and role-based access control (RBAC) using Spring Security, JWT (JSON Web Tokens), and BCrypt password encryption.",
      "Designed relational database schemas and enforced a strict one-response-per-user constraint using composite unique keys in MySQL.",
      "Constructed centralized exception handling using Spring's @RestControllerAdvice to standardize API error payloads and eliminate unhandled server faults.",
      "Worked collaboratively in an Agile team using Git feature branches, pull request code reviews, and Postman API contract testing.",
      "Authored automated unit and integration test suites with JUnit 5 and Mockito to validate service business logic, security filters, and repository queries.",
    ],
    skills: [
      "Developed modular REST APIs using Spring Boot for dynamic question creation, survey lifecycle management, and automated response collection.",
      "Implemented stateless authentication and role-based access control (RBAC) using Spring Security, JWT (JSON Web Tokens), and BCrypt password encryption.",
      "Designed relational database schemas and enforced a strict one-response-per-user constraint using composite unique keys in MySQL.",
      "Constructed centralized exception handling using Spring's @RestControllerAdvice to standardize API error payloads and eliminate unhandled server faults.",
      "Worked collaboratively in an Agile team using Git feature branches, pull request code reviews, and Postman API contract testing.",
      "Authored automated unit and integration test suites with JUnit 5 and Mockito to validate service business logic, security filters, and repository queries.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST APIs",
      "MySQL",
      "Hibernate",
      "JUnit 5",
      "Mockito",
      "Postman",
      "Git",
    ],
  },
];

// Featured Projects with Case Study Data
export const projects = [
  {
    id: "placement-prep-platform",
    number: "01",
    badge: "Full-Stack Project",
    title: "Placement Prep Platform",
    oneLineProblem:
      "Undergraduate students face fragmented coding interview preparation and high ATS resume rejection rates due to missing technical keywords.",
    shortDescription:
      "A full-stack web platform for structured campus placement preparation featuring algorithmic pattern tracking and automated resume ATS analysis.",
    keyFeatures: [
      "Structured DSA problem tracker categorized by algorithmic pattern (Two Pointers, Sliding Window, Trees, DP)",
      "Pattern-based learning roadmap with personalized status and difficulty progress metrics",
      "Automated ATS resume analyzer extracting text from uploaded PDFs using Apache PDFBox",
      "Targeted technical keyword gap analysis with actionable placement readiness recommendations",
      "Stateless JWT authentication and user profile management with BCrypt password hashing",
    ],
    techLine: "Java • Spring Boot • React • REST APIs • MySQL",
    techTags: [
      "React",
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Spring Security",
      "JWT",
      "Apache PDFBox",
      "JUnit 5",
      "Maven",
    ],
    links: {
      github: "https://github.com/shyamsunderreddypolu",
      demo: null,
    },
    caseStudy: {
      overview:
        "Placement Prep Platform is a full-stack web application designed to help undergraduate engineering students systematically prepare for technical campus placements. It consolidates curated coding problem patterns with an automated resume evaluation tool to maximize recruitment success.",
      problem:
        "Students preparing for software developer placements face two distinct bottlenecks: practicing coding questions without systematic pattern recognition, and submitting resumes that fail initial recruiter ATS keyword filters due to improper technical alignment.",
      solution:
        "Engineered a unified preparation portal that combines an algorithmic problem tracker classified by pattern (Two Pointers, Sliding Window, Dynamic Programming, Graphs) with an automated ATS resume scoring service that parses PDF uploads using Apache PDFBox to evaluate keyword relevance against technical job descriptions.",
      features: [
        "Structured DSA Tracker: Categorizes coding questions by algorithmic pattern (Sliding Window, Two Pointers, Trees, DP) with personalized status tracking.",
        "Automated ATS Resume Analyzer: Extracts text from uploaded PDF resumes using Apache PDFBox and scores match percentage against targeted job descriptions.",
        "Keyword Gap Analysis: Flags missing technical keywords (e.g. Spring Boot, REST APIs, SQL) with actionable improvement recommendations.",
        "Stateless JWT Authentication: Secure user registration and login with BCrypt password hashing and token-based API protection.",
        "Personalized Preparation Dashboard: Real-time progress metrics displaying solved questions by difficulty and topic completion.",
      ],
      architecture: [
        "Frontend: React SPA with responsive Tailwind CSS components & state-driven UI",
        "↓ REST API: JSON payloads over HTTP/HTTPS with JWT Authorization Header",
        "Controller Layer: Spring Boot @RestController with DTO request validation",
        "Security: Spring Security Filter Chain validating JWT tokens on each request",
        "Service Layer: Business logic for DSA progress tracking & Apache PDFBox ATS parser",
        "Persistence: Spring Data JPA & Hibernate ORM mapping to relational entities",
        "Database: MySQL database hosting normalized tables for users, problems, and evaluations",
      ],
      techStackCategorized: {
        Backend: ["Java 17+", "Spring Boot", "REST APIs", "Apache PDFBox"],
        Security: ["Spring Security", "JWT (JSON Web Token)", "BCrypt Hashing"],
        Frontend: ["React", "JavaScript (ES6+)", "Tailwind CSS"],
        Database: ["MySQL", "Spring Data JPA", "Hibernate"],
        TestingTools: ["JUnit 5", "Mockito", "Postman", "Maven", "Git"],
      },
      databaseSchema: [
        "users: id (PK), email (UNIQUE), password_hash, first_name, role, created_at",
        "dsa_problems: id (PK), title, topic, difficulty, pattern, problem_url",
        "user_progress: id (PK), user_id (FK), problem_id (FK), status, notes, updated_at",
        "resume_evaluations: id (PK), user_id (FK), job_title, ats_score, missing_keywords, analyzed_at",
      ],
      apiEndpoints: [
        { method: "POST", path: "/api/auth/register", desc: "User registration with BCrypt password encryption" },
        { method: "POST", path: "/api/auth/login", desc: "User authentication returning signed JWT token" },
        { method: "GET", path: "/api/problems", desc: "Fetch problems filtered by pattern or difficulty" },
        { method: "POST", path: "/api/progress/update", desc: "Update solved status and notes for a DSA problem" },
        { method: "POST", path: "/api/resume/analyze", desc: "Multipart PDF upload; executes ATS keyword evaluation" },
      ],
      challenges: [
        "Reliable Text Extraction: Handling non-standard PDF formats, varied column layouts, and special characters by configuring Apache PDFBox with text strip filters.",
        "Token Expiration & Statelessness: Implementing token expiration handling without maintaining server sessions, preserving horizontal scalability.",
      ],
      myContribution:
        "Designed and implemented the end-to-end architecture: developed the Spring Boot backend services, implemented the PDF text parsing and scoring algorithm with Apache PDFBox, designed normalized MySQL schemas, and connected the React frontend dashboard.",
    },
  },
  {
    id: "secure-ranked-search",
    number: "02",
    badge: "Cryptographic Backend Project",
    title: "SecureRank — Dynamic Multi-Keyword Ranked Search over Encrypted Cloud Data",
    oneLineProblem:
      "Standard cloud encryption protects confidentiality but destroys searchability, forcing either full-dataset downloads or insecure server-side decryption.",
    shortDescription:
      "A Searchable Symmetric Encryption (SSE) system enabling multi-keyword ranked queries over AES-256 encrypted documents without server-side decryption.",
    keyFeatures: [
      "Searchable Symmetric Encryption (SSE) supporting multi-keyword queries over AES-256 encrypted documents",
      "Cryptographic trapdoor token generation guaranteeing zero server-side plaintext exposure",
      "TF-IDF relevance ranking computed directly over encrypted index tokens to prioritize results",
      "Data Owner and Data Consumer dual-role architecture for secure multi-party cloud sharing",
      "Modernized modular Spring Boot REST API service with Spring Data JPA and MySQL",
    ],
    techLine: "Java • Spring Boot • REST APIs • MySQL • Cryptography",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "AES-256 Encryption",
      "TF-IDF Ranking",
      "Searchable Symmetric Encryption",
      "REST APIs",
      "MySQL",
      "Spring Data JPA",
      "Maven",
    ],
    links: {
      github: "https://github.com/shyamsunderreddypolu",
      demo: null,
    },
    caseStudy: {
      overview:
        "SecureRank is a Searchable Symmetric Encryption (SSE) backend application that solves the fundamental conflict between cloud storage encryption and search functionality. It allows authorized clients to perform multi-keyword search queries over AES-256 encrypted files and receive relevance-ranked results without the cloud server ever decrypting data.",
      problem:
        "When confidential documents are uploaded to third-party cloud servers, full encryption protects against breaches. However, standard encryption destroys searchability: to find documents, the server must either decrypt all files (violating privacy) or the client must download every file locally (impractical at scale).",
      solution:
        "Engineered a privacy-preserving search architecture using Searchable Symmetric Encryption (SSE). Secure inverted indexes map cryptographic keyword trapdoors (generated via HMAC-SHA256) to encrypted document references. TF-IDF relevance weights are computed over trapdoor frequency tokens, allowing top-k ranked document retrieval without revealing plaintext to the cloud server.",
      features: [
        "Searchable Symmetric Encryption (SSE): Creates secure inverted index structures that map cryptographic keyword trapdoors to encrypted document references.",
        "AES-256 Document Encryption: File payloads are encrypted client-side/in-flight before storage, ensuring data confidentiality at rest.",
        "Multi-Keyword Query Processing: Supports conjunctive and disjunctive search across multiple encrypted search tokens simultaneously.",
        "TF-IDF Relevance Ranking: Calculates Term Frequency-Inverse Document Frequency relevance scores to return the most pertinent documents first without revealing document plaintext.",
        "REST API Modernization: Re-architected a legacy monolithic JSP/Servlet architecture into a clean Spring Boot REST service with Spring Data JPA.",
      ],
      architecture: [
        "Client Application: Generates cryptographic trapdoors (hashes) for search keywords",
        "↓ REST API: Sends search trapdoor tokens to Spring Boot search controller",
        "SSE Search Engine: Matches trapdoors against encrypted keyword index without decrypting files",
        "Ranking Module: Computes TF-IDF relevance weights over the matched encrypted index entries",
        "Persistence Layer: Spring Data JPA retrieving encrypted file metadata & payloads",
        "Storage Layer: MySQL database maintaining encrypted documents & index tables",
      ],
      techStackCategorized: {
        Backend: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA"],
        SecurityCrypto: ["AES-256 Encryption", "Searchable Symmetric Encryption (SSE)", "HMAC / SHA-256 Trapdoors"],
        Algorithms: ["TF-IDF Relevance Scoring", "Inverted Index Construction"],
        Database: ["MySQL", "Hibernate ORM"],
        Tools: ["Maven", "Postman", "Git"],
      },
      databaseSchema: [
        "users: id (PK), username, public_key_fingerprint, role, created_at",
        "encrypted_documents: id (PK), owner_id (FK), file_name, aes_cipher_payload, upload_date",
        "keyword_index: id (PK), document_id (FK), hashed_keyword_token, encrypted_tf_idf_weight",
      ],
      apiEndpoints: [
        { method: "POST", path: "/api/files/upload", desc: "Uploads AES-256 encrypted file and generates SSE index tokens" },
        { method: "POST", path: "/api/search/ranked", desc: "Executes multi-keyword trapdoor search; returns ranked document IDs" },
        { method: "GET", path: "/api/files/{id}/download", desc: "Downloads encrypted file payload for client-side decryption" },
      ],
      challenges: [
        "Confidential Relevance Ranking: Computing document relevance based on keyword frequency without allowing the server to learn word plaintext or index distributions.",
        "Architectural Refactoring: Decoupling legacy monolithic Servlet and scriptlet code into clean Spring Boot controllers, modular services, and repository layers.",
      ],
      myContribution:
        "Re-engineered the legacy architecture into a modular Spring Boot REST API, implemented the Searchable Symmetric Encryption index generator, constructed the TF-IDF relevance calculation algorithm, and mapped MySQL relational persistence using Spring Data JPA.",
    },
  },
];

// Education Details
export const education = {
  degree: "Bachelor of Technology in Information Technology",
  shortDegree: "B.Tech – Information Technology",
  institution: "Guru Nanak Institutions Technical Campus (GNITC)",
  location: "Hyderabad, India",
  cgpa: "8.1 / 10.0",
  graduation: "2023 – 2027 (Expected)",
  highlights: [
    "Core Focus: Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), DBMS, Operating Systems",
    "Treasurer & Active Member, Infonex Student Technical Association",
    "Organizing Lead, GNITC Techtrix Technical Hackathon",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Database Management Systems (MySQL)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

// Verified Certifications
export const certificates = {
  featured: [
    {
      name: "Java Developer Certification",
      issuer: "Infosys Springboard",
      date: "October 2025",
      icon: "☕",
      verifyUrl: "https://verify.onwingspan.com",
      pdfUrl: "/Infosys_Springboard_Java_Developer_Certificate.pdf",
      highlight: "Issued by Infosys Limited",
      credentialId: "Verified by Infosys Springboard",
    },
    {
      name: "Introduction to SQL",
      issuer: "Simplilearn SkillUp",
      date: "May 2026",
      icon: "🗄️",
      verifyCode: "Certificate Code: 10216216",
      pdfUrl: "/Simplilearn_SQL_Certificate.pdf",
      highlight: "SkillUp Verified",
      credentialId: "Certificate ID: 10216216",
    },
  ],
};

// Leadership & Co-Curricular
export const leadershipList = [
  {
    title: "Treasurer, Infonex Association",
    organization: "GNITC Hyderabad",
    duration: "2025 – Present",
    role: "Treasurer & Event Coordinator",
    badge: "Operations & Finance",
    description:
      "Managed financial planning, budgeting, and resource logistics for departmental technical workshops, coding contests, and guest lectures in coordination with faculty mentors.",
  },
  {
    title: "Organizing Lead – Techtrix Hackathon",
    organization: "GNITC Hyderabad",
    duration: "2025",
    role: "Team Lead & Technical Logistics",
    badge: "Leadership & Collaboration",
    description:
      "Led student organizing committee for the Techtrix Hackathon, overseeing team registrations, technical infrastructure, scheduling, and participant support for collegiate teams.",
  },
];

// Soft Skills / Core Competencies
export const softSkillsList = [
  {
    name: "Analytical Problem Solving",
    icon: "🧩",
    desc: "Deconstructing complex algorithmic and backend requirements into modular, maintainable code.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working constructively across developer teams, participating in code reviews, and pairing on problems.",
  },
  {
    name: "Technical Communication",
    icon: "📝",
    desc: "Documenting REST endpoints, schema contracts, and implementation trade-offs clearly.",
  },
  {
    name: "Disciplined Testing",
    icon: "🛡️",
    desc: "Writing comprehensive unit tests with JUnit 5 & Mockito to catch edge cases prior to deployment.",
  },
  {
    name: "Adaptability & Fast Learning",
    icon: "⚡",
    desc: "Rapidly picking up new tools, frameworks, and API specifications to solve engineering tasks.",
  },
  {
    name: "Time & Priority Management",
    icon: "⏱️",
    desc: "Balancing academic coursework, internship commitments, and hands-on software development.",
  },
];

export const footerContent = {
  name: "Polu Shyam Sunder Reddy",
  role: "Full-Stack Java Developer | Spring Boot | React",
  taglines: [
    "Full-Stack Java Developer",
    "Java · Spring Boot · React · REST APIs · MySQL",
    "GNITC Hyderabad · B.Tech IT · 8.1 CGPA",
  ],
  credential: "B.Tech IT (GNITC) · CGPA 8.1",
  availabilityText: "Available for campus placements & software engineering roles",
  copyright: `© ${new Date().getFullYear()} Polu Shyam Sunder Reddy. All rights reserved.`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
