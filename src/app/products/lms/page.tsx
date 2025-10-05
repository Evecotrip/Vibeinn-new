import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const words = ["Learning", "Training", "Education"];
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
      icon: <BookOpen className="w-8 h-8" />,
      title: "Course Management",
      description: "Create, organize, and deliver engaging courses with multimedia content support. Easily upload videos, documents, presentations, and interactive content.",
      image: "/homescreen/content-manager.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Learner Management",
      description: "Track learner progress, manage enrollments, and monitor performance metrics. Get detailed insights into individual and group performance.",
      image: "/homescreen/admin-panel.jpeg"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications & Badges",
      description: "Automated certificate generation and digital badges for course completion. Motivate learners with achievements and credentials.",
      image: "/homescreen/calender.jpeg"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Scheduling & Analytics",
      description: "Built-in calendar for classes, webinars, and deadline management. Comprehensive insights into learning outcomes and engagement metrics.",
      image: "/homescreen/lms-calender.jpeg"
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
                Transform{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-500">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
                <br />
                with Our Powerful LMS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Deliver engaging educational experiences, track progress in real-time, and measure the impact of your training programs with our comprehensive learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white"
                  onClick={() => navigate('/contact')}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
                <img 
                  src="/pages/lms.png" 
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
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-semibold">${feature.title}</div>`;
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
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
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
