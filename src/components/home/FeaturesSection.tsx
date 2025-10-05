import React from "react";
import Section from "@/components/Section";
import {
  BookOpen,
  Users,
  Target,
  Cloud,
  Lock,
  Zap,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learning Management System",
      description: "Comprehensive LMS for training, courses, certifications, and employee development programs.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900/40"
    },
    {
      icon: Users,
      title: "HR Management System",
      description: "Complete HRMS to manage employees, payroll, attendance, leave, and performance reviews.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-100 dark:bg-purple-900/40"
    },
    {
      icon: Target,
      title: "Customer Relationship Management",
      description: "Powerful CRM to track leads, manage sales pipelines, and build lasting customer relationships.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconBg: "bg-green-100 dark:bg-green-900/40"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable cloud hosting with 99.9% uptime, automatic backups, and global CDN.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and advanced security protocols to protect your data.",
      color: "from-rose-500 to-orange-500",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      iconBg: "bg-rose-100 dark:bg-rose-900/40"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Easy integration with your existing tools via REST APIs, webhooks, and native connectors.",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      iconBg: "bg-amber-100 dark:bg-amber-900/40"
    }
  ];

  return (
    <Section id="features" bgClass="bg-gray-50 dark:bg-slate-900">
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Why Choose Vibeinn Techverse?
        </h2>
        <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Our solutions are designed to help businesses scale efficiently with enterprise-grade features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative p-8 rounded-2xl ${feature.bgColor} border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl h-full`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-r ${feature.color} p-0.5 rounded-lg`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0066FF] group-hover:to-[#33C3F0] transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FeaturesSection;
