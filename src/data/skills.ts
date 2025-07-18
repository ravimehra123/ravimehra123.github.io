import CSharpIcon from "../assets/icons/c-sharp-logo.svg?react";
import DotNetIcon from "../assets/icons/dotnet-core.svg?react";
import GrpcIcon from "../assets/icons/grpc.svg?react";
import rabbitMQIcon from "../assets/icons/rabbitmq.svg?react";
import nodeJsIcon from "../assets/icons/nodejs.svg?react";

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
import gdprIcon from "../assets/icons/gdpr.svg?react";
import accessibilityIcon from "../assets/icons/accessibility.svg?react";
import githubIcon from "../assets/icons/github.svg?react";
import springBootIcon from "../assets/icons/spring-boot.svg?react";
import nextjsIcon from "../assets/icons/nextjs.svg?react";
import type { ComponentType, SVGProps } from "react";

export const userSkills: SkillCategory = {
  Backend: [
    { name: ".NET Core", icon: DotNetIcon, level: 9 },
    { name: "C#", icon: CSharpIcon, level: 9 },
    { name: "Node-JS", icon: nodeJsIcon, level: 7 },
    { name: "Spring Boot", icon: springBootIcon, level: 3 },
    { name: "Next-JS", icon: nextjsIcon, level: 3 },
    { name: "GRPC", icon: GrpcIcon, level: 4 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: awsIcon, level: 7 },
    { name: "Docker", icon: dockerIcon, level: 3 },
    { name: "GitHub", icon: githubIcon, level: 5 },
    { name: "RabbitMQ", icon: rabbitMQIcon, level: 5 },
  ],
  Databases: [
    { name: "SQL", icon: sqlIcon, level: 7 },
    { name: "PostgreSql", icon: postgresqlIcon, level: 5 },
    { name: "MySql", icon: mysqlIcon, level: 5 },
    { name: "Redis", icon: redisIcon, level: 7 },
  ],
  Frontend: [
    { name: "Angular", icon: angularIcon, level: 9 },
    { name: "React", icon: reactIcon, level: 5 },
    { name: "Javascript", icon: javascriptIcon, level: 8 },
    { name: "Typescript", icon: typescriptIcon, level: 9 },
    { name: "Saas", icon: sassIcon, level: 7 },
    { name: "CSS 3", icon: css3Icon, level: 7 },
    { name: "HTML 5", icon: html5Icon, level: 7 },
  ],
  Other: [
    {
      name: "Accessibility",
      icon: accessibilityIcon,
      level: 7,
    },
    { name: "GDPR", icon: gdprIcon, level: 5 },
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
