import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Clock, 
  DollarSign, 
  FileText, 
  Calendar, 
  TrendingUp,
  CheckCircle,
  UserCheck,
  ClipboardList
} from "lucide-react";

export const metadata = {
  title: "Human Resource Management System (HRMS) | Vibeinn Techverse",
  description:
    "Streamline your HR operations with our comprehensive HRMS. Manage employees, payroll, attendance, and performance in one platform.",
};

export default function HRMSPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employee Management",
      description: "Centralized employee database with complete profile management and documentation."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time & Attendance",
      description: "Automated time tracking, shift scheduling, and attendance management."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Payroll Processing",
      description: "Automated payroll calculation, tax management, and salary disbursement."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Leave Management",
      description: "Streamlined leave requests, approvals, and balance tracking."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Management",
      description: "Goal setting, performance reviews, and 360-degree feedback systems."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Recruitment",
      description: "End-to-end recruitment process from job posting to onboarding."
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Compliance & Reports",
      description: "Automated compliance tracking and comprehensive HR analytics."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Employee Self-Service",
      description: "Empower employees with self-service portal for requests and updates."
    }
  ];

  const benefits = [
    "Reduce HR administrative tasks by 70%",
    "Eliminate payroll errors and delays",
    "Improve employee satisfaction and engagement",
    "Ensure compliance with labor laws",
    "Make data-driven HR decisions",
    "Seamless integration with accounting systems"
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold">
                Human Resource Management System
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Modernize Your HR Operations
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Streamline every aspect of human resource management from recruitment to retirement. Our HRMS simplifies HR processes, reduces paperwork, and empowers your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="HRMS Dashboard" 
                  className="rounded-lg w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">HRMS Dashboard Preview</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Complete HR Management Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              All the tools you need to manage your workforce efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Why Choose Our HRMS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Streamline Your HR Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading companies using our HRMS to build better workplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
