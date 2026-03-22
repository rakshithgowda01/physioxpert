import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategorizedServicesSection from "@/components/CategorizedServicesSection";
import ConditionsTreatedSection from "@/components/ConditionsTreatedSection";
import HighlightSection from "@/components/HighlightSection";
import TreatmentCarouselSection from "@/components/TreatmentCarouselSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import StickyMobileBar from "@/components/StickyMobileBar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

/**
 * Home Page - PhysioXpert
 * Design: High-converting local business landing page
 * - Sticky navbar with call/WhatsApp CTAs
 * - Hero section with trust badge and conversion focus
 * - About Dr. Lohith section
 * - Services showcase
 * - Why Choose PhysioXpert section
 * - Testimonials with ratings
 * - Booking form
 * - Contact section with map
 * - Floating WhatsApp button
 * - Sticky mobile bar for mobile conversions
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="PhysioXpert | Home Physiotherapy in Whitefield Bengaluru | Dr. Lohith"
        description="Expert home physiotherapy in Whitefield, Bengaluru. Pain relief, post-surgery rehab, sports injuries & elderly care. Book PhysioXpert by Dr. Lohith via call or WhatsApp."
        canonicalPath="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CategorizedServicesSection />
        <ConditionsTreatedSection />
        <HighlightSection />
        <TreatmentCarouselSection />
        <WhyChooseSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileBar />
    </div>
  );
}
