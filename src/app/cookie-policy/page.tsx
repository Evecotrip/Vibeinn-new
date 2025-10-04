import React from "react";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Cookie Policy | Vibeinn",
  description:
    "Information about how Vibeinn uses cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <main>
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">
          Cookie Policy
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last updated: April 10, 2025
        </p>

        <div className="prose dark:prose-invert prose-lg">
          <section className="mb-10">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the Service or a third-party to recognize you and make your
              next visit easier and the Service more useful to you.
            </p>
          </section>

          <section className="mb-10">
            <h2>How Vibeinn Uses Cookies</h2>
            <p>
              When you use and access the Service, we may place a number of
              cookies files in your web browser. We use cookies for the
              following purposes:
            </p>
            <ul>
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>
                To enable advertisements delivery, including behavioral
                advertising
              </li>
            </ul>

            <p>
              We use both session and persistent cookies on the Service and we
              use different types of cookies to run the Service:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for the operation
                of our website. They include, for example, cookies that enable
                you to log into secure areas.
              </li>
              <li>
                <strong>Analytical/performance cookies:</strong> Allow us to
                recognize and count the number of visitors and to see how
                visitors move around our website. This helps us to improve the
                way our website works.
              </li>
              <li>
                <strong>Functionality cookies:</strong> Used to recognize you
                when you return to our website. This enables us to personalize
                our content for you and remember your preferences.
              </li>
              <li>
                <strong>Targeting cookies:</strong> Record your visit to our
                website, the pages you have visited and the links you have
                followed. We will use this information to make our website and
                the advertising displayed on it more relevant to your interests.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics of the Service,
              deliver advertisements on and through the Service, and so on.
            </p>
          </section>

          <section className="mb-10">
            <h2>What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to
              accept them, you might not be able to use all of the features we
              offer, you may not be able to store your preferences, and some of
              our pages might not display properly.
            </p>
          </section>

          <section className="mb-10">
            <h2>Cookie Preferences</h2>
            <p>
              You can manage your cookie preferences by adjusting the settings
              on your browser, or by clicking on the "Cookie Settings" button
              below.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Cookie Settings
            </button>
          </section>

          <section className="mb-10">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact
              us at:
            </p>
            <p>Email: privacy@vibeinn.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
