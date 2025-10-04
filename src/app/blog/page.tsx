import React from "react";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Blog | Vibeinn",
  description:
    "Insights on authentic social connections, digital well-being, and community building.",
};

export default function Blog() {
  const blogPosts = [
    {
      id: "authentic-social-media",
      title: "The Rise of Authentic Social Media",
      excerpt:
        "Why more users are seeking genuine connections online and how platforms are responding.",
      author: "Emma Wilson",
      date: "April 10, 2025",
      category: "Trends",
      image: "/blog/authentic-social.jpg",
    },
    {
      id: "digital-wellness",
      title: "Digital Wellness in a Connected World",
      excerpt:
        "How to maintain healthy social media habits while staying connected with your community.",
      author: "James Chen",
      date: "April 3, 2025",
      category: "Wellness",
      image: "/blog/digital-wellness.jpg",
    },
    {
      id: "community-building",
      title: "Building Meaningful Communities Online",
      excerpt:
        "Strategies for creating spaces where members feel seen, heard, and valued.",
      author: "Sarah Johnson",
      date: "March 25, 2025",
      category: "Community",
      image: "/blog/community.jpg",
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="container mx-auto py-16 px-4 pt-32">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Vibeinn Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights on authentic social connections, digital well-being, and
            building meaningful communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Featured Image]
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    By {post.author}
                  </span>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-primary dark:text-blue-400 font-medium hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/blog/archive"
            className="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-5 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
