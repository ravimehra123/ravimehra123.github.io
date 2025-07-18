import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  HomeIcon,
  PersonIcon,
  RocketIcon,
  GitHubLogoIcon,
  StackIcon,
  EnvelopeOpenIcon,
  CodeIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useScroll } from "framer-motion";

const menuItems = [
  { label: "Home", icon: <HomeIcon />, href: "#homePageSection" },
  { label: "About", icon: <PersonIcon />, href: "#aboutMeSection" },
  { label: "Skills", icon: <CodeIcon />, href: "#toolKitSection" },
  { label: "Experience", icon: <StackIcon />, href: "#experienceSection" },
  { label: "Projects", icon: <RocketIcon />, href: "#projectsSection" },
  { label: "GitHub", icon: <GitHubLogoIcon />, href: "#initiativeSection" },
  { label: "Blogs", icon: <ReaderIcon />, href: "#mediumArticles" },
  { label: "Contact", icon: <EnvelopeOpenIcon />, href: "#contactSection" },
];

export const VerticalSideMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("homePageSection");
  const { scrollYProgress } = useScroll();

  const handleScroll = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    event.stopPropagation();

    const el = document.querySelector(id);
    if (el) {
      // Delay ensures layout is fully stable before scrolling
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  };

  // Create refs for each section
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Set up IntersectionObservers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        }
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        sectionRefs.current[item.href] = section as HTMLElement;
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const topMobileItems = menuItems.slice(0, 5);
  const bottomMobileItems = menuItems.slice(5);

  return (
    <>
      <aside
        tabIndex={0}
        className={`fixed top-1/2 left-0 -translate-y-1/2 h-auto ${
          isExpanded ? "w-32" : "w-15"
        } bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg flex-col items-center py-6 z-50 hidden sm:flex transition-all duration-300 rounded-br-3xl rounded-tr-3xl`}
      >
        {/* Scroll Indicator */}
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="absolute right-0 top-4 w-1 rounded-full bg-blue-500 dark:bg-blue-400 h-[94%]"
        />

        {/* Avatar */}
        <div
          className="mb-4 cursor-pointer w-full flex justify-around"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <img
            src="assets/react.svg"
            alt="Avatar"
            className="w-12 h-11 p-1 object-cover self-center"
          />
        </div>
        <hr className="w-3/4 border-t border-gray-300 dark:border-gray-700" />

        {/* Desktop Menu */}
        <nav className="flex flex-col gap-4 w-full px-2 my-4">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={(event) => handleScroll(event, item.href)}
              >
                <span className="text-xl">{item.icon}</span>
                {isExpanded && <span>{item.label}</span>}
              </a>
            );
          })}
        </nav>

        <hr className="w-3/4 border-t border-gray-300 dark:border-gray-700" />
        <div className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-2xl flex w-full m-3">
          <ThemeToggle onlyIcon={!isExpanded} />
        </div>
      </aside>

      {/* Mobile Top Menu */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 flex sm:hidden justify-around py-2 border-b border-gray-200 dark:border-gray-700">
        {topMobileItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(event) => handleScroll(event, item.href)}
            className={`flex flex-col items-center text-sm transition ${
              activeSection === item.href.replace("#", "")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile Bottom Menu */}
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 flex sm:hidden justify-around py-2 border-t border-gray-200 dark:border-gray-700">
        {bottomMobileItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(event) => handleScroll(event, item.href)}
            className={`flex flex-col items-center text-sm transition ${
              activeSection === item.href.replace("#", "")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </a>
        ))}
        <ThemeToggle onlyIcon />
      </nav>
    </>
  );
};
