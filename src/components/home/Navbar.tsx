import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[95%] max-w-4xl",
        "transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border border-gray-200/20 dark:border-gray-700/20"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md",
        isOpen ? "rounded-2xl" : "rounded-full"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-r from-[#0066FF] to-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VT</span>
          </div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">
            Vibeinn Techverse
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-1"
            >
              Products
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isProductsOpen && "rotate-180")} />
            </button>
            {isProductsOpen && (
              <div className="absolute top-full left-0 pt-2 w-48 z-[100]">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="/products/lms"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors"
                >
                  LMS
                </a>
                <a
                  href="/products/hrms"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors"
                >
                  HRMS
                </a>
                <a
                  href="/products/crm"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors"
                >
                  CRM
                </a>
              </div>
              </div>
            )}
          </div>
          <a
            href="/services"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Portfolio
          </a>
          <a
            href="/help-center"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Help
          </a>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white border-none rounded-full px-6"
          >
            Get Started
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
          <div className="flex flex-col space-y-3">
            <div>
              <div className="text-gray-700 dark:text-gray-300 font-medium py-2">
                Products
              </div>
              <div className="pl-4 flex flex-col space-y-2">
                <a
                  href="/products/lms"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors py-1"
                >
                  LMS
                </a>
                <a
                  href="/products/hrms"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors py-1"
                >
                  HRMS
                </a>
                <a
                  href="/products/crm"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors py-1"
                >
                  CRM
                </a>
              </div>
            </div>
            <a
              href="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Services
            </a>
            <a
              href="/portfolio"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Portfolio
            </a>
            <a
              href="/help-center"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Help
            </a>
            <Button
              variant="default"
              size="sm"
              className="mt-3 bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white border-none rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
