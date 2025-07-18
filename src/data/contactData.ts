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
  signature: "Made with ❤️ by",
  authorName: "Anup Singh",
  contactMethods: [
    {
      icon: LinkedInLogoIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/onu-khatri",
      link: "https://www.linkedin.com/in/onu-khatri",
      iconColorClass: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: EnvelopeClosedIcon,
      label: "Email",
      value: "onu.khatri@gmail.com",
      link: "mailto:onu.khatri@gmail.com",
      iconColorClass: "text-rose-600 dark:text-rose-400",
    },
    {
      icon: MobileIcon,
      label: "Phone",
      value: "+91-8570000751",
      link: "tel:+918570000751",
      iconColorClass: "text-green-600 dark:text-green-400",
    },
  ],
};
