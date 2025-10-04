import React from "react";
import Section from "@/components/Section";
import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react";

const RewardsSection = () => {
  return (
    <Section id="benefits" bgClass="bg-slate-50" darkBgClass="bg-slate-900">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
        <div className="md:w-1/2 animate-on-scroll opacity-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-10 rounded-full"></div>

            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Enterprise Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  99.9% uptime SLA with 24/7 monitoring and support
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  Unlimited users and storage with scalable infrastructure
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  Advanced analytics and custom reporting dashboards
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  White-label options and custom branding capabilities
                </span>
              </li>
            </ul>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
              What makes us different:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-2 items-center">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="dark:text-gray-300">Enterprise security</span>
              </div>
              <div className="flex gap-2 items-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="dark:text-gray-300">Easy scalability</span>
              </div>
              <div className="flex gap-2 items-center">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="dark:text-gray-300">Dedicated support</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="dark:text-gray-300">Regular updates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight dark:text-white">
            Built for{" "}
            <span className="text-primary dark:text-blue-400">
              Modern Enterprises
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Vibeinn Techverse provides enterprise-grade SaaS solutions that scale with your business. Our platforms are trusted by companies worldwide to streamline operations and drive growth.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From startups to Fortune 500 companies, our solutions adapt to your needs with flexible pricing, robust features, and unparalleled support.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default RewardsSection;
