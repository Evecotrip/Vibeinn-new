import React from "react";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Terms of Service | Vibeinn",
  description:
    "Terms and conditions for using the Vibeinn platform and services.",
};

export default function Terms() {
  return (
    <main>
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last updated: April 10, 2025
        </p>

        <div className="prose dark:prose-invert prose-lg">
          <section className="mb-10">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Vibeinn application and website
              ("Service"), you agree to be bound by these Terms of Service
              ("Terms"). If you disagree with any part of the Terms, you may not
              access the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2>2. Account Registration</h2>
            <p>
              When you create an account with us, you must provide accurate,
              complete, and current information. Failure to do so constitutes a
              breach of the Terms, which may result in immediate termination of
              your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password.
            </p>
          </section>

          <section className="mb-10">
            <h2>3. User Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material ("Content"). You are responsible for the Content
              that you post on or through the Service, including its legality,
              reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through the Service, you represent and
              warrant that:
            </p>
            <ul>
              <li>
                The Content is yours and/or you have the right to use it and
                grant us the rights and license as provided in these Terms.
              </li>
              <li>
                The posting of your Content on or through the Service does not
                violate the privacy rights, publicity rights, copyrights,
                contract rights or any other rights of any person.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>4. Prohibited Uses</h2>
            <p>You agree not to use the Service:</p>
            <ul>
              <li>
                In any way that violates any applicable national or
                international law or regulation.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material, including any "junk mail," "chain letter,"
                "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate the Company, a Company
                employee, another user, or any other person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Service, or which may harm the
                Company or users of the Service.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided
              by users), features and functionality are and will remain the
              exclusive property of Vibeinn and its licensors. The Service is
              protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-10">
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Vibeinn, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>Email: legal@vibeinn.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
