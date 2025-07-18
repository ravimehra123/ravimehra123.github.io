import React, { useState, useEffect } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Accordion from "@radix-ui/react-accordion";
import { H3Heading, H4Heading } from "./UI/Headings";

interface ProjectCardProps {
  title: string;
  avatarSrc: string;
  avatarAlt: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  features?: string[];
  responsibilities: string[];
  role: string;
  additionalDescription?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  avatarSrc,
  avatarAlt,
  imageSrc,
  description,
  technologies,
  features,
  responsibilities,
  role,
  additionalDescription,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDetails = (isFlip = false) => (
    <div className="mt-2 text-base text-neutral-800 dark:text-neutral-200 p-4">
      {isFlip && (
        <div className="mb-3">
          <H3Heading className="text-2xl">{title}</H3Heading>
          <hr className="w-3/4 border-t border-gray-300 dark:border-gray-700" />
        </div>
      )}
      <p className="mb-2">{additionalDescription}</p>
      {features && (
        <ul className="list-disc list-inside columns-2 gap-x-4 mb-4">
          {features.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      <H4Heading className="text-xl font-semibold mb-2 mt-5">
        My Role:
      </H4Heading>
      <ul className="list-disc list-inside space-y-1">
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`w-full h-auto sm:w-[350px] sm:h-[475px] rounded-2xl shadow-xl bg-white dark:bg-[#1b1b1bed] p-4 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
        !isMobile && flipped ? "[transform:rotateY(180deg)]" : ""
      } relative`}
    >
      {!isMobile && (
        <div
          className="absolute w-full h-full top-0 left-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-2 w-fit absolute -top-5 -left-5">
            <Avatar.Root className="">
              <Avatar.Image
                width={32}
                height={32}
                src={avatarSrc}
                alt={avatarAlt}
                className="object-contain rounded-full shadow-xs dark:shadow-amber-300 shadow-gray-400 bg-white overflow-hidden dark:border-neutral-700"
              />
              <Avatar.Fallback className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-200">
                {avatarAlt.slice(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto min-h-[175px] object-cover rounded-lg mb-4 shadow-2xs border-b dark:border-neutral-700"
          />
          <div className="px-4">
            <H3Heading className="text-xl sm:text-2xl font-bold mb-2 text-neutral-900 dark:text-amber-50">
              {title}
            </H3Heading>
            <p className="text-base text-neutral-700 dark:text-neutral-200 mb-1 min-h-[8rem]">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3 text-sm font-medium text-blue-700 dark:text-blue-400">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 text-base text-neutral-800 dark:text-neutral-200">
              <span className="text-white bg-pink-600 px-1 rounded-sm mr-2">
                Participate as
              </span>
              {role}
            </div>

            <button
              onClick={() => setFlipped(true)}
              className="absolute bottom-4 left-4 text-blue-600 dark:text-blue-400 hover:underline text-base cursor-pointer"
            >
              Show More
            </button>
          </div>
        </div>
      )}

      {!isMobile && (
        <div
          className="absolute w-full h-full top-0 left-0 [transform:rotateY(180deg)] backface-hidden overflow-y-auto"
          style={{ backfaceVisibility: "hidden" }}
        >
          {renderDetails(true)}
          <button
            onClick={() => setFlipped(false)}
            className="absolute bottom-4 left-4 text-blue-600 dark:text-blue-400 hover:underline text-base cursor-pointer"
          >
            Back
          </button>
        </div>
      )}

      {isMobile && (
        <div className="relative">
          <div className="mb-2 w-fit absolute -top-5 -left-5">
            <Avatar.Root className="">
              <Avatar.Image
                width={32}
                height={32}
                src={avatarSrc}
                alt={avatarAlt}
                className="object-contain rounded-full shadow-xs dark:shadow-amber-300 shadow-gray-400 bg-white overflow-hidden dark:border-neutral-700"
              />
              <Avatar.Fallback className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-200">
                {avatarAlt.slice(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>
          </div>

          <img
            src={imageSrc}
            alt={title}
            className="w-full object-cover rounded-lg mb-4 shadow-2xs border-b dark:border-neutral-700"
          />

          <H3Heading className="text-2xl font-bold mb-2 text-neutral-900 dark:text-amber-50">
            {title}
          </H3Heading>

          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 text-base text-neutral-800 dark:text-neutral-200">
            <span className="text-white bg-pink-600 px-1 rounded-sm mr-2">
              Participate as
            </span>
            {role}
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className="mt-4 border-t border-gray-300 dark:border-neutral-700 pt-3"
          >
            <Accordion.Item value="more-info">
              <Accordion.Header>
                <Accordion.Trigger className="text-blue-600 dark:text-blue-400 hover:underline text-base cursor-pointer">
                  Show More
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>{renderDetails()}</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      )}
    </div>
  );
};
