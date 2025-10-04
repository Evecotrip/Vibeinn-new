import React from "react";
import Hero from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import Footer from "@/components/home/Footer";
// Import other home components as needed

export default function Home() {
  return (
    <main>
      {/* Existing home page components */}
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      {/* Other sections */}
      <Footer />
    </main>
  );
}
