import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Basic terms of service for PhysioXpert marketing site.
 * Replace or extend with counsel-reviewed text before relying on it legally.
 */
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Terms of Service | PhysioXpert"
        description="Terms of use for the PhysioXpert website. Home physiotherapy information for Whitefield, Bengaluru—not a substitute for professional medical advice."
        canonicalPath="/terms"
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
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: March 22, 2026
          </p>

          <div className="space-y-8 text-gray-700 text-[15px] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Agreement</h2>
              <p>
                By using the PhysioXpert website, you agree to these terms. If you do not agree,
                please do not use the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">The website</h2>
              <p>
                This site provides general information about home physiotherapy services in
                Whitefield, Bengaluru, and ways to contact us. We may change or discontinue
                content at any time without notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Not medical advice</h2>
              <p>
                Information on this website is for general purposes only and is not a substitute
                for professional medical advice, diagnosis, or treatment. Always seek advice from
                a qualified clinician for your specific condition. In an emergency, contact
                local emergency services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Bookings and communication</h2>
              <p>
                Enquiries through phone, WhatsApp, email, or forms do not guarantee availability
                or acceptance of care. Any treatment relationship is subject to separate
                clinical and administrative agreement between you and the provider.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Acceptable use</h2>
              <p>
                You agree not to misuse the site (for example by attempting unauthorized access,
                scraping in a way that harms service, or submitting unlawful or harmful
                content).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, PhysioXpert and its operators are not
                liable for any indirect or consequential loss arising from use of this website
                or reliance on its content. Some jurisdictions do not allow certain
                limitations; in those cases, our liability is limited to the maximum extent
                permitted.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Links</h2>
              <p>
                Third-party sites linked from this website are not under our control; we are not
                responsible for their content or practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Changes</h2>
              <p>
                We may update these terms. Continued use after changes means you accept the
                updated terms. Check this page periodically.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
              <p>
                For questions about these terms, reach us via the{" "}
                <a href="/#contact" className="text-blue-600 hover:underline">
                  Contact
                </a>{" "}
                section.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
