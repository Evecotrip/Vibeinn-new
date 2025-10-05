"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { useSubmitContactMessage } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const submitMessage = useSubmitContactMessage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitMessage.mutateAsync(formData);

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-500">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our products? Want to schedule a demo? We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Send us an email anytime!
                </p>
                <a
                  href="mailto:hello@vibeinn.com"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  hello@vibeinn.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Mon-Fri from 9am to 6pm
                </p>
                <a
                  href="tel:+15551234567"
                  className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Office Card */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Come say hello at our office
                </p>
                <address className="text-gray-700 dark:text-gray-300 not-italic text-sm">
                  123 Tech Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </address>
              </div>

              {/* Business Hours Card */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-orange-600 dark:bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Business Hours
                </h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="bg-white dark:bg-slate-900"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMessage.isPending}
                    size="lg"
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    {submitMessage.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                How quickly will I get a response?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We typically respond within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Can I schedule a product demo?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Absolutely! Mention "Demo Request" in the subject line and we'll set up a personalized demo for you.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Do you offer technical support?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Yes! All our plans include technical support. Premium plans get priority support with faster response times.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Can I request custom features?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We'd love to hear your ideas! Contact us with your requirements and we'll discuss customization options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="container mx-auto text-center max-w-3xl">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies already using Vibeinn Techverse to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate('/products/lms')}
            >
              View Products
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
