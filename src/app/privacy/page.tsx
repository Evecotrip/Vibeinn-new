import React from "react";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Privacy Policy | Vibeinn",
  description:
    "Learn how Vibeinn collects, uses, and protects your personal information.",
};

export default function Privacy() {
  const handleFormSubmit = (event: React.FormEvent) => {
    console.log("Form submiting...");
    event.preventDefault();
    const companyMail = "support@vibeinn.online";

    // Get form values directly from elements to avoid FormData constructor error
    const form = event.target as HTMLFormElement;
    const username = form.username?.value || "";
    const contact = form.contact?.value || "";
    const reason = form.reason?.value || "";

    const data = {
      username,
      contact,
      reason,
    };
    console.log("Form submitted:", data);

    // Create email content with account deletion details
    const subject = encodeURIComponent("Account Deletion Request");
    const body = encodeURIComponent(
      `Account Deletion Request\n\n` +
        `Username: ${data.username}\n` +
        `Contact: ${data.contact}\n` +
        `Reason for deletion: ${data.reason || "Not provided"}\n\n` +
        `Please process this account deletion request as per our privacy policy.`
    );

    // Open the default email client with pre-populated fields
    window.open(`mailto:${companyMail}?subject=${subject}&body=${body}`);

    // Show confirmation alert after submitting
    alert(
      "Your deletion request has been submitted. We will contact you shortly."
    );
  };

  return (
    <main>
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last updated: April 10, 2025
        </p>

        <div className="prose dark:prose-invert prose-lg">
          <section className="mb-10">
            <h2>Introduction</h2>
            <p>
              At Vibeinn, we value your privacy and are committed to protecting
              your personal data. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              mobile application and website.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree
              with the terms of this Privacy Policy, please do not access the
              application.
            </p>
          </section>

          <section className="mb-10">
            <h2>Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>When you register for an account, we may collect:</p>
            <ul>
              <li>Name and email address</li>
              <li>Username and password</li>
              <li>Profile information (bio, profile picture)</li>
              <li>Optional: phone number for account recovery</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              We may also collect information on how the service is accessed and
              used:
            </p>
            <ul>
              <li>Device type, operating system, and browser</li>
              <li>IP address and location data</li>
              <li>Time spent on the application and pages visited</li>
              <li>Interactions with content and other users</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow participation in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our service</li>
              <li>To monitor usage of the service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Data Security</h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2>Your Data Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal data:
            </p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure of your personal data</li>
              <li>Right to restrict processing of your personal data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>Email: privacy@vibeinn.com</p>
          </section>

          <section className="mb-10">
            <h2>Account Deletion Request</h2>
            <p className="mb-4">
              To request deletion of your account and associated data, please
              fill out the form below:
            </p>

            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your username"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email or Phone Number *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email or phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Reason for deletion (optional)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please tell us why you're deleting your account"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
                >
                  Submit Deletion Request
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                * We'll verify your identity before proceeding with account
                deletion. This process may take up to 30 days.
              </p>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
