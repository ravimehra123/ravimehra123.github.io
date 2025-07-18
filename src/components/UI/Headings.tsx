import { motion } from "framer-motion";
import { cn } from "../../utilities/tailwindSupport";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-4xl sm:text-5xl font-bold mb-6", className)}
    >
      {children}
    </motion.h1>
  );
};

export const H2Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center md:text-left my-10 tracking-tight border-b border-gray-200 dark:border-gray-700 pb-2 ",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export const H3Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-2xl sm:text-3xl font-medium mb-3 ", className)}
    >
      {children}
    </motion.h3>
  );
};

export const H4Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-xl sm:text-2xl font-medium mb-2 ", className)}
    >
      {children}
    </motion.h4>
  );
};

export const H5Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.h5
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-lg sm:text-xl font-medium mb-1 ", className)}
    >
      {children}
    </motion.h5>
  );
};

export const H6Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.h6
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-base sm:text-lg font-medium ", className)}
    >
      {children}
    </motion.h6>
  );
};
