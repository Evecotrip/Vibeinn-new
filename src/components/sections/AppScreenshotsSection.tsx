import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AppScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array of screenshot data - desktop screenshots
  const screenshots = [
    {
      id: 1,
      src: "/screenshots/2.png",
      alt: "LMS Dashboard",
      description: "Powerful Learning Management System",
    },
    {
      id: 2,
      src: "/screenshots/3.png",
      alt: "HRMS Interface",
      description: "Complete HR Management Solution",
    },
    {
      id: 3,
      src: "/screenshots/4.png",
      alt: "CRM Platform",
      description: "Customer Relationship Management",
    },
    {
      id: 4,
      src: "/screenshots/5.png",
      alt: "Analytics Dashboard",
      description: "Real-time Analytics & Reports",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Experience Vibeinn Techverse
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See our powerful SaaS platforms in action with intuitive interfaces
            and enterprise-grade features
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="relative aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={screenshots[currentIndex].src}
                    alt={screenshots[currentIndex].alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-semibold">${screenshots[currentIndex].alt}</div>`;
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <motion.div
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-6"
          >
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {screenshots[currentIndex].description}
            </p>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-3 bg-blue-600 dark:bg-blue-400"
                    : "w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                } rounded-full`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshotsSection;
