import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

/**
 * Highlight Section - PhysioXpert
 * Design: Anatomical image with targeted treatment messaging
 */
export default function HighlightSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const highlights = [
    "Targeted treatment for pain points across the body",
    "Expert diagnosis and personalized care plans",
    "Proven recovery techniques with measurable results",
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
      id="highlight"
      ref={ref}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left: Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663399385942/LLmjhCGXuDgNq9wGvro6Vh/anatomical-body-3VNyw4iEN8ryNcqcvEszEo.webp"
                alt="Anatomical body showing pain points"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Targeted Treatment for Every Pain Point
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Whether it's neck pain, lower back issues, knee problems, or shoulder discomfort, our specialized physiotherapy techniques target the root cause of your pain.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 md:space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="bg-blue-50 rounded-xl p-4 md:p-6 border border-blue-200"
            >
              <p className="text-sm md:text-base text-gray-900 font-semibold">
                💡 <span className="text-blue-600">We Turn Pain into Power</span>
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                Every session is designed to rebuild strength, restore mobility, and help you reclaim your active lifestyle.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
