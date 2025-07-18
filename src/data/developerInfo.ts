export const developerInfo = {
  name: "Ravi Mehra",
  title: "Senior Software Engineer",
  avatar: {
    src: "assets/thumbnails/about.png",
    alt: "Ravi Mehra",
    fallback: "AS",
  },
  typingItems: [
    "⚛️ Craft Modern Frontend Solutions using Ruby on Rails, Angular and React to build responsive, accessible, and user-centric interfaces.",
    "🛠️ Design and Develop Scalable Backend APIs with Ruby on Rails, enabling seamless integrations and efficient data handling.",
    "🗄️ Manage Databases & Caching Layers across MySql, PostgreSQL, Redis to ensure fast, reliable application performance.",
    "☁️ Architect Secure & Scalable Cloud Solutions using AWS, Docker deployment and web hosting.",
    "👨‍💻 Full Stack Engineer @MonsterCareer (formerly CareerBuilder.com) with 14+ years of experience delivering end-to-end solutions, leading teams, and driving innovation across industries.",
  ],
  resume: {
    url: "assets/docs/Ravi_Resume.pdf",
    label: "Download Resume",
  },
};

export type DeveloperIntroProps = {
  className: string;
  developer: typeof developerInfo;
};
