import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("flex flex-col py-1 mt-4 overflow-auto h-[50vh]", className)}>
      {items.map((item, idx) => (
        <div
          key= {idx}
          className="relative group block p-1 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-asparagus-600 block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 4 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="font-bold text-lg drop-shadow-lg">{item.title}</CardTitle>
            {
              (item.array) ?
                item.array.map((description, index) => (
                  <CardDescription key={index} className={"text-justify drop-shadow-lg"}>{description}</CardDescription>
                ))
              :
              <CardDescription className={"text-justify drop-shadow-lg"}>{item.description}</CardDescription>
            }
          </Card>
        </div>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-xl h-full w-full p-1 overflow-hidden bg-reseda_green-600 border border-transparent relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-1", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-2 text-zinc-100 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};
