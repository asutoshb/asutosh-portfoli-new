
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: "talk" | "award" | "competition";
  link?: string;
  event?: string;
  year?: string;
  details?: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  profileImageUrl: string | null;
}

export const personalInfo: PersonalInfo = {
  name: "Asutosh Behera",
  title: "Software Engineer 2",
  bio: "Software Engineer passionate about building scalable, user-centric apps. Led impactful features at Vyapar like User Role Permission, E-invoice onboarding, and WhatsApp marketing integrations. Skilled in React, Redux, Node.js, and TypeScript with a focus on clean code and performance.",
  location: "Bengaluru, India",
  email: "beheraasutosh132@gmail.com",
  linkedin: "https://www.linkedin.com/in/asutoshbehera/",
  github: "https://github.com/asutoshb",
  profileImageUrl: null,
};

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Vyapar Hackathon Winner",
    description: "Secured first place in a Vyapar-sponsored hackathon.",
    type: "competition",
    event: "Vyapar Hackathon",
    year: "2023",
    details: "Developed a multilingual voice bot for the Vyapar app, enhancing accessibility and pushing features to production. Awarded Rs 50,000.",
    icon: "🏆",
  },
  {
    id: "2",
    title: "MERN Full Stack Certification",
    description: "Completed MERN full stack development course.",
    type: "award",
    event: "Masai School",
    year: "2021",
    details: "Trained in full-stack development using MongoDB, Express, React, and Node.js.",
    icon: "📜",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Medium Clone",
    description: "Blogging platform with Google login, allowing users to read, write, and publish blogs.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    liveUrl: "https://mediumapp.vercel.app/",
    githubUrl: "https://github.com/asutoshb/mediumapp",
    featured: true,
  },
  {
    id: "2",
    title: "Tic Tac Toe Game",
    description: "Interactive two-player Tic Tac Toe game with UI and game logic.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    liveUrl: "https://asutoshb.github.io/Tic-Tac-Toe-react/",
    githubUrl: "https://github.com/asutoshb/Tic-Tac-Toe-react",
    featured: false,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages & Web Tech",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Libraries & Tools",
    items: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Prettier",
      "ESLint",
      "Git",
      "Confluence",
      "Jira",
      "Postman",
    ],
  },
  {
    category: "Database",
    items: ["SQLite", "MongoDB"],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Vyapar",
    position: "Software Engineer 2",
    duration: "Dec 2021 - Present",
    description: [
      "Developed User Role Permission for company sharing and license boosting.",
      "Built in-app notifications for user engagement and dynamic marketing.",
      "Automated app release via CLI with AWS S3 and GitHub tagging.",
      "Integrated E-invoice onboarding using Master India APIs.",
      "Led Redux integration in Electron desktop app.",
      "Implemented WhatsApp marketing templates with Brands.live.",
    ],
    technologies: [
      "React.js",
      "Electron",
      "Redux",
      "Firebase",
      "WebSocket",
      "Commandtron",
    ],
  },
];
