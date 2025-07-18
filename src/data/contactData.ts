import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

import type { ComponentType } from "react";

export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link: string;
  iconColorClass: string;
}

export interface ContactSectionContent {
  heading: string;
  subheading: string;
  signature: string;
  authorName: string;
  contactMethods: ContactInfo[];
}

export const contactData: ContactSectionContent = {
  heading: "Reach Out To Me",
  subheading: "DISCUSS A PROJECT OR JUST WANT TO SAY HI?",
  authorName: "Ravi Mehr",
  contactMethods: [
    {
      icon: LinkedInLogoIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/ravi-mehra-4b8b9320",
      link: "https://www.linkedin.com/in/ravi-mehra-4b8b9320",
      iconColorClass: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: EnvelopeClosedIcon,
      label: "Email",
      value: "ravi.lib17@gmail.com",
      link: "mailto:ravi.lib17@gmail.com",
      iconColorClass: "text-rose-600 dark:text-rose-400",
    },
    {
      icon: MobileIcon,
      label: "Phone",
      value: "+91-9873751513",
      link: "tel:+919873751513",
      iconColorClass: "text-green-600 dark:text-green-400",
    },
  ],
};
