"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
}) => {
  const carouselRef = React.useRef(null);

  return (
    
      <div className="relative h-fit w-full">
        <div
          className="flex h-fit w-[100vw] overflow-x-scroll overscroll-x-auto py-5 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}>
          <div
            className={cn(
              "flex flex-row justify-start gap-4",
            )}>
            {items.map((item, index) => (
              <div
                key={"card" + index}
                className="rounded-3xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 h-fit z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full overflow-auto inset-0" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={containerRef}
                layoutId={layout ? `card-${card.title}` : undefined}
                className="bg-white h-fit z-[999] p-4 rounded-2xl font-sans relative backdrop-blur-sm">
                <button
                  className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                  onClick={handleClose}>
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-xl font-semibold text-neutral-700 mt-2 dark:text-white">
                  {card.title}
                </motion.p>
                <div className="py-4">{card.content}</div>
              </motion.div>
        </div>
      )}
    </AnimatePresence>
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={handleOpen}
      className="rounded-2xl bg-reseda_green-500 h-[18rem]  w-fit overflow-hidden flex flex-col items-start justify-start relative z-10">
      <div
        className="absolute h-fit top-0 inset-x-0 bg-gradient-to-b via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-4">
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="text-white text-lg font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
          {card.title}
        </motion.p>
      </div>
    </motion.button>
  </>);
};

