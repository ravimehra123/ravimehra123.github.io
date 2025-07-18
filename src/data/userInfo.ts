export const userInfo = {
  name: "Ravi Mehra",
  summary: [
    `I’m a dedicated and curious Full-Stack Software Engineer with over 14+ years 
    of industry experience building fast, scalable, and user-focused web applications. 
    I specialize in both frontend and backend development, with strong proficiency in Ruby on Rails, Angular, and React. 
    My expertise allows me to take ideas from conception to completion — owning the entire development lifecycle, from architecture and implementation to deployment.`,
    `Over the years, I’ve worked across diverse domains including job-tech, insurance, travel, and market research — consistently delivering high-impact features and performance improvements. I’ve led engineering teams, driven architectural revamps, and spearheaded migrations from legacy systems to modern microservice-based infrastructures.`,
    `Beyond my day job, I enjoy exploring new tech and building small tools, components, and utilities that solve real problems. Some of these started as side projects for learning, and several are now production-ready and used in real-world applications.`,
  ],
  highlights: [
    "💡 A strong problem-solving mindset and ability to simplify complexity into clean, maintainable code.",
    "🤝 A collaborative approach to teamwork — I love mentoring, doing code reviews, and sharing best practices.",
    "🚀 An agile-first mindset — delivering iteratively with fast feedback loops and test-driven development.",
    "🧠 A growth-oriented attitude — constantly experimenting with new tools, patterns, and practices.",
  ],
  github: {
    url: "https://github.com/ravimehra123",
    label: "GitHub account",
  },
  resumeLink: "docs/Ravi_Resume.pdf",
  contact: {
    email: "ravi.lib17@gmail.com",
    phone: "+91-9873751513",
  },
};

export type AboutMeProps = {
  user: typeof userInfo;
};
