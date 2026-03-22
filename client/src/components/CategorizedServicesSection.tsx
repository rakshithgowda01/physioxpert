import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Activity, Brain, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Categorized Services Section - PhysioXpert
 * Design: 3 main service categories with detailed treatments
 * - Pain Relief & Therapy
 * - Injury & Rehab Care
 * - Specialized Treatments
 */
export default function CategorizedServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const serviceCategories = [
    {
      title: "Pain Relief & Therapy",
      icon: Zap,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      treatments: [
        { name: "Manual Therapy", desc: "Hands-on techniques to reduce pain and improve mobility" },
        { name: "Spinal Manipulation", desc: "Targeted spine adjustments for alignment and relief" },
        { name: "Kinesio Taping", desc: "Therapeutic taping to support muscles and joints" },
        { name: "Wet & Dry Cupping", desc: "Ancient therapy for muscle tension and pain relief" },
      ],
    },
    {
      title: "Injury & Rehab Care",
      icon: Activity,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      treatments: [
        { name: "ACL, PCL, LCL Rehabilitation", desc: "Expert recovery for knee ligament injuries" },
        { name: "Shoulder Dislocation Rehab", desc: "Specialized care for shoulder stability" },
        { name: "Rotator Cuff Injury", desc: "Targeted treatment for shoulder muscle injuries" },
        { name: "Sports Injury & Post-Surgical Rehab", desc: "Complete recovery programs for athletes" },
      ],
    },
    {
      title: "Specialized Treatments",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      treatments: [
        { name: "Stroke Rehabilitation (Hemiplegia)", desc: "Recovery therapy for stroke patients" },
        { name: "Geriatric Rehab", desc: "Safe, effective care for elderly patients" },
        { name: "Pediatric Rehab", desc: "Specialized treatment for children's conditions" },
        { name: "Gait & Posture Training", desc: "Improve walking patterns and body alignment" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="services"
      ref={ref}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/10 rounded-full blur-3xl -z-10" />

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
              Our Physiotherapy Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Comprehensive treatment options designed to address your specific needs and accelerate recovery
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {serviceCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl border-2 ${category.borderColor} ${category.bgColor} p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Treatments List */}
                  <div className="space-y-4">
                    {category.treatments.map((treatment, tidx) => (
                      <motion.div
                        key={tidx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + tidx * 0.1, duration: 0.4 }}
                        className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
                      >
                        <p className="font-semibold text-gray-900 text-sm md:text-base">
                          {treatment.name}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          {treatment.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="mt-6 pt-4 border-t border-gray-200"
                  >
                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 text-xs md:text-sm transition-all duration-300">
                        <MessageCircle className="w-4 h-4" />
                        Book Home Visit
                      </Button>
                    </motion.a>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 md:pt-12"
          >
            <p className="text-gray-700 font-semibold mb-4 text-base md:text-lg">
              Not sure which service you need?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href={`tel:+91${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base">
                  <Phone className="w-4 h-4" />
                  Call for Consultation
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
                  Chat on WhatsApp
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
