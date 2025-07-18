import { CubeIcon } from "@radix-ui/react-icons";
import type { GitCardProp } from "../data/githubProjects";
import { H3Heading } from "./UI/Headings";

export const GitCards = (props: GitCardProp) => {
  return (
    <li className="m-3 w-full sm:max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg dark:shadow-md transition-colors">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-2xl transition w-full h-full"
      >
        <H3Heading className="flex text-lg items-center gap-3 border-b border-zinc-300 dark:border-zinc-700 pb-2 font-semibold text-zinc-800 dark:text-zinc-100 sm:text-xl">
          <CubeIcon className="w-6 h-6 text-primary" />
          {props.title}
        </H3Heading>

        <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg mt-4 mb-6 leading-relaxed text-justify">
          {props.description}
        </p>

        <div className="grid grid-cols-[1fr_40px] justify-between items-baseline mb-6 gap-4">
          <ul className="flex flex-wrap items-center gap-3">
            {props.langList.map((lang, index) => (
              <li key={index} className="text-base flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${lang.langClass}`}
                ></span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  {lang.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {props.size}
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 text-base">
          {props.techTags.map((tag, index) => (
            <li
              key={index}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-1 rounded-md"
            >
              #{tag}
            </li>
          ))}
        </ul>
      </a>
    </li>
  );
};
