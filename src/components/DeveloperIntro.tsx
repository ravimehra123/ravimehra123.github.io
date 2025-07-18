import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { TypingList } from "./TypingList";
import { DownloadIcon } from "@radix-ui/react-icons";
import type { DeveloperIntroProps } from "../data/developerInfo";
import { H1Heading } from "./UI/Headings";

export const DeveloperIntro: React.FC<DeveloperIntroProps> = ({
  className,
  developer,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center sm:px-6 rounded-lg drop-shadow-[0_0_6px_3px_rgba(0,0,0,0.3)] w-full max-h-fit bg-[hsl(var(--background))] sm:min-w-1/2 ${className}`}
    >
      {/* Avatar */}
      <Avatar.Root className="w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-primary/50 dark:ring-primary/60 shadow-xl overflow-hidden hover:scale-105 hover:brightness-110 transition-transform duration-300">
        <Avatar.Image
          src={developer.avatar.src}
          alt={developer.avatar.alt}
          className="w-full h-full object-cover"
        />
        <Avatar.Fallback
          delayMs={400}
          className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground font-semibold text-3xl uppercase"
        >
          {developer.avatar.fallback}
        </Avatar.Fallback>
      </Avatar.Root>

      {/* Name */}
      <H1Heading className="text-2xl sm:text-5xl font-bold text-foreground dark:text-foreground mt-4">
        {developer.name}
      </H1Heading>

      {/* Title */}
      <p className="text-base sm:text-base sm:text-lg mt-3 font-medium text-muted-foreground dark:text-muted-foreground">
        {developer.title}
      </p>

      {/* Typing Highlights */}
      <TypingList
        className="mt-10 min-h-[13rem] 2xl:min-h-[30rem] w-full p-5"
        items={developer.typingItems}
        keepPrevious={true}
        typingSpeed={30}
        pauseBetweenItems={100}
      />

      {/* Resume Button */}
      <div className="flex gap-4 mt-6">
        <a
          href={developer.resume.url}
          download
          className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-blue-600 dark:border-amber-200 text-blue-600 dark:text-amber-200 font-semibold overflow-hidden group hover:bg-blue-600 dark:hover:bg-amber-200 hover:text-white dark:hover:text-black transition duration-300 ease-in-out"
        >
          <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-blue-600 dark:bg-amber-200 transition-transform duration-300 ease-in-out z-0" />
          <DownloadIcon className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{developer.resume.label}</span>
        </a>
      </div>
    </div>
  );
};
