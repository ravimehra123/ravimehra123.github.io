export interface MediumArticleType {
  title: string;
  link: string;
  pubDate: string;
  tags: string[];
  readingTime: string;
  image: string;
  excerpt: string;
}

export type ArticleData = {
  articles: MediumArticleType[];
  initialMessage: string;
};

export const articlesData: ArticleData = {
  initialMessage:
    "Here are a few of my latest Medium articles, where I share insights, lessons, and ideas from my journey as a developer. I enjoy writing content that helps and inspires fellow developers and sharing personal experiences from real-world projects.",
  articles: [
    {
      title: "Puppeteer Isn’t Meant for PDFs — Here’s Why",
      link: "https://medium.com/@onu.khatri/puppeteer-isnt-meant-for-pdfs-here-s-why-1e3a4419263f",
      pubDate: "2025-06-10",
      tags: ["Puppeteer", "Nodejs", "Html To Pdf", "Best Practices"],
      readingTime: "6 min read",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*nbZ8xyxUwBr-CgZC5MxB0Q.png",
      excerpt:
        "Puppeteer is one of the bests tools the web automation space. It provides a Node.js interface to control headless Chrome or Chromium browsers — ideal for tasks like end-to-end testing, web scraping, and UI automation. But lately, developers have started using Puppeteer for something it wasn’t really designed for: Generating PDFs from web pages.",
    },
    {
      title: "Pre-Planning of My React Portfolio",
      link: "https://medium.com/@onu.khatri/pre-planning-of-my-react-portfolio-d4befc26d825",
      pubDate: "2025-04-20",
      tags: ["Developer Stories", "Portfolio", "Pre Planning", "React"],
      readingTime: "3 min read",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*dezybOfkGFdRsJZWW5euBA.png",
      excerpt:
        "As I embarked on the journey of building my portfolio website, I quickly recognized that pre-planning is a crucial step before diving into code. It’s easy to get swept away by the excitement of building, but taking the time to thoughtfully map out your project can save you a significant amount of time and headaches down the road.",
    },
    {
      title: "Grow Beyond Labels — We’re Developers",
      link: "https://medium.com/@onu.khatri/dont-be-a-developer-be-a-problem-solver-e7b011f4d90f",
      pubDate: "2025-04-15",
      tags: ["Developer Stories", "Learning To Code"],
      readingTime: "5 min read",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*84zYCB3Ro_IZe2OnBkjdJQ.png",
      excerpt:
        "I wanted to take a moment to share some thoughts that have been swirling around in my mind about our journey in the tech world. You know how we often get caught up in our job titles? “Angular Developer,” “.NET Specialist,” or “JavaScript Guru” — it’s easy to let those labels define us. But after over 12 years in software engineering, I’ve realized something crucial: Labels can limit you. Tools empower you.",
    },
    {
      title: "Analyze the Fire-&-Forget in NodeJs",
      link: "https://medium.com/@onu.khatri/analyze-the-fire-forget-in-nodejs-7a60f78128ec",
      pubDate: "2024-10-30",
      tags: ["Nodejs", "Best Practices", "Asynchronous Programming"],
      readingTime: "5 min read",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*YQDzwUlm0eL4GYs4lF_AaA.jpeg",
      excerpt:
        "Developers often enjoy using a fire-and-forget pattern or calling async functions without await. This allows them to easily move on to the next step or return the result without worrying about handling the output of a one-way task. However, it can be a double-edged sword if not handled carefully.",
    },
  ],
};
