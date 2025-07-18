import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { H2Heading, H3Heading } from "./UI/Headings";
import { motion } from "framer-motion";
import type { AboutMeProps } from "../data/userInfo";

export const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  return (
    <motion.section
      id="aboutMeSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="sm:px-8 scroll-mt-12 w-full"
    >
      <H2Heading>About Me:</H2Heading>
      <div className="flex flex-wrap justify-around w-full">
        <div className="max-w-7xl self-center">
          {user.summary?.map((para, i) => (
            <p key={i} className="my-6 text-justify text-base sm:text-lg">
              {para}
              {i === 2 && (
                <>
                  {" "}
                  You can explore them&nbsp;
                  <a
                    href={user.github.url}
                    className="text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    {user.github.label} <GitHubLogoIcon />
                  </a>
                </>
              )}
            </p>
          ))}

          {user.highlights && (
            <div className="text-base sm:text-lg mb-2">
              <span>Here’s what I bring to the table:</span>
            </div>
          )}
          <ul className="text-base sm:text-lg pl-5 sm:pl-10">
            {user.highlights?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {user.contactAppeal && (
            <p className="text-justify my-6 text-base sm:text-lg">
              {user.contactAppeal}
            </p>
          )}

          <p className="mt-6 mb-0 py-[8px] text-base sm:text-lg">
            For more details on this part of my experience,&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.resumeLink}
              className="text-blue-400 hover:underline"
            >
              see my CV.
            </a>
          </p>

          <div className="flex gap-5 mt-1 items-center text-base sm:text-lg">
            {user.contact?.email && (
              <div
                itemScope
                itemType="https://schema.org/email"
                className="inline-block"
              >
                <a
                  itemProp="email"
                  href={`mailto:${user.contact.email}`}
                  className="inline-flex items-center gap-2"
                >
                  <EnvelopeClosedIcon />
                  <span>{user.contact.email}</span>
                </a>
              </div>
            )}

            {user.contact.phone && (
              <div
                itemScope
                itemType="https://schema.org/telephone"
                className="inline-block"
              >
                <a
                  itemProp="telephone"
                  href={`tel:${user.contact.phone}`}
                  className="inline-flex items-center gap-2"
                >
                  <MobileIcon />
                  <span>{user.contact.phone}</span>
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-8 text-darksalmon max-w-fit border-b border-current pb-1 mt-8">
            <H3Heading className="font-medium text-xl align-middle">Hobbies:</H3Heading>
            <div className="flex flex-wrap gap-7">
              <svg
                className="w-[2rem] text-amber-800 dark:text-amber-500"
                role="img"
                data-icon="biking"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <title id="svg-inline--fa-title-UZtUAd7xlGdf">Cycling</title>
                <path
                  fill="currentColor"
                  d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"
                ></path>
              </svg>
              <svg
                className="w-[2rem] text-amber-800 dark:text-amber-500"
                role="img"
                data-icon="dumbbell"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <title id="svg-inline--fa-title-4YCHxRUKBYkS">Gym</title>
                <path
                  fill="currentColor"
                  d="M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"
                ></path>
              </svg>
              <svg
                className="w-[2rem] text-amber-800 dark:text-amber-500"
                role="img"
                style={{ width: "15px" }}
                data-icon="suitcase-rolling"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <title id="svg-inline--fa-title-AY8qcb4od0Pt">Travel</title>
                <path
                  fill="currentColor"
                  d="M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z"
                ></path>
              </svg>
              <svg
                className="w-[2rem] text-amber-800 dark:text-amber-500"
                role="img"
                style={{ width: "15px" }}
                data-icon="book"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <title id="svg-inline--fa-title-rIYwWfRtYSDn">Read</title>
                <path
                  fill="currentColor"
                  d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                ></path>
              </svg>
              <svg
                className="w-[2rem] text-amber-800 dark:text-amber-500"
                width="13"
                height="13"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "26px", height: "29px" }}
                data-icon="Coding"
              >
                <title>Coding</title>
                <path
                  d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>

              <svg
                className="w-[2rem] text-amber-800 dark:text-amber-500"
                fill="#e9967a"
                height="15px"
                style={{ width: "26px", height: "29px" }}
                width="15px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 297.00 297.00"
                stroke="#e9967a"
                transform="matrix(1, 0, 0, 1, 0, 0)"
                strokeWidth="0.00297"
              >
                <title>Meditation</title>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.5940000000000001"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M148.5,102.433c26.485,0,48.861-23.244,48.861-50.758c0-26.335-21.463-46.965-48.861-46.965S99.639,25.34,99.639,51.675 C99.639,79.189,122.015,102.433,148.5,102.433z M148.5,23.872c16.932,0,29.7,11.953,29.7,27.803 c0,16.832-13.879,31.597-29.7,31.597s-29.7-14.765-29.7-31.597C118.8,35.825,131.568,23.872,148.5,23.872z"></path>{" "}
                    <path d="M258.471,292.29c21.245,0,38.529-17.285,38.529-38.53c0-8.813-3.577-16.887-8.459-24.073 c-8.187-12.05-45.416-78.962-64.361-99.691c-16.204-17.729-54.01-25.703-75.68-25.703s-59.476,7.974-75.68,25.703 c-18.945,20.729-56.174,87.641-64.361,99.691C3.577,236.872,0,244.946,0,253.759c0,21.246,17.285,38.53,38.529,38.53H258.471z M210.035,142.921c11.928,13.051,33.381,47.863,47.895,72.316c-1.41,0.02-2.824,0.114-4.238,0.29l-25.307,3.163l-26.447-47.963 c-1.794-3.253-5.564-4.878-9.161-3.954c-3.598,0.926-6.113,4.171-6.113,7.886v49.246l-18.475,2.309l-57.85-4.954v-4.369 l84.865-83.546C201.434,136.064,206.706,139.279,210.035,142.921z M210.984,220.866l-8.035,1.004v-15.576L210.984,220.866z M94.05,219.866l-7.146-0.612l7.146-12.96V219.866z M86.965,142.921c11.024-12.062,43.27-19.468,61.535-19.468 c8.626,0,20.37,1.654,31.525,4.668l-69.687,68.604V174.66c0-3.715-2.515-6.96-6.113-7.886c-3.599-0.923-7.368,0.702-9.161,3.954 l-25.919,47.005l-26.035-2.23c-1.347-0.161-2.695-0.25-4.038-0.269C53.583,190.784,75.033,155.976,86.965,142.921z M23.908,241.355 c3.109-3.651,11.279-7.072,15.967-6.872c31.868,1.359,127.124,10.862,127.124,10.862l6.081,27.783H38.529 c-10.68,0-19.368-8.689-19.368-19.369C19.161,250.027,21.58,244.09,23.908,241.355z M273.103,241.373 c2.316,2.726,4.736,8.669,4.736,12.386c0,10.68-8.688,19.369-19.368,19.369h-65.777l-6.532-29.849l69.906-8.738 C261.655,233.844,269.454,237.079,273.103,241.373z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
