import { DesktopIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { H2Heading, H3Heading } from "./UI/Headings";
import type { SkillCategory } from "../data/skills";

interface ToolkitProps {
  skills: SkillCategory;
}

export const Toolkit: React.FC<ToolkitProps> = ({ skills }) => {
  return (
    <motion.section
      id="toolKitSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full sm:px-8 mt-16 scroll-mt-12"
    >
      <H2Heading>
        <span className="inline-block">My ToolKit</span>
        <DesktopIcon height={25} width={25} className="ml-5 inline-block" />
      </H2Heading>

      <div className="space-y-10 px-4 text-base sm:text-base sm:text-lg font-medium text-neutral-900 dark:text-gray-100">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
          >
            {/* Group Name */}
            <div className="w-36 shrink-0 pt-2 flex gap-1">
              <H3Heading className="text-neutral-700 dark:text-gray-200 text-base sm:text-lg font-semibold">
                {group}
              </H3Heading>
              :
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-4">
              {items.map(({ name, icon: Icon, level }) => (
                <div
                  key={name}
                  className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 rounded-xl py-2 px-2 w-32 sm:w-24 shadow hover:shadow-md transition-shadow"
                >
                  <Icon className="w-10 h-10 text-blue-600 dark:text-white" />

                  <span className="text-sm text-center text-neutral-800 dark:text-gray-100">
                    {name}
                  </span>

                  {/* Level Bar */}
                  <div className="w-full mt-2">
                    <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded">
                      <div
                        className={`h-1.5 rounded transition-all duration-300 ${
                          level > 8
                            ? "bg-gradient-to-r from-amber-400 to-orange-500"
                            : level > 5
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-700"
                            : level > 3
                            ? "bg-gradient-to-r from-teal-400 to-teal-600"
                            : "bg-gradient-to-r from-sky-300 to-sky-500"
                        }`}
                        style={{
                          width: `${level * 10}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-center mt-1 text-gray-500 dark:text-gray-300">
                      {level > 8
                        ? "Expert"
                        : level > 5
                        ? "Advanced"
                        : level > 3
                        ? "Intermediate"
                        : "beginners"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
