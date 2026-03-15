export const personalInfo = {
  name: "John Carlo Victoria Dizon",
  shortName: "JC Dizon",
  title: "Full Stack & Mobile Developer",
  tagline: "Building scalable web apps and mobile experiences — from backend APIs to Play Store deployments.",
  email: "johncarlovictoriadizon@gmail.com",
  github: "https://github.com/johncarlo-dizon",
  portfolio: "https://jc-portfolio-orpin.vercel.app/",
  linkedin: "https://linkedin.com/in/jcdizon",
  location: "Philippines",
  available: true,
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "PHP (native)", "Java Swing"],
  },
  {
    category: "Backend",
    items: ["Laravel", "CodeIgniter 4", "Django", "Spring Boot", "RESTful APIs"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "PHP REST API", "Play Store Deployment"],
  },
  {
    category: "Database & Tools",
    items: ["MySQL", "PostgreSQL", "Supabase", "Git / GitHub", "Docker", "Vercel"],
  },
];

export const projects = [
  // ── Desktop (Java Swing) ──────────────────────────────────────────
  {
    title: "Intern Attendance Management System",
    description:
      "Desktop system that integrates with biometric devices via LAN to pull real-time OJT attendance data. Automatically generates TDR (Time and Daily Reports) and detailed attendance reports for intern monitoring and compliance.",
    tags: ["Java", "Java Swing", "PostgreSQL", "Biometrics / LAN"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: true,
  },
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
    title: "Head Office POS Maintenance System",
    description:
      "Desktop point-of-sale maintenance system developed for the company head office. Handles product catalog management, sales transactions, receipt generation, and inventory tracking.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Kids Cancervive — Blood Donation Management",
    description:
      "Desktop application for managing blood donation drives and bloodletting events. Tracks donor records, blood type inventory, donation history, and generates reports for health coordinators. Maintained and enhanced ongoing.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    github: "#",
    live: null,
    featured: false,
  },

  // ── Web ───────────────────────────────────────────────────────────
  {
    title: "SyncSpace — Workspace Collaboration System",
    description:
      "Full-stack workspace collaboration system with a Kanban board (similar to Trello) for task and project management. Built with Next.js and Supabase, containerized with Docker, and deployed on Vercel.",
    tags: ["Next.js", "Supabase", "Docker", "Vercel"],
    category: "Web",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Research Management & Title Verification System",
    description:
      "Full-stack Laravel system for managing research documents and verifying title originality. Features plagiarism detection, document versioning, research workflow management, and RESTful APIs consumed by the frontend.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    category: "Web",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Clinic Management System",
    description:
      "Web-based clinic management system developed for a school health clinic. Manages patient consultations, medical records, appointment scheduling, and health inventory for school staff and students.",
    tags: ["Laravel", "MySQL", "REST API"],
    category: "Web",
    github: "#",
    live: null,
    featured: false,
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
];

export const experience = [
  {
    role: "Desktop Application Developer (Intern)",
    company: "BMware Business Solutions Enterprises Inc.",
    type: "Internship",
    period: "Dec 2025 – Present",
    location: "Pampanga, Philippines",
    description: [
      "Developed an Intern Attendance Management System that integrates with biometric devices via LAN to automatically pull and manage OJT attendance data.",
      "Maintained and enhanced the Kids Cancervive System, a blood donation management application used for tracking donor records and donation history.",
      "Maintained and improved the company's Human Resource, Time Keeping and Payroll System for internal operations.",
      "Developed a Head Office POS Maintenance System for point-of-sale management at the company head office.",
    ],
  },
  {
    role: "Full Stack Developer (Academic Projects)",
    company: "Holy Cross College",
    type: "Academic",
    period: "2022 – Present",
    location: "Sta. Ana, Pampanga",
    description: [
      "Built a Research Management and Title Verification System (Capstone) with plagiarism detection using Laravel and RESTful APIs.",
      "Developed a Clinic Management System for the school health clinic using Laravel and MySQL.",
      "Built SyncSpace, a workspace collaboration system with Kanban board using Next.js, Supabase, Docker, and Vercel.",
      "Created multiple Flutter mobile apps (Ordering, Recipe, Note, Contacts, Quote) with PHP REST API backends.",
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
    title: "Overall Best Project",
    school: "Holy Cross College",
    period: "SY 2021–2022",
    icon: "🎖️",
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
];

export const softSkills = [
  "Problem-Solving",
  "Team Collaboration",
  "Adaptability",
  "Initiative",
  "Self-directed Learning",
  "Accountability",
  "Critical Thinking",
];