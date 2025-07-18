export interface Project {
  title: string;
  avatarSrc: string;
  avatarAlt: string;
  imageSrc: string;
  description: string;
  additionalDescription?: string;
  technologies: string[];
  features?: string[];
  responsibilities: string[];
  role: string;
}

export const projects: Project[] = [
  {
    title: "Talent Discovery Platform",
    avatarSrc: "assets/icons/cb.png",
    avatarAlt: "CareerBuilder",
    imageSrc: "assets/thumbnails/TDP-thumb.jpg",
    description:
      "TDP provides solutions and services to employers and recruiters. Recruiters can perform semantic search for candidates, send messages, manage jobs, and clients can also add candidates to their ATS.",
    additionalDescription:
      "This project is a group of multiple sub-projects that work on different technologies:",
    technologies: [
      "NodeJs",
      "NestJs",
      ".Net Core",
      "Rest-API",
      "S3",
      "Lambda",
      "SNS",
      "SQS",
      "MySql",
      "MS SQL",
      "Github",
      "Jenkin",
      "Docker",
      "Redis",
      "Angular 17",
    ],
    features: [
      "Home Page",
      "Messages",
      "Candidate Search",
      "Search Settings",
      "Candidate Detail",
      "Job Posting",
      "Campaign",
      "Analytics",
    ],
    responsibilities: [
      "Develop and maintain frontend and backend based on micro design.",
      "Create Lambda Functions, SNS Topics, and SQS Listeners",
      "Create and maintain Schema, Types, Tables and Functions on PostgreSQL DB.",
      "Reviews and optimize code, collaborates with internal teams.",
      "Ensures software is up-to-date with the latest technologies.",
      "Provide technical guidance, mentorship to the team members",
    ],
    role: "Senior Full-Stack Engineer",
  },
  {
    title: "Pay For Performance",
    avatarSrc: "assets/icons/cb.png",
    avatarAlt: "CareerBuilder",
    imageSrc: "assets/thumbnails/p4p.png",
    description:
      "P4P model offers a more flexible way to advertise all client jobs, and is designed to align what client pay with what we deliver. When client qualify, client only spend when candidates apply to their positions.",
    technologies: [
      ".Net Core",
      "Rest-API",
      "Lambda",
      "SNS",
      "Postgresql",
      "Github",
      "Jenkin",
      "Docker",
      "Redis",
      "Angular 17",
    ],
    additionalDescription:
      "Project is developed with micro-front end and microservices design. It uses AWS Lambda, SQS and SNS for the communication between the services.",
    responsibilities: [
      "Develop and maintain project with high quality code practices from front-end to back-end.",
      "Maintain project deployment on different environments with CI/CD and AWS Cloud.",
      "Reviews and debugs code, collaborates with internal teams.",
      "Ensures software is up-to-date with the latest technologies.",
      "Provide technical guidance, mentorship to deliver successful software projects.",
    ],
    role: "Senior Full-Stack Engineer",
  },
  {
    title: "@Rastreator Comparador",
    avatarSrc: "assets/icons/admiral.png",
    avatarAlt: "CareerBuilder",
    imageSrc: "assets/thumbnails/rastreator.png",
    description:
      "Rastreator provide the price comparison for Car/Bike insurances, Telephony packages, Energy and Mortgages with with guaranteed prices and exclusive offers of partners.",
    additionalDescription:
      "This Rastreator project is group of multiple projects that work with different partners and           technologies:",
    technologies: [
      ".Net Core",
      "Rest-API",
      "MS SQL",
      "RabbitMQ",
      "Azure",
      "Docker",
      "Redis",
      "Angular 17",
    ],
    features: [
      "Car Comparison",
      "Bike Comparison",
      "Telephony Comparison",
      "Travel: Flight & Hotels",
      "Energy Plans",
      "Mortgages",
    ],
    responsibilities: [
      "Code development for Websites and Apis in MVC, Angular, .net Core.",
      "Build and Sprint management",
      "Create Centralize tracking system.",
      "Migrate old project to new technologies.",
      "Code Review and Regular update with new technologies.",
      "Provide internal trainings to team to be sync with technologies updates and changes",
    ],
    role: "Senior Full-Stack Engineer",
  },
  {
    title: "Wakeel.com",
    avatarSrc: "assets/icons/admiral.png",
    avatarAlt: "CareerBuilder",
    imageSrc: "assets/thumbnails/wakeel.png",
    description:
      "Wakeel: Comparison of Car Insurances in Saudi Arabia. website provides free digital tools, independent insurance policy comparisons from trusted partner companies, and outstanding customer support.",
    technologies: [
      ".Net Core",
      "MS SQL",
      "Redis",
      "Angular",
      "Team Foundation Server",
      "RabbitMQ",
    ],
    features: [],
    responsibilities: [
      "Requirement analyze and Client related documentation.",
      "Build and Task completions, TFS branch-code manage.",
      "Create and maintain Schema, Types, Tables and Functions on MS SQL Server.",
      "Ensures software is up-to-date with the latest technologies.",
      "Reviews and optimize code, maintain Core and data-contract libraries.",
    ],
    additionalDescription:
      "Project is developed based on Clean Architecture with CQRS and Angular on frontend. RabbitMQ is used to communicate within the services. Create a SSO and centralized authentication system using ASP.Net Identity. On Angular side, it render Customer Journey to ask required questions dynamically, A Quote Fetching System get quotes from the providers based on user's answers.",
    role: "Senior Web Engineer",
  },
  {
    title: "@Rastreator-Vuelos",
    avatarSrc: "assets/icons/admiral.png",
    avatarAlt: "CareerBuilder",
    imageSrc: "assets/thumbnails/Vuelos.png",
    description:
      "Vuelos: is a search page to find the hotels, flights, rent-cars and travel insurance. Page redirects users to the Booking.com and Kayak.com as per their selected dates and destinations. Vuelos is best example to expand business with Affiliated marketing.",
    technologies: [".Net Core", "Redis", "React", "MS SQL Server"],
    additionalDescription:
      "Viajes is a project of Rastreator, to provide dynamic links and to gather data of the user who want to travel in Spain. This project helps Rastreator to start a Affiliated-marketing based project and increase the SEO-links and visibility at search engine indexes.",
    features: [
      "Home Page",
      "Messages",
      "Candidate Search",
      "Search Settings",
      "Candidate Detail",
      "Job Posting",
      "Campaign",
      "Analytics",
    ],
    responsibilities: [
      "Requirement analyze and Client related documentation.",
      "Build and Task completions, TFS branch-code manage",
      "Create and maintain Schema, Types, Tables and Functions on MS SQL Server.",
      "Ensures software is up-to-date with the latest technologies.",
      "Reviews and optimize code, maintain the JS libraries.",
    ],
    role: "Associate Software Engineer",
  },
  {
    title: "UK Cycle-Learning",
    avatarSrc: "assets/icons/E2E.png",
    avatarAlt: "CareerBuilder",
    imageSrc: "assets/thumbnails/cycleTraining.png",
    description:
      "cycletraining.spa-portal.co.uk is a light-weight web portal which enable cycle-teaching organizations of London to register their users online as well as track performance. This project also handle a survey to decide the learning-level of the user",
    additionalDescription:
      "This project is group of multiple projects that work with different technologies:",
    technologies: [".Net Core", "MS SQL", "IIS Server", "React", "D3.JS"],
    features: [
      "Survey",
      "CMR portal",
      "Candidate attendance tracker",
      "User profile and history",
      "Training Tracker",
      "Training certificate manager",
      "Analytics",
    ],
    responsibilities: [
      "Develop and maintain project with high quality code practices from front-end to back-end.",
      "Reviews and debugs code, collaborates with internal teams.",
      "Expanded and debugged portal features across front-end and back-end using ASP.Net, JQuery, and AngularJS",
      "Integrated tools like ChartJS and D3.js for advanced survey and performance metric visualization.",
    ],
    role: "Junior web developer",
  },
];
