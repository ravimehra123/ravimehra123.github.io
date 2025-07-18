import { motion } from "framer-motion";
import { H2Heading } from "../components/UI/Headings";
import type { Project } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export type userProjects = {
  projects: Project[];
};

export const Projects: React.FC<userProjects> = ({ projects }) => {
  return (
    <motion.section
      id="projectsSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-12 scroll-mt-12"
    >
      <H2Heading>Projects:</H2Heading>
      <div className="flex justify-evenly flex-wrap gap-x-12 gap-y-20">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </motion.section>
  );
};
