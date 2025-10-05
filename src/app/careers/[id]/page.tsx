"use client";

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { useJobOpening, useSubmitApplication } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  CheckCircle,
  AlertCircle,
  Upload
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: job, isLoading, error } = useJobOpening(id || "");
  const submitApplication = useSubmitApplication();

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    passoutYear: new Date().getFullYear(),
    resumeLink: "",
    coverLetter: "",
    skills: "",
    experience: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!id) return;

    try {
      await submitApplication.mutateAsync({
        jobId: id,
        ...formData,
      });

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        passoutYear: new Date().getFullYear(),
        resumeLink: "",
        coverLetter: "",
        skills: "",
        experience: "",
      });
      setShowApplicationForm(false);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen pt-32 pb-16 px-4 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto text-center">
            <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading job details...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !job) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen pt-32 pb-16 px-4 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto max-w-2xl text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Job Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/careers")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/careers")}
            className="mb-6 hover:bg-blue-100 dark:hover:bg-slate-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Jobs
          </Button>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {job.jobCode}
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                job.type === 'Full-time'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              }`}>
                {job.type}
              </span>
            </div>

            {!showApplicationForm && (
              <Button
                size="lg"
                onClick={() => setShowApplicationForm(true)}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Apply for this Position
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    📋
                  </div>
                  Job Description
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {job.description}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    ✅
                  </div>
                  Requirements
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {job.requirements}
                  </p>
                </div>
              </div>

              {/* Application Form */}
              {showApplicationForm && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Submit Your Application
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+1 (555) 000-0000"
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Resume URL *
                      </label>
                      <Input
                        type="url"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        required
                        placeholder="https://drive.google.com/your-resume"
                        className="bg-white dark:bg-slate-900"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Upload your resume to Google Drive, Dropbox, or similar and paste the link
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                          College/University *
                        </label>
                        <Input
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          required
                          placeholder="Harvard University"
                          className="bg-white dark:bg-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                          Passout Year *
                        </label>
                        <Input
                          type="number"
                          name="passoutYear"
                          value={formData.passoutYear}
                          onChange={(e) => setFormData(prev => ({ ...prev, passoutYear: parseInt(e.target.value) || new Date().getFullYear() }))}
                          required
                          min="1950"
                          max="2030"
                          placeholder="2024"
                          className="bg-white dark:bg-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Skills
                      </label>
                      <Input
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="React, TypeScript, Node.js, etc."
                        className="bg-white dark:bg-slate-900"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Comma-separated list of your key skills
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Experience
                      </label>
                      <Textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Brief overview of your relevant work experience..."
                        rows={4}
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                        Cover Letter *
                      </label>
                      <Textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us why you're a great fit for this role..."
                        rows={6}
                        className="bg-white dark:bg-slate-900"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={submitApplication.isPending}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      >
                        {submitApplication.isPending ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowApplicationForm(false)}
                        disabled={submitApplication.isPending}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Apply Card */}
              {!showApplicationForm && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Interested?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Apply now and join our team of innovators building the future of SaaS.
                  </p>
                  <Button
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    Apply Now
                  </Button>
                </div>
              )}

              {/* Share Job Card */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  Share this Job
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Know someone who'd be perfect for this role?
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast({
                        title: "Link Copied!",
                        description: "Share this job with your network.",
                      });
                    }}
                  >
                    📋 Copy Link
                  </Button>
                </div>
              </div>

              {/* Company Info Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  About Vibeinn Techverse
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  We're building enterprise-grade SaaS solutions that empower businesses worldwide.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    ✅ Remote-first culture
                  </div>
                  <div className="flex items-center gap-2">
                    ✅ Competitive compensation
                  </div>
                  <div className="flex items-center gap-2">
                    ✅ Learning & growth
                  </div>
                  <div className="flex items-center gap-2">
                    ✅ Work-life balance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
