import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

/**
 * Features Section Component
 * Design: Asymmetric layout with image on left, features on right
 * - Feature cards with icons and descriptions
 * - Scroll-triggered animations
 * - Hover lift animation on cards
 */
export default function FeaturesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      title: "Easy Appointment Booking",
      description: "Schedule your therapy sessions in seconds with our intuitive booking system.",
    },
    {
      title: "Certified Physiotherapists",
      description: "All our therapists are highly trained and certified professionals.",
    },
    {
      title: "Personalized Recovery Plans",
      description: "Custom treatment plans tailored to your specific needs and goals.",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your recovery journey with detailed progress reports and analytics.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="benefits"
      ref={ref}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#11A7A5]/3 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-[500px]"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full h-full bg-gradient-to-br from-[#E5F3F2] to-[#11A7A5]/10 rounded-3xl overflow-hidden shadow-xl border border-[#11A7A5]/10"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">📱</div>
                  <p className="text-lg font-semibold text-gray-900">
                    Physiotherapist Using App
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Focus on Healing. We'll Handle the Rest.
              </h2>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, y: -4 }}
                  className="group p-5 rounded-xl border border-gray-100 hover:border-[#11A7A5] hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#11A7A5] group-hover:text-[#0D7C7A] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
