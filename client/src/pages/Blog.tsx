import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const phoneNumber = "6360196357";

/**
 * SEO-focused articles for local physiotherapy search intent (Whitefield, Bengaluru).
 */
export default function Blog() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="PhysioXpert Blog | Home Physiotherapy Tips & Whitefield Bengaluru Guides"
        description="Expert articles on home physiotherapy in Whitefield and Bangalore: pain relief, post-surgery rehab, sports injuries, and elderly care from PhysioXpert by Dr. Lohith."
        canonicalPath="/blog"
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

          <article className="space-y-12">
            <header className="space-y-3">
              <p className="text-sm font-medium text-blue-600">PhysioXpert resources</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Home physiotherapy in Whitefield, Bengaluru
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Practical guides for patients and families searching for a{" "}
                <strong>physiotherapist near me</strong>, <strong>physiotherapy at home</strong>,
                or <strong>home physiotherapy in Whitefield</strong>. PhysioXpert brings
                structured rehab to your doorstep under Dr. Lohith.
              </p>
            </header>

            <section className="space-y-4" aria-labelledby="why-home">
              <h2 id="why-home" className="text-2xl font-semibold text-gray-900">
                Why choose home physiotherapy?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Recovering at home reduces travel stress, lowers fall risk after surgery, and
                lets your therapist see how you move in your real environment—stairs, bed height,
                and daily routines. For many people in <strong>Whitefield</strong> and nearby{" "}
                <strong>East Bangalore</strong> areas, <strong>doorstep physiotherapy</strong> is
                the most practical way to stay consistent with treatment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Learn more about our{" "}
                <a href="/#services" className="text-blue-600 font-medium hover:underline">
                  services and treatment options
                </a>{" "}
                or{" "}
                <a href="/#contact" className="text-blue-600 font-medium hover:underline">
                  contact us to book a visit
                </a>
                .
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="pain-relief">
              <h2 id="pain-relief" className="text-2xl font-semibold text-gray-900">
                Back, neck, and joint pain: what to expect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Manual therapy, guided exercise, and education are cornerstones of{" "}
                <strong>pain relief physiotherapy</strong>. A home visit allows assessment of
                posture at your desk or sleep setup—not only the clinic plinth—so advice matches
                your life. If pain is new, severe, or accompanied by numbness or weakness, seek
                urgent medical care; this blog is general information, not a substitute for
                examination.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="post-surgery">
              <h2 id="post-surgery" className="text-2xl font-semibold text-gray-900">
                Post-surgery rehabilitation at home
              </h2>
              <p className="text-gray-700 leading-relaxed">
                After orthopaedic surgery, <strong>post-surgery physiotherapy</strong> helps
                restore range of motion, strength, and walking confidence. Home sessions can
                align with your surgeon&apos;s protocol while focusing on safe transfers,
                crutches or walker use, and swelling management. Consistency matters: short,
                frequent sessions often beat occasional long clinic trips.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="sports">
              <h2 id="sports" className="text-2xl font-semibold text-gray-900">
                Sports injury rehab without missing work or school
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Sports injury rehabilitation</strong> blends load progression, agility,
                and return-to-play criteria. Training at home can complement gym or field work,
                especially in the early phase when swelling and pain limit travel. Your plan
                should be tailored to your sport, age, and goals.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="elderly">
              <h2 id="elderly" className="text-2xl font-semibold text-gray-900">
                Elderly care and fall prevention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For older adults, physiotherapy often focuses on balance, strength, and fear of
                falling. <strong>Elderly care therapy at home</strong> lets family members join
                sessions, understand cues, and adapt the home layout. Small changes—rug removal,
                better lighting, grab bars—pair well with exercise.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl bg-blue-50/80 border border-blue-100 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-900">Common questions</h2>
              <dl className="space-y-5">
                <div>
                  <dt className="font-semibold text-gray-900">
                    Do you cover Whitefield and nearby areas?
                  </dt>
                  <dd className="mt-1 text-gray-700 leading-relaxed">
                    PhysioXpert focuses on home visits in Whitefield, Bengaluru, and surrounding
                    localities. Call or WhatsApp to confirm coverage for your pin code.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    How do I book home physiotherapy?
                  </dt>
                  <dd className="mt-1 text-gray-700 leading-relaxed">
                    Use the{" "}
                    <a href="/#contact" className="text-blue-600 font-medium hover:underline">
                      contact section
                    </a>{" "}
                    on our site, phone{" "}
                    <a href={`tel:+91${phoneNumber}`} className="text-blue-600 hover:underline">
                      +91 {phoneNumber}
                    </a>
                    , or WhatsApp—we&apos;ll discuss your goals and schedule.
                  </dd>
                </div>
              </dl>
            </section>

            <p className="text-sm text-gray-500 border-t border-gray-200 pt-8">
              Content is for general education. Individual assessment by a licensed
              physiotherapist is required for diagnosis and treatment plans.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
