import React, { useState, useEffect } from "react";

interface TypingListProps {
  items: string[];
  typingSpeed?: number; // ms per char
  pauseBetweenItems?: number; // ms pause after full item typed
  keepPrevious?: boolean; // keep old items visible or erase
  className?: string;
}

export const TypingList: React.FC<TypingListProps> = ({
  items,
  className,
  typingSpeed = 100,
  pauseBetweenItems = 1500,
  keepPrevious = false,
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // currently typing text
  const [completedItems, setCompletedItems] = useState<string[]>([]); // previous fully typed items
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer: number = 0;
    if (!items?.length) {
      return;
    }

    if (typing) {
      const currentItem =
        currentItemIndex < items.length ? items[currentItemIndex] : undefined;
      if (currentItem && displayedText.length < currentItem.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentItem.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing current item
        timer = setTimeout(() => {
          setTyping(false);
        }, pauseBetweenItems);
      }
    } else {
      if (items && currentItemIndex === items.length && timer != 0) {
        clearTimeout(timer);
        return;
      }

      // Typing finished, prepare for next item
      timer = setTimeout(() => {
        if (items && currentItemIndex === items.length && timer != 0) {
          clearTimeout(timer);
          return;
        }

        if (keepPrevious) {
          setCompletedItems((prev) => [...prev, items[currentItemIndex]]);
        }
        setDisplayedText("");
        setCurrentItemIndex((prev) => prev + 1);
        setTyping(true);
      }, 100); // small pause before next item
    }

    return () => clearTimeout(timer);
  }, [
    typing,
    displayedText,
    currentItemIndex,
    items,
    typingSpeed,
    pauseBetweenItems,
    keepPrevious,
  ]);

  return (
    <div style={{ whiteSpace: "pre-line" }} className={className}>
      {keepPrevious && completedItems.length > 0 && (
        <ul className="list-none">
          {completedItems.map((item, i) => (
            <li key={i} className="py-3 text-base sm:text-lg text-justify">
              {item}
            </li>
          ))}
        </ul>
      )}
      {displayedText && (
        <div className="text-left text-base sm:text-lg">{displayedText}</div>
      )}
    </div>
  );
};
