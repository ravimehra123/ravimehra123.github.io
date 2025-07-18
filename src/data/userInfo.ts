export const userInfo = {
  name: "Anup Singh",
  summary: [
    `I’m a dedicated and curious Full-Stack Software Engineer with over 12 years of industry experience building fast, scalable, and user-focused web applications. I specialize in both frontend and backend development, with strong proficiency in .NET Core, Node.js, Angular, and React. My expertise allows me to take ideas from conception to completion — owning the entire development lifecycle, from architecture and implementation to deployment.`,
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
    url: "https://github.com/onu-khatri",
    label: "GitHub account",
  },
  resumeLink: "docs/Anup-Singh-Resume.pdf",
  contact: {
    email: "onu.khatri@gmail.com",
    phone: "+91-8570000751",
  },
  contactAppeal:
    "Whether you're a business owner looking to get started on a web or app development project, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.",
};

export type AboutMeProps = {
  user: typeof userInfo;
};
