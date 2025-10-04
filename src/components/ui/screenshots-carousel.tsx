import React, { useRef } from "react";
import { useMotionValue, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ScreenshotsCarousel = ({ screenshots }) => {
  const carouselRef = useRef(null);
  const x = useMotionValue(0);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mt-6">
      <div
        className="flex overflow-x-auto py-6 scrollbar-hide gap-6 px-1 snap-x"
        ref={carouselRef}
      >
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.id}
            className="flex-shrink-0 snap-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="bg-black rounded-3xl p-3">
                <div className="h-6 rounded-t-xl bg-black flex justify-center">
                  <div className="w-20 h-4 bg-black rounded-b-xl mx-auto"></div>
                </div>
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="rounded-xl w-48 md:w-60 aspect-[9/19] object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-slate-600 dark:text-slate-400">
              {screenshot.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => scrollCarousel("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all"
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={() => scrollCarousel("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all"
        aria-label="Next screenshot"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === 0 ? "bg-primary w-4" : "bg-slate-300 dark:bg-slate-700"
            )}
            onClick={() => {
              if (carouselRef.current) {
                const itemWidth =
                  carouselRef.current.scrollWidth / screenshots.length;
                carouselRef.current.scrollTo({
                  left: itemWidth * index,
                  behavior: "smooth",
                });
              }
            }}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotsCarousel;
