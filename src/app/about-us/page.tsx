import React from "react";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "About Us | Vibeinn",
  description:
    "Learn about Vibeinn's mission to create authentic social connections and our team.",
};

export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto py-16 px-4 pt-32">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          About Vibeinn
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            At Vibeinn, we're on a mission to create a social platform where
            people can express themselves authentically without filters or
            judgment. We believe in fostering genuine connections in a digital
            world often filled with curated personas and highlight reels.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Founded in 2023, Vibeinn was born out of the recognition that many
            people crave more meaningful digital interactions that reflect real
            life, with all its ups and downs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Authenticity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We encourage users to be their true selves, sharing real
                thoughts and emotions.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building supportive spaces where people feel they belong and are
                understood.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Rewarding Engagement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Meaningful interactions should be celebrated and rewarded.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
