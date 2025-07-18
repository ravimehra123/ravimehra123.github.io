/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createTailwindMerge,
  getDefaultConfig,
  twJoin,
  type ClassNameValue,
} from "tailwind-merge";

const customTwMerge = createTailwindMerge(() => {
  const config = getDefaultConfig() as any;

  config.classGroups["fluid-text"] = [
    {
      text: [
        "fluid-xs",
        "fluid-sm",
        "fluid-base",
        "fluid-lg",
        "fluid-xl",
        "fluid-2xl",
        "fluid-3xl",
        "fluid-4xl",
        "fluid-5xl",
      ],
    },
  ];

  return config;
});

export const cn = (...inputs: ClassNameValue[]) => {
  const joinedInputs = twJoin(inputs);

  return customTwMerge(joinedInputs);
};

export const cntl = (
  template: TemplateStringsArray,
  ...templateElements: any[]
) => {
  const mergeTwClasses = template
    .reduce((result, part, index) => {
      const value = templateElements[index];

      return result + part + (typeof value === "string" ? value : "");
    }, "")
    .trim()
    .replace(/\s{2,}/g, " ");

  return cn(mergeTwClasses);
};
