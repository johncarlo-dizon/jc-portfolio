export const personalInfo = {
  name: "John Carlo Victoria Dizon",
  shortName: "JC Dizon",
  title: "Full Stack & Mobile Developer",
  tagline: "Building scalable web apps and mobile experiences — from backend APIs to Play Store deployments.",
  email: "johncarlo.dizon@email.com",
  github: "https://github.com/jcdizon",
  linkedin: "https://linkedin.com/in/jcdizon",
  location: "Philippines",
  available: true,
};

export const skills = [
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Play Store Deployment", level: 85 },
      { name: "CI/CD (GitHub Actions / Fastlane)", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP / Laravel", level: 88 },
      { name: "CodeIgniter 4", level: 82 },
      { name: "Spring Boot", level: 78 },
      { name: "Java", level: 80 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "Java Swing", level: 75 },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Postman", level: 90 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "Fleet Management Mobile App",
    description:
      "Cross-platform Flutter app for real-time vehicle tracking and fleet management. Integrated with a Laravel REST API backend, with automated Play Store deployments via CI/CD pipelines.",
    tags: ["Flutter", "Laravel", "MySQL", "GitHub Actions", "Play Store"],
    category: "Mobile",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description:
      "Full-stack web application built with Laravel and React for managing patient records, appointments, and billing. Includes role-based access control and a PostgreSQL database.",
    tags: ["Laravel", "React", "PostgreSQL", "REST API", "Postman"],
    category: "Full Stack",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce API (Spring Boot)",
    description:
      "Scalable RESTful API for an e-commerce platform built with Spring Boot and Java. Features JWT authentication, product catalog, order management, and PostgreSQL integration.",
    tags: ["Spring Boot", "Java", "PostgreSQL", "JWT", "REST API"],
    category: "Backend",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Point of Sale System",
    description:
      "Desktop POS application built with Java Swing for a local retail business. Handles inventory management, sales reporting, and MySQL database operations.",
    tags: ["Java", "Java Swing", "MySQL"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Inventory System (CodeIgniter 4)",
    description:
      "Web-based inventory management system built with CI4. Includes barcode scanning integration, stock alerts, and detailed reporting dashboards.",
    tags: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap"],
    category: "Full Stack",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Expense Tracker App",
    description:
      "Mobile application built with Flutter for personal finance tracking. Features chart visualizations, category management, and local SQLite storage with cloud sync.",
    tags: ["Flutter", "Dart", "SQLite", "REST API"],
    category: "Mobile",
    github: "#",
    live: "#",
    featured: false,
  },
];

export const experience = [
  {
    role: "Mobile & Full Stack Developer",
    company: "Your Company Name",
    period: "2023 – Present",
    location: "Philippines",
    description: [
      "Developed and deployed Flutter mobile applications to Google Play Store using automated CI/CD pipelines with GitHub Actions.",
      "Built and maintained RESTful APIs using Laravel and Spring Boot consumed by web and mobile clients.",
      "Designed and optimized MySQL and PostgreSQL database schemas for high-performance applications.",
      "Collaborated with cross-functional teams using Agile/Scrum methodology.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Previous Company",
    period: "2022 – 2023",
    location: "Philippines",
    description: [
      "Built web applications using PHP with Laravel and CodeIgniter 4 frameworks.",
      "Developed and documented RESTful APIs using Postman for testing and validation.",
      "Maintained and optimized MySQL databases for production environments.",
      "Integrated third-party payment and SMS gateway APIs.",
    ],
  },
];

export const education = [
  {
    level: "Tertiary",
    degree: "Bachelor of Science in Information Technology",
    school: "Holy Cross College",
    address: "Sta. Lucia, Sta. Ana, Pampanga",
    period: "2022 – Present",
    current: true,
  },
  {
    level: "Senior High School",
    degree: "Senior High School",
    school: "San Carlos San Luis National High School",
    address: "San Luis, Pampanga",
    period: "2020 – 2022",
    current: false,
  },
  {
    level: "Junior High School",
    degree: "Junior High School",
    school: "Dela Paz Libutad High School",
    address: "Pampanga",
    period: "2016 – 2020",
    current: false,
  },
  {
    level: "Primary",
    degree: "Elementary",
    school: "San Carlos Elementary School",
    address: "Pampanga",
    period: "2014 – 2016",
    current: false,
  },
];

export const achievements = [
  {
    title: "President's Lister",
    school: "Holy Cross College",
    period: "Multiple Semesters",
    icon: "🏆",
  },
  {
    title: "Top 1 Performer in the Department",
    school: "Holy Cross College",
    period: "SY 2024–2025",
    icon: "🥇",
  },
  {
    title: "Rank 9 Overall in the College",
    school: "Holy Cross College",
    period: "SY 2024–2025",
    icon: "⭐",
  },
  {
    title: "Top 3 Performer in the Department",
    school: "Holy Cross College",
    period: "SY 2022–2023",
    icon: "🥉",
  },
  {
    title: "Overall Best Project",
    school: "San Carlos San Luis National High School",
    period: "SY 2021–2022",
    icon: "🎖️",
  },
];