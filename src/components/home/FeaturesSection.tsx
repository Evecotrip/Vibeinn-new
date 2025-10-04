import React from "react";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import {
  BookOpen,
  Users,
  Target,
  Cloud,
  Lock,
  Zap,
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <Section id="features">
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          Why Choose Vibeinn Techverse?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our SaaS solutions are designed to help businesses scale efficiently with enterprise-grade features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <FeatureCard
            title="Learning Management System"
            description="Comprehensive LMS for training, courses, certifications, and employee development programs."
            icon={<BookOpen className="w-6 h-6 text-white" />}
            gradient="bg-gradient-primary dark:bg-gradient-to-br dark:from-blue-700 dark:to-blue-900"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <FeatureCard
            title="HR Management System"
            description="Complete HRMS to manage employees, payroll, attendance, leave, and performance reviews."
            icon={<Users className="w-6 h-6 text-white" />}
            gradient="bg-gradient-secondary dark:bg-gradient-to-br dark:from-blue-600 dark:to-cyan-700"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <FeatureCard
            title="Customer Relationship Management"
            description="Powerful CRM to track leads, manage sales pipelines, and build lasting customer relationships."
            icon={<Target className="w-6 h-6 text-white" />}
            gradient="bg-gradient-accent dark:bg-gradient-to-br dark:from-blue-600 dark:to-indigo-800"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <FeatureCard
            title="Cloud Infrastructure"
            description="Reliable cloud hosting with 99.9% uptime, automatic backups, and global CDN."
            icon={<Cloud className="w-6 h-6 text-white" />}
            gradient="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <FeatureCard
            title="Enterprise Security"
            description="Bank-level encryption, SOC 2 compliance, and advanced security protocols to protect your data."
            icon={<Lock className="w-6 h-6 text-white" />}
            gradient="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <FeatureCard
            title="Seamless Integration"
            description="Easy integration with your existing tools via REST APIs, webhooks, and native connectors."
            icon={<Zap className="w-6 h-6 text-white" />}
            gradient="bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-700 dark:to-red-700"
          />
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;
