import { ReaderIcon } from "@radix-ui/react-icons";
import { MediumArticle } from "../components/MediumArticle";
import { H2Heading } from "../components/UI/Headings";
import { motion } from "framer-motion";
import type { ArticleData } from "../data/articles";

export type MediumArticleProp = {
  articlesData: ArticleData;
};
export const MediumArticles: React.FC<MediumArticleProp> = ({
  articlesData,
}) => (
  <section
    id="mediumArticles"
    className="px-4 sm:px-8 md:px-16 py-12 bg-background text-foreground scroll-mt-5"
  >
    <div className="mx-auto space-y-12 mb-12">
      {/* Section Heading */}
      <div className="space-y-2">
        <H2Heading>
          <ReaderIcon className="text-primary inline-block mr-3 h-12 w-12" />
          Medium Articles
        </H2Heading>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {articlesData.initialMessage}
        </p>
      </div>
    </div>
    <ul className="space-y-10">
      {articlesData.articles.map((article, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
        >
          <MediumArticle article={article} />
        </motion.li>
      ))}
    </ul>
  </section>
);
