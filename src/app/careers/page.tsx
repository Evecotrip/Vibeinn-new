import React from "react";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Careers | Vibeinn",
  description:
    "Join our team and help build the future of authentic social connections.",
};

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Community Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <main>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Join Our Team
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Why Work at Vibeinn?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're building technology that helps people connect authentically in
            a digital world. If you're passionate about using technology to
            bring people together, we want to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Remote-First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work from anywhere with flexible hours and a focus on results.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Growth Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We invest in our team's development with learning budgets and
                mentorship.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Meaningful Work
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build products that positively impact how people connect with
                each other.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Open Positions
          </h2>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {position.department}
                  </span>
                  <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {position.location}
                  </span>
                  <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <a
                  href={`/careers/${position.id}`}
                  className="text-primary dark:text-blue-400 font-medium hover:underline"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
