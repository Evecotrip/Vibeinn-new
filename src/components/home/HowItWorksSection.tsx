import React from "react";
import Section from "@/components/Section";

const HowItWorksSection = () => {
  return (
    <Section
      id="how-it-works"
      bgClass="bg-white"
      darkBgClass="bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          How Vibeinn Techverse Works
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get started in just a few simple steps and transform your business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div
          className="flex flex-col items-center text-center animate-on-scroll opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">
            Choose Your Solution
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Select from our LMS, HRMS, or CRM solutions based on your business needs. Mix and match for complete coverage.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center animate-on-scroll opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">
            Quick Setup & Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our team helps you set up and integrate with your existing systems. Get up and running in days, not months.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center animate-on-scroll opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">
            Scale & Grow
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Watch your business thrive with streamlined operations, automated workflows, and data-driven insights.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
