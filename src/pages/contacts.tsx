import { motion } from "framer-motion";
import { ContactRow } from "../components/contact";
import type { ContactSectionContent } from "../data/contactData";
import { H2Heading } from "../components/UI/Headings";

type contactProps = {
  contactData: ContactSectionContent;
};
export const Contact: React.FC<contactProps> = ({ contactData }) => (
  <motion.section
    id="contactSection"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="px-4 py-20 scroll-mt-12"
  >
    <div className="max-w-5xl mx-auto text-center">
      <H2Heading className="text-4xl font-bold text-zinc-900 dark:text-white mb-3 text-center md:text-center">
        {contactData.heading}
      </H2Heading>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-12">
        {contactData.subheading}
      </p>

      <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-10 sm:gap-16 text-left">
        {contactData.contactMethods.map((contact, index) => (
          <ContactRow key={index} contactData={contact} />
        ))}
      </div>

      <div className="mt-16 text-sm text-zinc-500 dark:text-zinc-400">
        {contactData.signature}{" "}
        <span className="font-semibold text-zinc-700 dark:text-zinc-200">
          {contactData.authorName}
        </span>
      </div>
    </div>
  </motion.section>
);
