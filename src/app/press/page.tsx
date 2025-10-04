import React from "react";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Press | Vibeinn",
  description: "Latest news, press releases, and media resources for Vibeinn.",
};

export default function Press() {
  const pressReleases = [
    {
      id: 2,
      date: "February 15, 2025",
      title: "Vibeinn Launches New Reward Program",
      excerpt:
        "Users can now earn points for meaningful connections and redeem for exclusive content...",
    },
    {
      id: 3,
      date: "January 10, 2025",
      title: "Vibeinn Partners with Online Communities",
      excerpt:
        "Industry analysts highlight Vibeinn's innovative approach to authentic social connections...",
    },
  ];

  return (
    <main>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Press & Media
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Press Releases
          </h2>

          <div className="space-y-8">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {release.date}
                </p>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {release.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {release.excerpt}
                </p>
                <a
                  href={`/press/${release.id}`}
                  className="text-primary dark:text-blue-400 font-medium hover:underline"
                >
                  Read Full Release
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Media Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Media Kit
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Download our media kit with logos, brand guidelines, and
                executive headshots.
              </p>
              <a
                href="/downloads/vibeinn-media-kit.zip"
                className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary-dark transition-colors"
              >
                Download Kit
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Media Inquiries
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For press inquiries, please contact our PR team at:
              </p>
              <a
                href="mailto:press@vibeinn.com"
                className="text-primary dark:text-blue-400 font-medium hover:underline block"
              >
                press@vibeinn.com
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
