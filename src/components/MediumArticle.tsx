import { CalendarIcon, Link2Icon } from "@radix-ui/react-icons";
import { H3Heading } from "./UI/Headings";

interface MediumArticleType {
  title: string;
  link: string;
  pubDate: string;
  tags: string[];
  readingTime: string;
  image?: string;
  excerpt?: string;
}

const formattedDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);

export const MediumArticle = ({ article }: { article: MediumArticleType }) => {
  return (
    <>
      {/* Left: Image */}
      <a
        className="md:col-span-3 w-full h-48 overflow-hidden rounded-lg shadow-sm"
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full object-cover rounded-lg transition duration-300 hover:brightness-110"
        />
      </a>

      {/* Middle: Title, tags, info */}
      <div className="md:col-span-4 flex flex-col gap-4 w-full">
        <H3Heading><a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-primary hover:underline inline-flex items-center gap-1"
        >
          {article.title}
          <Link2Icon className="w-4 h-4 opacity-70" />
        </a></H3Heading>

        <div className="flex flex-wrap gap-2 text-base text-muted-foreground">
          {article.tags.map((tag, i) => (
            <span key={i} className="bg-muted px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <div className="text-base text-muted-foreground flex items-center gap-4 sm:gap-15 mt-1">
          <span>⏱️ {article.readingTime}</span>
          <span className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {formattedDate(new Date(article.pubDate))}
          </span>
        </div>
      </div>

      {/* Right: Excerpt */}
      <div className="md:col-span-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
        {article.excerpt}
      </div>
    </>
  );
};
