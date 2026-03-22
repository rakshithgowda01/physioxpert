import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const phoneNumber = "6360196357";

/**
 * Careers page for hiring SEO and candidate discovery (Bangalore / Whitefield).
 */
export default function Careers() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Careers at PhysioXpert | Physiotherapist Jobs in Whitefield Bengaluru"
        description="Join PhysioXpert: home physiotherapy careers in Whitefield and Bangalore. We hire BPT/MPT physiotherapists passionate about doorstep rehab and patient-centred care."
        canonicalPath="/careers"
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

          <header className="space-y-3 mb-12">
            <p className="text-sm font-medium text-blue-600">Join our team</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Careers at PhysioXpert
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              PhysioXpert delivers <strong>home physiotherapy in Whitefield, Bengaluru</strong>.
              We are building a team of clinicians who value one-on-one care, clear communication,
              and evidence-based rehab in patients&apos; homes.
            </p>
          </header>

          <div className="space-y-10">
            <section className="space-y-4" aria-labelledby="why-join">
              <h2 id="why-join" className="text-2xl font-semibold text-gray-900">
                Why work with us?
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>Focus on clinical quality and continuity—not rushed clinic slots.</li>
                <li>
                  Serve your local community in <strong>Whitefield</strong> and nearby{" "}
                  <strong>Bangalore East</strong> neighbourhoods.
                </li>
                <li>Support for home-visit logistics and structured treatment pathways.</li>
                <li>Collaboration with Dr. Lohith and a patient-first culture.</li>
              </ul>
            </section>

            <section className="space-y-4" aria-labelledby="open-roles">
              <h2 id="open-roles" className="text-2xl font-semibold text-gray-900">
                Open roles
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Home visit physiotherapist (BPT / MPT)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We welcome applications from licensed physiotherapists comfortable with
                  autonomous home assessments, exercise prescription, manual therapy where
                  appropriate, and documentation. Experience with orthopaedic, neurological, or
                  geriatric caseloads is a plus.
                </p>
                <p className="text-sm text-gray-600">
                  Type: Full-time / part-time (discussed at interview) · Location: Whitefield &
                  surrounding areas, Bengaluru
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Don&apos;t see a perfect fit? We still read general applications from
                physiotherapists who align with our model.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="how-to-apply">
              <h2 id="how-to-apply" className="text-2xl font-semibold text-gray-900">
                How to apply
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Send your CV, Karnataka council / practice credentials summary, and a short note
                on why you prefer <strong>home-based physiotherapy</strong> to{" "}
                <a
                  href="mailto:info@physioxpert.com?subject=PhysioXpert%20careers%20application"
                  className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@physioxpert.com
                </a>
                . We will reply with next steps and, if suitable, schedule an introductory call.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For patient bookings (not jobs), use{" "}
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 {phoneNumber}
                </a>{" "}
                or our{" "}
                <a href="/#contact" className="text-blue-600 font-medium hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>

            <section className="rounded-2xl bg-teal-50/80 border border-teal-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Learn more</h2>
              <p className="text-gray-700 leading-relaxed">
                Read our{" "}
                <Link href="/blog" className="text-blue-600 font-medium hover:underline">
                  blog
                </Link>{" "}
                for how we approach home rehab, and explore{" "}
                <a href="/#about" className="text-blue-600 font-medium hover:underline">
                  about Dr. Lohith
                </a>{" "}
                on the main site.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
