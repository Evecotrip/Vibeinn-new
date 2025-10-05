import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const words = ["HR", "People", "Workforce"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employee Management",
      description: "Centralized employee database with complete profile management and documentation. Maintain comprehensive employee records, track history, and manage organizational structure efficiently.",
      image: "/hrms/hrms-dashboard.jpeg"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time & Attendance",
      description: "Automated time tracking, shift scheduling, and attendance management. Real-time monitoring, biometric integration, and accurate timesheet management.",
      image: "/hrms/hrms-attendance.jpeg"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Leave Management",
      description: "Streamlined leave requests, approvals, and balance tracking. Automated workflows, multiple leave types, and seamless approval process for better work-life balance.",
      image: "/hrms/hrms-leave.jpeg"
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
                Modernize Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
                 
                Operations
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Streamline every aspect of human resource management from recruitment to retirement. Our HRMS simplifies HR processes, reduces paperwork, and empowers your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  onClick={() => navigate('/contact')}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
                <img 
                  src="/pages/hrms.png" 
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
          
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-semibold">${feature.title}</div>`;
                        }}
                      />
                    </div>
                  </div>
                </div>
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
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
