import { CalendarIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/react-avatar";
import { ExperienceTimer } from "./ExperienceTimer";
import { H2Heading, H3Heading, H4Heading, H5Heading } from "./UI/Headings";
import { motion } from "framer-motion";
import type { userExperience } from "../data/experienceTimeLine";
import { calculateTimer } from "../utilities/calculateTimer";
import { useMemo } from "react";

export const ExperienceTimeline: React.FC<userExperience> = ({
  experiences,
  careerStartDate,
}) => {
  const experienceDuration = useMemo(
    () => calculateTimer(careerStartDate),
    [careerStartDate]
  );
  return (
    <motion.section
      id="experienceSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="sm:px-4 py-12 mt-10 scroll-mt-12 w-full"
    >
      <H2Heading>
        Experience{" "}
        <span className="text-xl italic font-semibold">
          {"( "}
          {`${experienceDuration.years} years${
            experienceDuration.months > 0
              ? ` - ${experienceDuration.months} ${
                  experienceDuration.months > 1 ? "months" : "month"
                }`
              : ""
          }`}
          {" )"}
        </span>
      </H2Heading>

      <div className="relative mb-6 flex flex-col sm:flex-row-reverse items-center sm:items-start">
        <ExperienceTimer careerStartDate={careerStartDate} />
      </div>

      <div className="relative flex justify-around space-y-12">
        <div className="max-w-7xl border-l-2 border-blue-300 dark:border-blue-600 sm:ml-4">
          {experiences
            .map((t) => {
              const timer = calculateTimer(t.joiningDate, t.lastJobDate);
              t.experienceDuration = `${timer.years} Yrs${
                timer.months > 0
                  ? " - " + timer.months + (timer.months > 1 ? " Mos" : " Mo")
                  : ""
              }`;

              return t;
            })
            .map((exp, index) => (
              <div key={index} className="relative sm:pl-8">
                <span className="absolute -left-2 top-12 w-3 h-3 bg-blue-500 rounded-full shadow-md" />

                <div className="rounded-xl dark:hover:bg-[#1b1b1bed] p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  {/* Header: Logo and title */}
                  <div className="grid grid-cols-[50px_1fr] sm:flex sm:flex-row sm:items-center gap-4 mb-3">
                    <Avatar>
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                      />
                    </Avatar>
                    <div className="text-left">
                      <H3Heading className="text-base sm:text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400">
                        {exp.title}
                      </H3Heading>
                      <div className="flex justify-start sm:justify-start text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-1">
                        <CalendarIcon className="mr-1 w-4 h-4" />
                        {exp.date}
                        <span className="ml-3 dark:text-blue-300 text-blue-600">
                          {"("}
                          {exp.experienceDuration}
                          {")"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <H4Heading className="text-sm sm:text-base font-medium text-gray-700 dark:text-amber-100 mb-2 flex items-center">
                    <FigmaLogoIcon className="mr-2" /> {exp.company}
                  </H4Heading>

                  {/* Description */}
                  <div className="text-gray-700 dark:text-gray-100 text-justify text-base sm:text-lg leading-relaxed space-y-2">
                    {exp.description.map((para, i) =>
                      Array.isArray(para) ? (
                        <ul
                          key={i}
                          className="list-disc ml-5 sm:ml-10 space-y-1"
                        >
                          {para.map((li, j) => (
                            <li key={j}>{li}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={i}>{para}</p>
                      )
                    )}
                  </div>

                  <div className="mt-8">
                    <H5Heading className="text-gray-800 mb-2 text-base sm:text-lg font-semibold dark:text-amber-100">
                      My Contribution:
                    </H5Heading>
                    <ul className="ml-5 sm:ml-10 list-disc text-gray-700 dark:text-gray-100 text-justify text-base sm:text-lg leading-relaxed space-y-2">
                      {exp.contribution.map((para, i) => (
                        <li key={i}>{para}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};
