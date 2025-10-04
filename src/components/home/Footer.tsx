import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/6dfb1f13-34bd-4a33-99d7-e39bf0950e95.png"
                alt="Vibeinn Techverse Logo"
                className="h-8"
              />
              <span className="font-bold text-xl text-primary dark:text-white">
                Vibeinn Techverse
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Enterprise SaaS solutions for modern businesses. LMS, HRMS, and CRM platforms to streamline your operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products/lms"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    LMS
                  </a>
                </li>
                <li>
                  <a
                    href="/products/hrms"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    HRMS
                  </a>
                </li>
                <li>
                  <a
                    href="/products/crm"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    CRM
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/help-center"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie-policy"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Vibeinn Techverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
