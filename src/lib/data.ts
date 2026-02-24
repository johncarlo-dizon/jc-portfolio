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
  // ── Desktop (Java Swing) ──────────────────────────────────────────
  {
    title: "HR, Timekeeping & Payroll System",
    description:
      "Comprehensive desktop system for managing employee records, daily time tracking, and automated payroll computation. Maintained and enhanced for company-wide use, covering leave management, overtime calculation, and payslip generation.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Bloodletting & Blood Donation Management System",
    description:
      "Desktop application for managing blood donation drives and bloodletting events. Tracks donor records, blood type inventory, donation history, and generates reports for health coordinators.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Intern Attendance Management System",
    description:
      "Desktop system that integrates with biometric devices to pull real-time attendance data. Automatically generates TDR (Time and Daily Reports) and detailed attendance reports for intern monitoring and compliance.",
    tags: ["Java", "Java Swing", "PostgreSQL", "Biometrics Integration"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: true,
  },

  // ── Web ───────────────────────────────────────────────────────────
  {
    title: "Clinic Management System",
    description:
      "Web-based clinic management system developed for a school health clinic. Manages patient consultations, medical records, appointment scheduling, and health inventory for school staff and students.",
    tags: ["Laravel", "MySQL", "REST API", "Postman"],
    category: "Web",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Research Management & Title Verification System",
    description:
      "Full-stack Laravel system for managing research documents and verifying title originality. Features plagiarism detection, document versioning, research workflow management, and RESTful APIs consumed by the frontend.",
    tags: ["Laravel", "PHP", "MySQL", "REST API", "Plagiarism Detection"],
    category: "Web",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Point of Sale System",
    description:
      "Native PHP web-based POS system for retail operations. Handles product catalog management, sales transactions, receipt generation, inventory tracking, and daily sales reporting.",
    tags: ["PHP", "MySQL", "JavaScript"],
    category: "Web",
    github: "#",
    live: null,
    featured: false,
  },

  // ── Mobile (Flutter) ─────────────────────────────────────────────
  {
    title: "Ordering App",
    description:
      "Flutter mobile application for placing and managing orders. Features product browsing, cart management, order tracking, and a clean checkout flow with real-time order status updates.",
    tags: ["Flutter", "Dart", "REST API", "MySQL"],
    category: "Mobile",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Recipe App",
    description:
      "Flutter app for browsing, saving, and sharing recipes. Includes ingredient lists, step-by-step cooking instructions, category filtering, and a favorites feature with local storage.",
    tags: ["Flutter", "Dart", "REST API"],
    category: "Mobile",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Quote App",
    description:
      "Flutter mobile app that displays inspirational quotes with category filtering, share functionality, and a daily quote notification feature. Clean UI with smooth animations.",
    tags: ["Flutter", "Dart", "REST API"],
    category: "Mobile",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Note App",
    description:
      "Feature-rich Flutter notes application with create, edit, delete, and search functionality. Supports color-coded notes, local SQLite storage, and a responsive grid/list layout.",
    tags: ["Flutter", "Dart", "SQLite"],
    category: "Mobile",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Contacts App",
    description:
      "Flutter contacts manager app with full CRUD operations, contact grouping, search and filter, and local device storage integration for seamless contact management.",
    tags: ["Flutter", "Dart", "SQLite"],
    category: "Mobile",
    github: "#",
    live: null,
    featured: false,
  },
];


export const experience = [
  {
    role: "Desktop Application Developer (Intern)",
    company: "BMware Company",
    type: "Internship",
    period: "2025-2026",
    location: "Pampanga, Philippines",
    description: [
      "Maintained and enhanced the company's HR, Timekeeping, and Payroll desktop system built with Java Swing and PostgreSQL.",
      "Developed an Intern Attendance Management System that integrates with biometric devices to pull attendance data automatically.",
      "Implemented automated generation of TDR (Time and Daily Reports) and attendance summary reports for management.",
      "Collaborated with the development team to identify bugs, improve system performance, and add new features based on company requirements.",
    ],
  },
  {
    role: "Full Stack Developer (College Projects)",
    company: "Holy Cross College",
    type: "Academic",
    period: "2022 – Present",
    location: "Sta. Ana, Pampanga",
    description: [
      "Built a Research Management and Title Verification System with plagiarism detection using Laravel and RESTful APIs.",
      "Developed a Clinic Management System for the school health clinic using Laravel and MySQL.",
      "Created multiple Flutter mobile apps including an Ordering App, Recipe App, Quote App, Note App, and Contacts App.",
      "Developed a Bloodletting and Blood Donation Management System using Java Swing for community health drives.",
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
    title: "Best Project for Community Extension",
    school: "Holy Cross College",
    period: "SY 2021–2022",
    icon: "🎖️",
  },
  {
    title: "Best in System",
    school: "Holy Cross College",
    period: "SY 2021–2022",
    icon: "🎖️",
  },
  {
    title: "Best Presenter",
    school: "Holy Cross College",
    period: "SY 2021–2022",
    icon: "🎖️",
  },
  {
    title: "Best in Research Paper",
    school: "Holy Cross College",
    period: "SY 2021–2022",
    icon: "🎖️",
  },
  {
    title: "Overall Best Project",
    school: "Holy Cross College",
    period: "SY 2021–2022",
    icon: "🎖️",
  },
];