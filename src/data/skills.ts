import Ruby from "../assets/icons/ruby.svg?react";
import RubyonRails from "../assets/icons/rubyonrails.svg?react";


import awsIcon from "../assets/icons/aws.svg?react";
import dockerIcon from "../assets/icons/docker.svg?react";
import mysqlIcon from "../assets/icons/mysql-svgrepo-com.svg?react";
import postgresqlIcon from "../assets/icons/postgresql-logo-svgrepo-com.svg?react";

import sqlIcon from "../assets/icons/sql-database-generic-svgrepo-com.svg?react";
import redisIcon from "../assets/icons/redis.svg?react";

import typescriptIcon from "../assets/icons/typescript.svg?react";
import angularIcon from "../assets/icons/angular.svg?react";
import reactIcon from "../assets/icons/react.svg?react";
import javascriptIcon from "../assets/icons/javascript.svg?react";
import css3Icon from "../assets/icons/css3.svg?react";
import html5Icon from "../assets/icons/html5.svg?react";
import sassIcon from "../assets/icons/sass-avatar.svg?react";

import githubIcon from "../assets/icons/github.svg?react";

import nextjsIcon from "../assets/icons/nextjs.svg?react";
import type { ComponentType, SVGProps } from "react";

export const userSkills: SkillCategory = {
  Backend: [
    { name: "Ruby on Rails", icon: RubyonRails, level: 9 },
    { name: "Sinatra", icon: Ruby, level: 7 },
    { name: "Ruby", icon: Ruby, level: 9 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: awsIcon, level: 7 },
    { name: "Docker", icon: dockerIcon, level: 3 },
    { name: "GitHub", icon: githubIcon, level: 5 },
  ],
  Databases: [
    { name: "SQL", icon: sqlIcon, level: 7 },
    { name: "PostgreSql", icon: postgresqlIcon, level: 5 },
    { name: "MySql", icon: mysqlIcon, level: 7 },
    { name: "Redis", icon: redisIcon, level: 7 },
  ],
  Frontend: [
    { name: "Angular", icon: angularIcon, level: 5 },
    { name: "React", icon: reactIcon, level: 5 },
    { name: "Javascript", icon: javascriptIcon, level: 8 },
    { name: "Typescript", icon: typescriptIcon, level: 8 },
    { name: "Saas", icon: sassIcon, level: 7 },
    { name: "CSS 3", icon: css3Icon, level: 7 },
    { name: "HTML 5", icon: html5Icon, level: 7 },
  ],
};
export type SkillItem = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; // SVG React component
  level: number; // typically from 1 to 10
};

export type SkillCategory = {
  [category: string]: SkillItem[];
};
