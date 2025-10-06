import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Bot,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  Calendar,
  Users,
  Star,
  Phone,
  Mail,
  BookOpen,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Navbar from "../../components/home/Navbar";
import Footer from "@/components/home/Footer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PortfolioPage = () => {
  const projects = [
    {
      title: "Social Media App",
      description:
        "A comprehensive AI-powered social mobile application that lets you speak your heart out without fear of judgment. Be authentic, connect with like-minded people, and win rewards made for both Android and iOS platforms.",
      category: "Mobile Application",
      image: "/vibe.jpeg",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Redux",
        "TypeScript",
        "WebSockets",
        "WebRTC",
      ],
      features: [
        "real-time chat",
        "Push notifications",
        "Multi-platform support",
        "Secure payment integration",
        "User analytics dashboard",
      ],
      status: "Live",
      link: "https://testflight.apple.com/join/ua7XpG4c",
      year: "2025",
      icon: <Smartphone className="w-8 h-8 text-[#0066FF]" />,
      stats: {
        users: "10K+",
        rating: "4.8",
        downloads: "50K+",
      },
    },
    {
      title: "AI Caption Editor App",
      description:
        "An intelligent caption editing application powered by AI that automatically generates, edits, and optimizes captions for social media content with advanced NLP capabilities.",
      category: "AI Application",
      image: "/ai-caption.jpeg",
      technologies: ["React Native", "Gemini", "React", "OpenAI", "Cloudinary"],
      features: [
        "AI-powered caption generation",
        "Multi-language support",
        "Sentiment analysis",
        "Hashtag suggestions",
        "Batch processing",
      ],
      status: "In Beta Development",
      link: "https://testflight.apple.com/join/HZXBbZfX",
      year: "2025",
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      stats: {
        accuracy: "95%",
        languages: "12+",
        processingTime: "<2s",
      },
    },
    {
      title: "Cab Booking App",
      description:
        "A cab booking application that allows users to book a cab for their journey with ease and convenience.",
      category: "Mobile Application",
      image: "/ride.jpeg",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Redux",
        "TypeScript",
        "WebSockets",
        "WebRTC",
      ],
      features: [
        "Real-time cab availability",
        "Multiple payment options",
        "Driver ratings and reviews",
        "Location-based services",
        "User-friendly interface",
      ],
      status: "In Alpha Development",
      link: "https://testflight.apple.com/join/HZXBbZfX",
      year: "2025",
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      stats: {
        accuracy: "95%",
        languages: "12+",
        processingTime: "<2s",
      },
    },
    {
      title: "E-commerce",
      description:
        "A modern e-commerce platform for fresh gifts and products, featuring intuitive shopping experience, secure payments, and efficient order management.",
      category: "E-commerce Platform",
      image: "/fresh.png",
      technologies: [
        "Next.js",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Order tracking",
        "Customer reviews",
        "Mobile-responsive design",
      ],
      status: "Live",
      year: "2025",
      link: "https://fresh-gift-team.vercel.app/",
      icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
      stats: {
        products: "500+",
        orders: "2K+",
        conversion: "3.2%",
      },
    },
    {
      title: "Application Monitoring Tool",
      description:
        "Created a tool which automatically detects when any application or API is down, helping to easily identify application downtime and saving time and effort.",
      category: "Monitoring Tool",
      image: "/monitor.jpeg",
      technologies: ["React", "Node.js", "MySQL", "Express", "Chart.js"],
      features: [
        "Real-time downtime detection",
        "Automated alerts",
        "Regional monitoring",
        "Downtime logs export (CSV/Excel)",
        "Historical performance tracking",
      ],
      status: "Live",
      year: "2025",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      stats: {
        detectionTime: "<30s",
        reliability: "99.9%",
        savings: "80% time",
      },
    },
    {
      title: "Dashboard",
      description:
        "A comprehensive admin dashboard for FreshGift e-commerce platform, providing detailed analytics, inventory management, and business insights.",
      category: "Dashboard Application",
      image: "/admin.png",
      technologies: ["React", "Chart.js", "Node.js", "Express", "MySQL"],
      features: [
        "Real-time analytics",
        "Inventory management",
        "Sales reporting",
        "Customer insights",
        "Order fulfillment tracking",
      ],
      status: "Live",
      year: "2025",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      stats: {
        dataPoints: "1M+",
        reports: "50+",
        efficiency: "+40%",
      },
    },
    {
      title: "Institution",
      description:
        "Premier MEP (Mechanical, Electrical, Plumbing) engineering training institute with 20+ years of excellence. Comprehensive platform offering courses in HVAC, Electrical, Plumbing, Fire Fighting, Revit MEP, and energy simulation tools with 10,000+ successful alumni placed globally.",
      category: "Education Platform",
      image: "/portfolio/institute.png",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Next.js"],
      features: [
        "17 specialized MEP courses",
        "Online & offline training",
        "Live interactive sessions",
        "Industry certification programs",
        "100% placement assistance",
        "Expert faculty with 17+ years experience",
      ],
      status: "Live",
      link: "https://alimrantaiba.com/",
      year: "2024",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      stats: {
        alumni: "10,000+",
        courses: "17",
        placement: "95%",
      },
    },
    {
      title: "High School Website",
      description:
        "Official website for Al Imran Group of Institutions 'JJ High School' featuring comprehensive information about academic programs, admissions, facilities, and school activities. A modern educational platform serving 3000+ students with 93+ dedicated teachers.",
      category: "Educational Website",
      image: "/portfolio/school.png",
      technologies: ["React", "Tailwind CSS", "Vite", "Node.js"],
      features: [
        "Online admission portal",
        "Virtual campus tour",
        "Academic curriculum showcase",
        "Gallery and events section",
        "Career opportunities portal",
        "Parent-teacher communication",
      ],
      status: "Live",
      link: "https://jjhighschool.com/",
      year: "2024",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      stats: {
        students: "3,000+",
        teachers: "93+",
        successRate: "98%",
      },
    },
    {
      title: "Perfumes Ecom",
      description:
        "Premium e-commerce platform for luxury perfumes and fragrances. Features men's, women's, and unisex collections with natural ingredients, cruelty-free products, and eco-friendly packaging. Complete online shopping experience with product tracking and secure payments.",
      category: "E-commerce Platform",
      image: "/portfolio/perfume.png",
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
      features: [
        "Product catalog with categories",
        "Secure payment gateway",
        "Order tracking system",
        "Customer reviews and ratings",
        "Mobile-responsive design",
        "Natural ingredients showcase",
      ],
      status: "Live",
      link: "https://alimranperfumes.com/",
      year: "2024",
      icon: <ShoppingCart className="w-8 h-8 text-pink-600" />,
      stats: {
        products: "100+",
        collections: "3",
        rating: "4.9",
      },
    },
    {
      title: "Scrap & Waste Papers",
      description:
        "Professional scrap buying service platform with 15+ years of experience. Comprehensive solution for buying all types of scrap materials including paper waste, electronic scrap, IT equipment, batteries, and industrial waste with free doorstep pickup and instant cash payment.",
      category: "Business Website",
      image: "/portfolio/scrap.png",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Online quote request system",
        "Pickup scheduling",
        "Real-time price calculator",
        "Multiple scrap categories",
        "Instant cash payment tracking",
        "24/7 customer support",
      ],
      status: "Live",
      link: "https://www.scrapeandwastepapers.com/",
      year: "2024",
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      stats: {
        experience: "15+ years",
        customers: "5,000+",
        paid: "₹10Cr+",
      },
    },
    {
      title: "Builders & Developers",
      description:
        "Leading construction company website showcasing 28+ years of excellence in commercial, residential, and industrial construction. Features portfolio of 500+ completed projects including the landmark Amazon Building in Hyderabad, comprehensive construction services, and project management solutions.",
      category: "Construction Website",
      image: "/portfolio/builder.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
      features: [
        "Project portfolio showcase",
        "Service catalog",
        "Online quotation system",
        "Project timeline tracking",
        "News and updates section",
        "Career opportunities portal",
      ],
      status: "Live",
      link: "https://www.alimranbuildersanddevelopers.com/",
      year: "2024",
      icon: <Star className="w-8 h-8 text-orange-600" />,
      stats: {
        projects: "500+",
        team: "200+",
        experience: "28+ years",
      },
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "In Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our latest projects and case studies. From mobile apps to
            AI-powered solutions, we bring innovative ideas to life with
            cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 10).map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      project.icon
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className="bg-white/90 dark:bg-gray-800/90"
                    >
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Stats 
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  */}

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {project.features.length > 3 && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          +{project.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Many More Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#0066FF] to-blue-500 rounded-full mb-6 mx-auto animate-pulse">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Just a Few from Our Portfolio
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We've delivered solutions across healthcare, education, logistics, entertainment, and various other industries. Each project is built with precision, innovation, and attention to detail.
          </p>

         

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to see more of our work or discuss your project?
          </p>

          <Button
            size="lg"
            onClick={() => (window.location.href = "/contact")}
            className="bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="mr-2 w-5 h-5" />
            Get in Touch
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0066FF] to-blue-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to bring your vision to life with innovative
            solutions that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => (window.location.href = "/services")}
              className="bg-white text-[#0066FF] hover:bg-gray-100 rounded-full px-8"
            >
              View Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
