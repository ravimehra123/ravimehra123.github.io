import { motion } from "framer-motion";
import { DeveloperIntro } from "../components/DeveloperIntro";
import { developerInfo } from "../data/developerInfo";

export const HomePage = () => {
  return (
    <motion.section
      id="homePageSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center justify-center sm:px-6 py-12 sm:py-3 w-full scroll-mt-12"
    >
      <div className="w-full grid grid-cols-1 2xl:grid-cols-[60%_40%] gap-10 items-center">
        {/* Left: Developer Intro */}
        <DeveloperIntro developer={developerInfo} className="" />
        {/* Right: Desktop-only Image */}
        <div className="hidden 2xl:block">
          <img
            src="assets/working-dev-10.svg"
            alt="Coding Illustration"
            className="w-full h-full mx-auto"
          />
        </div>
      </div>
    </motion.section>
  );
};
