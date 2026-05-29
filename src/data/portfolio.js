export const personalInfo = {
  name: "Shyam Sunder Reddy",
  title: "Java Full Stack Developer",
  subtitle: "Spring Boot Developer | GenAI Integration Enthusiast",
  tagline: "Building scalable web applications using Java, Spring Boot, React, and modern AI technologies.",
  email: "polushyamsunderreddy@gmail.com",
  phone: "+91 9948491312",
  linkedin: "https://www.linkedin.com/in/polushyamsunderreddy",
  github: "https://github.com/shyamsunderreddypolu",
  college: "Guru Nanak Institutions Technical Campus",
  degree: "B.Tech — Information Technology",
  cgpa: "8.4",
  graduation: "2027",
  location: "Hyderabad, India",
}

export const about = [
  "I'm an Information Technology undergraduate at Guru Nanak Institutions Technical Campus (CGPA: 8.4/10, graduating 2027) with a deep passion for backend engineering and full-stack development.",
  "My expertise centers on Core Java and Spring Boot, where I've built production-grade REST APIs, implemented JWT-based security, and designed relational schemas in MySQL. From stock trading platforms to secure cloud search systems, my projects span real enterprise use cases.",
  "I'm actively exploring Generative AI integrations — prompt engineering, LLM APIs, and AI-powered application layers — positioning myself at the intersection of traditional backend development and modern AI systems.",
  "My goal is to join a high-impact team as a Java Full Stack or Backend Developer, contributing to scalable systems that solve real-world problems.",
]

export const skills = [
  {
    category: "Programming Languages",
    icon: "⬡",
    items: [
      { name: "Java", color: "#ff6b6b" },
      { name: "Python", color: "#3776ab" },
      { name: "JavaScript", color: "#f5a623" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    items: [
      { name: "Spring Boot", color: "#6db33f" },
      { name: "Servlets", color: "#6db33f" },
      { name: "JDBC", color: "#6db33f" },
      { name: "REST APIs", color: "#00d4aa" },
      { name: "JWT Auth", color: "#00d4aa" },
    ],
  },
  {
    category: "Frontend",
    icon: "◈",
    items: [
      { name: "React.js", color: "#61dafb" },
      { name: "HTML5", color: "#e34f26" },
      { name: "CSS3", color: "#1572b6" },
      { name: "JavaScript ES6+", color: "#f5a623" },
    ],
  },
  {
    category: "Database & Tools",
    icon: "🗄",
    items: [
      { name: "MySQL", color: "#00758f" },
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#888" },
      { name: "Maven", color: "#c71a36" },
    ],
  },
  {
    category: "AI / GenAI",
    icon: "✦",
    accent: true,
    items: [
      { name: "Generative AI", color: "#6c63ff" },
      { name: "Prompt Engineering", color: "#6c63ff" },
      { name: "AI API Integration", color: "#6c63ff" },
      { name: "LLM Applications", color: "#6c63ff" },
    ],
  },
]

export const projects = [
  {
    id: 1,
    featured: true,
    title: "Stock Trading & Portfolio Management System",
    emoji: "📈",
    description:
      "A full-stack stock trading platform enabling users to buy/sell virtual stocks, monitor portfolio performance, track transactions, and analyze profit/loss through an interactive dashboard. Built with secure JWT-based authentication and a clean REST API architecture.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT", "REST APIs"],
    features: ["User Authentication", "Portfolio Management", "Buy/Sell Transactions", "Dashboard Analytics", "P&L Tracking", "Secure API"],
    github: "https://github.com/shyamsunderreddypolu/Stock-Trading-Portfolio-Management-System",
    accentColor: "#6c63ff",
  },
  {
    id: 2,
    featured: false,
    title: "Fuel Efficiency Predictor",
    emoji: "⛽",
    description:
      "A machine learning-powered application predicting vehicle fuel efficiency using historical datasets and predictive algorithms. Features interactive input, accuracy evaluation, and clean analytical output.",
    tech: ["Java", "Machine Learning", "MySQL"],
    features: ["Data Processing", "Predictive Analytics", "Accuracy Evaluation", "Interactive Interface"],
    github: "https://github.com/shyamsunderreddypolu/fuel-efficiency-predictor",
    accentColor: "#00d4aa",
  },
  {
    id: 3,
    featured: false,
    title: "Secure Ranked Multi-Keyword Search",
    emoji: "🔐",
    description:
      "A cloud-based search system performing ranked multi-keyword searches on encrypted data while preserving privacy. Implements secure indexing and access control for sensitive cloud storage environments.",
    tech: ["Java", "MySQL", "Cloud Security"],
    features: ["Encrypted Storage", "Ranked Results", "Privacy Preservation", "Secure Data Access"],
    github: "https://github.com/shyamsunderreddypolu/Secure-Ranked-Multi-Keyword-Search-System",
    accentColor: "#ff6b6b",
  },
]

export const certifications = [
  { title: "Java Developer Certification", issuer: "Infosys Springboard", icon: "🏅" },
  { title: "Introduction to SQL", issuer: "Database Fundamentals", icon: "🗃" },
]

export const achievements = [
  "Developed multiple end-to-end Java full-stack applications deployed with Spring Boot and React",
  "Built a secure cloud-based encrypted search system with privacy-preserving ranked retrieval",
  "Strong backend foundation: REST APIs, JWT auth, JDBC, MySQL schema design",
  "Experience with full-stack architecture from database layer to responsive React UI",
  "Active GitHub contributor with multiple project repositories and consistent commit history",
]
