import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Basic privacy policy for PhysioXpert marketing site.
 * Replace or extend with counsel-reviewed text before relying on it legally.
 */
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Privacy Policy | PhysioXpert"
        description="How PhysioXpert collects and uses information when you use our website or contact us for home physiotherapy in Whitefield, Bengaluru."
        canonicalPath="/privacy"
      />
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="container max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: March 22, 2026
          </p>

          <div className="space-y-8 text-gray-700 text-[15px] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Introduction</h2>
              <p>
                PhysioXpert (“we”, “us”) respects your privacy. This policy describes how we
                handle information when you use our website or contact us about physiotherapy
                services in Whitefield, Bengaluru.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Information we collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Details you provide when you call, message on WhatsApp, email, or submit a
                  booking or contact form (such as name, phone number, and message content).
                </li>
                <li>
                  Basic technical data typical of websites (for example browser type, general
                  location from IP, and pages viewed) through standard server or analytics tools
                  if enabled.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">How we use information</h2>
              <p>We use this information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to enquiries and arrange appointments.</li>
                <li>Improve our website and understand how visitors use it.</li>
                <li>Comply with law or protect our rights where required.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Sharing</h2>
              <p>
                We do not sell your personal information. We may share information with service
                providers who help us run the site or communicate with you (for example
                hosting or messaging platforms), only as needed for those services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Cookies</h2>
              <p>
                Our site may use cookies or similar technologies for essential functionality or
                analytics. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Your choices</h2>
              <p>
                You may ask us to update or delete enquiry details we hold, subject to legal or
                operational retention needs. Contact us using the details in the website footer.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Changes</h2>
              <p>
                We may update this policy from time to time. The “Last updated” date at the top
                will change when we do.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
              <p>
                Questions about this policy: use the phone or email shown in the{" "}
                <a href="/#contact" className="text-blue-600 hover:underline">
                  Contact
                </a>{" "}
                section of our site.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
