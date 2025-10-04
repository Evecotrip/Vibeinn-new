import React from "react";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Community | Vibeinn",
  description:
    "Join the Vibeinn community to connect with like-minded individuals and participate in discussions.",
};

export default function Community() {
  const featuredCommunities = [
    {
      id: "mindfulness",
      name: "Mindfulness & Wellness",
      members: 124,
      image: "/mind.png",
      description:
        "Share wellness tips, mindfulness practices, and support each other's well-being journey.",
    },
    {
      id: "creative-corner",
      name: "Creative Corner",
      members: 72,
      image: "/creative.png",
      description:
        "A space for artists, writers, and creators to share work and get inspired.",
    },
    {
      id: "tech-talk",
      name: "Tech Talk",
      members: 120,
      image: "/tech.png",
      description:
        "Discuss the latest in technology, gadgets, and digital trends.",
    },
  ];

  const upcomingEvents = [
    {
      id: "ama-founder",
      title: "AMA with Vibeinn Founder",
      date: "April 20, 2025",
      time: "2:00 PM EST",
      attendees: 342,
    },
    {
      id: "wellness-workshop",
      title: "Digital Wellness Workshop",
      date: "April 25, 2025",
      time: "1:00 PM EST",
      attendees: 217,
    },
    {
      id: "creators-showcase",
      title: "Community Creators Showcase",
      date: "May 2, 2025",
      time: "3:00 PM EST",
      attendees: 189,
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="container mx-auto py-16 px-4 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Vibeinn Community
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with like-minded individuals, join discussions, and
            participate in community events.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Featured Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCommunities.map((community) => (
              <div
                key={community.id}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">${community.name}</div>`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {community.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {community.members.toLocaleString()} members
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {community.description}
                  </p>
                  <a
                    href={`/community/${community.id}`}
                    className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary-dark transition-colors"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/community/explore"
              className="text-primary dark:text-blue-400 font-medium hover:underline"
            >
              Explore All Communities →
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Upcoming Community Events
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {event.date} at {event.time}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {event.attendees} attending
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <a
                    href={`/community/events/${event.id}`}
                    className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary-dark transition-colors"
                  >
                    RSVP
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/community/events"
              className="text-primary dark:text-blue-400 font-medium hover:underline"
            >
              View All Events →
            </a>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Join the Conversation</h2>
              <p className="mb-4 md:mb-0">
                Download the app to participate in community discussions
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#app-store"
                className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center"
              >
                <span>App Store</span>
              </a>
              <a
                href="#play-store"
                className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center"
              >
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
