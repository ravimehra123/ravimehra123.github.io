export type GitCardProp = {
  className?: string;
  titleContainerClass?: string;
  contentContainerClass?: string;
  title: string;
  description: string;
  langList: { name: string; langClass: string }[];
  size: string;
  techTags: string[];
  url: string;
  children?: React.ReactNode;
};

export const gitProjects: GitCardProp[] = [
  {
    title: "PuppetCrawl: Web to Pdf",
    description:
      "🔥 The service can use to render a web-page on server and perform action like web-page to pdf or snapshots etc",
    langList: [{ langClass: "bg-blue-500", name: "Typescript" }],
    techTags: ["NodeJS", "Express"],
    size: "200 KB",
    url: "https://github.com/onu-khatri/Pupetter-Service",
  },
  {
    title: "TripYari: Travel CRM-Blog",
    description:
      "🚀 A travel website that provides facilities of CRM, Blog, Affiliated marketing, e-commerce and travel-search. ",
    langList: [
      { langClass: "bg-blue-500", name: "Typescript" },
      { langClass: "bg-blue-300", name: "CSS" },
      { langClass: "bg-orange-400", name: "HTML" },
      { langClass: "bg-purple-700", name: "C#" },
    ],
    techTags: [
      "CQRS",
      "Angular",
      "Clean Architecture",
      ".Net Identity",
      ".Net Core",
    ],
    size: "2.5 MB",
    url: "https://github.com/onu-khatri/TripYari",
  },
  {
    title: "DevFolio: Portfolio project",
    description:
      "🎉 A project to create online portfolio, started to learn react. Developer can use to showcase the skills and projects.",
    langList: [
      { langClass: "bg-blue-500", name: "Typescript" },
      { langClass: "bg-blue-300", name: "CSS" },
      { langClass: "bg-orange-400", name: "HTML" },
      { langClass: "bg-yellow-400", name: "JavaScript" },
    ],
    techTags: ["React", "Vite", "HeadLess-UI", "Theme"],
    size: "3.5 MB",
    url: "https://github.com/onu-khatri/onu-khatri.github.io",
  },
];
