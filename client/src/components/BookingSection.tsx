import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

function preferredTimeLabel(value: string): string {
  switch (value) {
    case "morning":
      return "Morning (6 AM - 12 PM)";
    case "afternoon":
      return "Afternoon (12 PM - 6 PM)";
    case "evening":
      return "Evening (6 PM - 10 PM)";
    default:
      return value;
  }
}

/**
 * Booking Section - PhysioXpert
 * Design: Simple booking form with fade animations and mobile responsiveness
 */
export default function BookingSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
    preferredTime: "",
  });

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello PhysioXpert, I'd like to book a home physiotherapy visit.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Problem / concern: ${formData.problem}`,
      `Preferred time: ${preferredTimeLabel(formData.preferredTime)}`,
    ].join("\n");
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(text)}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = url;
    }
    toast.success(`Thanks, ${formData.name}! WhatsApp should open with your booking message—tap Send there to confirm.`);
    setFormData({ name: "", phone: "", problem: "", preferredTime: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Book Your Home Visit Now
            </h2>
            <p className="text-base md:text-lg text-blue-100">
              Fill the form below or contact us directly
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl space-y-4 md:space-y-6"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                placeholder="Enter your name"
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                placeholder="Enter your phone number"
              />
            </motion.div>

            {/* Problem */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-2">
                What's Your Problem?
              </label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-sm md:text-base"
                placeholder="Describe your condition or pain area"
              />
            </motion.div>

            {/* Preferred Time */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-2">
                Preferred Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                <option value="evening">Evening (6 PM - 10 PM)</option>
              </select>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                Send to WhatsApp
              </Button>
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Opens WhatsApp with your details filled in—tap{" "}
                <span className="font-medium text-gray-700">Send</span> to complete the booking
                request. Nothing is stored on this website.
              </p>
            </motion.div>
          </motion.form>

          {/* Alternative Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="mt-6 md:mt-8 text-center space-y-3 md:space-y-4"
          >
            <p className="text-white text-xs md:text-sm">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.a
                href={`tel:+91${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button className="w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center justify-center gap-2 text-sm md:text-base">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </motion.a>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center justify-center gap-2 text-sm md:text-base">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
