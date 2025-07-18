import { motion } from "framer-motion";
import { GitCards } from "../components/GitHubProjects";
import { H2Heading } from "../components/UI/Headings";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import type { GitCardProp } from "../data/githubProjects";

type GithubProjectsProps = {
  gitProjects: GitCardProp[];
};

export const Initiatives: React.FC<GithubProjectsProps> = ({ gitProjects }) => (
  <motion.section
    id="initiativeSection"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="my-12 scroll-mt-12"
  >
    <H2Heading>
      <GitHubLogoIcon className="w-12 h-12 inline-block mr-3" /> Open Source
      Projects
    </H2Heading>
    <ul className="flex flex-wrap justify-evenly gap-y-7 gap-x-[5vw] list-none">
      {gitProjects.map((card, index) => (
        <GitCards key={index} {...card} />
      ))}
    </ul>
  </motion.section>
);
