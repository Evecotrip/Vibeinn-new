import React, { useState, useEffect } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const HeroSection = () => {
  const words = ["Partner's", "Employee's", "Customer's"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
          setTypingSpeed(100);
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  const products = [
    {
      name: "Learning Management System",
      description: "AI-powered, mobile-ready, SaaS Learning Management System for Enterprises",
      highlight: "LMS",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      name: "Human Resource Management",
      description: "Complete HR solution with payroll, attendance, and performance management",
      highlight: "HRMS",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      name: "Customer Relationship Management",
      description: "Powerful CRM with sales pipeline, lead tracking, and analytics",
      highlight: "CRM",
      color: "text-green-600 dark:text-green-400"
    }
  ];

  return (
    <Section
      bgClass="bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-indigo-50/50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="pt-20 md:pt-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:w-3/5 space-y-8 animate-on-scroll opacity-0">
            {/* Customer Badge */}
            <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 rounded-full px-4 py-2 shadow-md border border-blue-100 dark:border-gray-700">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0066FF] to-[#5B9BFF] border-2 border-white dark:border-slate-800"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#277FFE] to-[#33C3F0] border-2 border-white dark:border-slate-800"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#33C3F0] to-[#5B9BFF] border-2 border-white dark:border-slate-800"></div>
              </div>
              <span className="text-sm font-bold text-slate-800 dark:text-gray-300">
                HAPPY CUSTOMERS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-slate-900 dark:text-white">Empower</span>
              <br className="md:hidden" />
              <span className="text-slate-900 dark:text-white hidden md:inline"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#0066FF] dark:from-purple-400 dark:to-blue-400">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">Growth Through Smart</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#6C47FF] dark:from-pink-400 dark:to-purple-400">
                AI-powered Learning Ecosystem
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium">
              for Skilling, Engagement, Impact
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#6C47FF] to-[#0066FF] hover:from-[#5B3ACC] hover:to-[#0052CC] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = '/contact'}
              >
                Book A Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Products Card */}
          <div className="lg:w-2/5 animate-on-scroll opacity-0 relative">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-slate-800 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Our Products:
              </h3>
              
              <div className="space-y-4">
                {products.map((product, index) => (
                  <a
                    key={index}
                    href={`/products/${product.highlight.toLowerCase()}`}
                    className="group block p-4 rounded-xl hover:bg-blue-50/80 dark:hover:bg-slate-700 transition-all cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-gray-600 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">
                            {index === 0 && "📚"}
                            {index === 1 && "👥"}
                            {index === 2 && "📊"}
                          </span>
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            {product.name.split(' ').slice(0, 2).join(' ')}
                          </h4>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                          {product.description.split(',')[0]}
                          <span className={`font-semibold ${product.color}`}>
                            {' '}{product.highlight}
                          </span>
                          {' '}{product.description.split(',').slice(1).join(',')}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 -z-10 w-72 h-72 bg-gradient-to-r from-purple-200/40 to-blue-200/40 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 -z-10 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
