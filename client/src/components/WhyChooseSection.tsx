import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Why Choose PhysioXpert Section
 * Design: Highlight key differentiators with smooth animations
 */
export default function WhyChooseSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const reasons = [
    {
      icon: "🏠",
      title: "Doorstep Treatment",
      description: "No need to travel. Get expert care at your home in Whitefield",
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Care by Dr. Lohith",
      description: "Highly qualified physiotherapist with years of clinical experience",
    },
    {
      icon: "⭐",
      title: "5-Star Rated Service",
      description: "Trusted by patients for quality care and professional service",
    },
    {
      icon: "⏱",
      title: "Flexible Scheduling",
      description: "Book sessions at times that work best for you",
    },
    {
      icon: "💯",
      title: "Personalized Sessions",
      description: "Custom treatment plans designed for your specific condition",
    },
    {
      icon: "🎯",
      title: "Proven Results",
      description: "Effective recovery programs with measurable progress",
    },
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

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-green-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose PhysioXpert
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to making your recovery journey convenient, effective, and affordable
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl border border-gray-200 hover:border-green-300 bg-white hover:bg-green-50 transition-all duration-500 shadow-md hover:shadow-lg"
              >
                <div className="space-y-3">
                  <motion.div 
                    className="text-4xl"
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
