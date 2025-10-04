import React from "react";
import AnimationWrapper from "@/components/home/AnimationWrapper";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RewardsSection from "@/components/home/RewardsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import Section from "@/components/Section";
import AppScreenshotsSection from "@/components/sections/AppScreenshotsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimationWrapper>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <AppScreenshotsSection />
        <HowItWorksSection />
        <RewardsSection />
        <CTASection />
        <Footer />
      </AnimationWrapper>
    </div>
  );
};

export default Index;
