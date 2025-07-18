export interface UserExperience {
  title: string;
  company: string;
  logo: string;
  date: string;
  joiningDate: string;
  lastJobDate?: string;
  description: (string | string[])[];
  contribution: string[];
  experienceDuration?: string;
}

export const userExperiencesData: UserExperience[] = [
  {
    title: "Sr. Full-stack Software Engineer",
    company: "CareerBuilder.com, Noida",
    logo: "assets/icons/cb.png",
    date: "June 2020 - Current",
    joiningDate: "2020-06-08 00:00:00",
    description: [
      "CareerBuilder is an employment website that operates in the United States and Europe. Here, We use data-driven technology and personalized tools to help match employers with great candidates based on individual wants, needs, and unique skill sets.",
      "We recently developed two new solutions: Pay Per Resume and Pay For Performance.",
      [
        '"Pay Per Resume" is an innovative approach to recruitment that allows clients and their recruitment team to pay only for the resumes they view instead of a monthly license.',
        '"Pay For Performance" offers a flexible way to advertise all client jobs, aligning cost with results. Clients only spend when candidates apply.',
      ],
    ],
    contribution: [
      "Led a team of 5 engineers, ensuring skill development, code quality, and project optimization.",
      "Enhanced employer and recruiter experiences by contributing to the Talent Discovery Platform.",
      "Developed 'Pay Per Resume' and 'Pay for Performance' models, increasing revenue by 10%.",
      "Reduced AWS costs and cleaned 57M+ data, saving 20% in revenue through quota validation improvements.",
      "Implemented WCAG 2.1 standards, improving website accessibility and expanding the user base.",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Admiral Group Plc, InspopIndia.com Pvt. Ltd, Gurugram",
    logo: "assets/icons/admiral.png",
    date: "Nov 2015 - Jun 2020",
    joiningDate: "2015-11-08 00:00:00",
    lastJobDate: "2020-06-07 00:00:00",
    description: [
      "InspopIndia.com was a branch of Admiral Group Plc in India to provide the technical support for the Insurance based products like Rastreator. Rastreator.com is Spain’s most popular online insurance broker and price comparison platform. Rastreator.com Provide different comparison products for Car, Telephony, Travel, Energy and Finance.",
      "I developed new projects from scratch Like:",
      [
        "Wakeel.com – It is an insurance comparison project which provide services for Gulf and MENA countries",
        "MultiProduct – Amazon affiliate for car products",
        "Viajes – Booking.com & Kayak.com affiliate",
        "adopta-un-perro.rastreator.com – Dog adoption welfare project",
      ],
    ],
    contribution: [
      "Built API integrations with minimal resources, aligning with client and business needs.",
      "Introduced test-driven development, reducing bugs by 27%, and guided team skill upgrades.",
      "Modernized legacy projects by redesigning with .NET Core, Angular, and migrating to microservices.",
      "Delivered key projects (Wakeel.com, Multiproduct, Viajes), expanding service offerings by 12%.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "E2E Research Pvt. Ltd, New Delhi",
    logo: "assets/icons/E2E.png",
    date: "Nov 2013 - Nov 2015",
    joiningDate: "2013-11-08 00:00:00",
    lastJobDate: "2015-11-07 00:00:00",
    description: [
      "Worked as a Junior Software developer on .Net platform and handled the top three revenue generating projects of organization. I Created survey based web-projects for Nickelodeon and The Guardian which show the comparison and statics between different brand of UK, US and Aus.",
    ],
    contribution: [
      "Automated data fetching in NodeJS, cutting report generation time from 5 hours to 30 minutes.",
      "Managed top revenue-generating projects, microservices, and frameworks.",
      "Developed survey-based web projects and a cycle-training application.",
      "Create a reporting project for theguardian.com and integrate D3.JS to create the dynamic charts.",
    ],
  },
];

export type userExperience = {
  experiences: UserExperience[];
  careerStartDate: string;
};
