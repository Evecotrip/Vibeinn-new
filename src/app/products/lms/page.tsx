import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Award, 
  BarChart3, 
  Video, 
  FileText,
  CheckCircle,
  Calendar,
  MessageSquare
} from "lucide-react";

export const metadata = {
  title: "Learning Management System (LMS) | Vibeinn Techverse",
  description:
    "Empower your organization with our comprehensive Learning Management System. Track progress, deliver engaging content, and measure success.",
};

export default function LMSPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Course Management",
      description: "Create, organize, and deliver engaging courses with multimedia content support."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Management",
      description: "Track learner progress, manage enrollments, and monitor performance metrics."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications & Badges",
      description: "Automated certificate generation and digital badges for course completion."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Comprehensive insights into learning outcomes and engagement metrics."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Learning",
      description: "Integrated video hosting and streaming for interactive learning experiences."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Assessments & Quizzes",
      description: "Create interactive assessments with automated grading and feedback."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Scheduling",
      description: "Built-in calendar for classes, webinars, and deadline management."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Foster collaboration with integrated discussion boards and chat."
    }
  ];

  const benefits = [
    "Reduce training costs by up to 60%",
    "Increase learner engagement and retention",
    "Scale training across global teams",
    "Mobile-friendly learning on any device",
    "Integrate with existing HR and ERP systems",
    "Comply with industry standards and regulations"
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                Learning Management System
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Transform Learning with Our Powerful LMS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Deliver engaging educational experiences, track progress in real-time, and measure the impact of your training programs with our comprehensive learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white">
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
                  alt="LMS Dashboard" 
                  className="rounded-lg w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">LMS Dashboard Preview</div>';
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
              Comprehensive Features for Modern Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, deliver, and manage effective learning programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
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
              Why Choose Our LMS?
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
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Learning Programs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations using our LMS to deliver exceptional learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
