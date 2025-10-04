import React from "react";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Help Center | Vibeinn",
  description:
    "Find answers to frequently asked questions and get support for the Vibeinn platform.",
};

export default function HelpCenter() {
  const faqCategories = [
    {
      title: "Account & Profile",
      icon: "user-circle",
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Download the Vibeinn app from the App Store or Google Play Store, open it, and tap 'Sign Up'. Follow the on-screen instructions to create your account.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Tap 'Forgot Password' on the login screen and follow the instructions sent to your email address.",
        },
        {
          question: "Can I change my username?",
          answer:
            "Yes, go to Settings > Profile > Edit Username to change your username.",
        },
      ],
    },
    {
      title: "Rewards & Points",
      icon: "gift",
      faqs: [
        {
          question: "How do I earn points?",
          answer:
            "You earn points by engaging authentically with the community, posting content, receiving engagement, and completing specific challenges.",
        },
        {
          question: "What can I redeem my points for?",
          answer:
            "Points can be redeemed for exclusive content, digital goods, and partner offers in the Rewards section.",
        },
        {
          question: "When do my points expire?",
          answer:
            "Points earned on Vibeinn don't expire as long as your account remains active.",
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: "shield-check",
      faqs: [
        {
          question: "Who can see my posts?",
          answer:
            "By default, your posts are visible to all Vibeinn users. You can adjust your privacy settings to limit visibility to followers only.",
        },
        {
          question: "How does Vibeinn protect my data?",
          answer:
            "We use encryption and secure protocols to protect your data. See our Privacy Policy for details on data handling practices.",
        },
        {
          question: "Can I make my account private?",
          answer:
            "Yes, go to Settings > Privacy and toggle 'Private Account' to only allow approved followers to see your content.",
        },
      ],
    },
  ];

  return (
    <main>
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Help Center
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out
            of Vibeinn.
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-3 text-gray-400">
                {/* Search icon placeholder */}
                🔍
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {faqCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                {/* Icon placeholder */}
                <span className="mr-2">📦</span>
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group cursor-pointer">
                    <summary className="list-none flex justify-between items-center text-gray-800 dark:text-gray-200 font-medium">
                      {faq.question}
                      <span className="text-gray-400">▼</span>
                    </summary>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm pl-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              <a
                href={`/help-center/${category.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-primary dark:text-blue-400 font-medium hover:underline block mt-6 text-sm"
              >
                View all {category.title} topics →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="mb-6">
            Our support team is ready to assist you with any questions.
          </p>
          <a
            href="/help-center/contact"
            className="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
