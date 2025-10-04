import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users2, 
  Mail, 
  Phone, 
  Target, 
  TrendingUp, 
  BarChart3,
  CheckCircle,
  Zap,
  PieChart
} from "lucide-react";

export const metadata = {
  title: "Customer Relationship Management (CRM) | Vibeinn Techverse",
  description:
    "Boost sales and strengthen customer relationships with our powerful CRM. Track leads, manage contacts, and close deals faster.",
};

export default function CRMPage() {
  const features = [
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Contact Management",
      description: "Organize and manage all customer contacts, interactions, and communications."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lead Management",
      description: "Track and nurture leads through your sales pipeline efficiently."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales Pipeline",
      description: "Visual sales pipeline to track deals and forecast revenue accurately."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Integration",
      description: "Seamless email integration for tracking communications and campaigns."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Real-time insights into sales performance and customer behavior."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to boost productivity."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Management",
      description: "Integrated calling features with call logging and recording."
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Customer Insights",
      description: "360-degree view of customer interactions and purchase history."
    }
  ];

  const benefits = [
    "Increase sales by up to 29%",
    "Improve customer retention rates by 27%",
    "Reduce sales cycle length by 18%",
    "Boost team productivity by 34%",
    "Better forecast accuracy and planning",
    "Enhanced customer satisfaction scores"
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-semibold">
                Customer Relationship Management
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Grow Your Business with Smart CRM
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transform the way you manage customer relationships. Our CRM helps you track leads, close deals faster, and build lasting customer relationships at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white">
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
                  alt="CRM Dashboard" 
                  className="rounded-lg w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-green-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">CRM Dashboard Preview</div>';
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
              Powerful CRM Features for Sales Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything your sales team needs to close more deals and delight customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-green-600 dark:text-green-400 mb-4">
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
              Why Choose Our CRM?
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
      <div className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-800 dark:to-teal-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Supercharge Your Sales?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams using our CRM to close more deals and build better customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
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
