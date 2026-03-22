import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Conditions Treated Section - PhysioXpert
 * Design: Clean 2-column grid layout with all treatable conditions
 */
export default function ConditionsTreatedSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const conditions = [
    "Frozen Shoulder",
    "Low Back Pain",
    "Knee Pain",
    "Hip Pain",
    "Sciatica",
    "Neck Pain (Trapezitis)",
    "Plantar Fasciitis",
    "Ankle Sprain",
    "Rheumatoid Arthritis",
    "Osteoarthritis",
    "IV Disc Prolapse",
    "Impingement Syndrome",
    "Tennis Elbow",
    "Carpal Tunnel Syndrome",
    "Muscle Strain",
    "Ligament Injury",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const conditionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="conditions"
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Conditions We Treat
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Expert physiotherapy care for a wide range of conditions. If your condition isn't listed, contact us for consultation.
            </p>
          </motion.div>

          {/* Conditions Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                variants={conditionVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                </motion.div>
                <span className="text-gray-900 font-medium text-sm md:text-base">
                  {condition}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Message */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-center text-white space-y-4"
          >
            <p className="text-lg md:text-xl font-semibold">
              ✓ Certified Physiotherapist | Home Care Available | Personalized Treatment
            </p>
            <p className="text-sm md:text-base text-blue-100">
              Every condition is unique. Dr. Lohith creates customized treatment plans tailored to your specific needs and recovery goals.
            </p>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <p className="text-gray-700 font-semibold text-base md:text-lg">
              Ready to start your recovery journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href={`tel:+91${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base">
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
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base">
                  <MessageCircle className="w-4 h-4" />
                  Book Home Visit
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
