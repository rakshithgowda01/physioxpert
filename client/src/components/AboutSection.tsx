import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

/**
 * About Section - PhysioXpert
 * Design: Introduce Dr. Lohith with parallax and smooth animations
 */
export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 100]);

  const highlights = [
    "Home service convenience - no travel needed",
    "Personalized treatment plans for each patient",
    "Patient-focused care with proven results",
    "Flexible scheduling that fits your lifestyle",
  ];

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
      id="about"
      ref={ref}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" 
      />

      <div className="container" ref={containerRef}>
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
              transition={{ duration: 0.4 }}
              className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-xl border border-blue-200"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">👨‍⚕️</div>
                  <p className="text-xl font-semibold text-gray-900">Dr. Lohith</p>
                  <p className="text-sm text-gray-600">Expert Physiotherapist</p>
                  <p className="text-xs text-blue-600 font-semibold mt-2">Whitefield, Bengaluru</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About Dr. Lohith
              </h2>
              <p className="text-lg text-teal-600 font-semibold">
                Your Trusted Home Physiotherapy Partner
              </p>
            </motion.div>

            <motion.p
              className="text-gray-700 leading-relaxed text-lg"
              variants={itemVariants}
            >
              Dr. Lohith brings years of clinical expertise and a patient-first approach to physiotherapy. Specializing in home-based treatment, he provides personalized care that fits your lifestyle and recovery needs.
            </motion.p>

            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-gray-600 italic pt-4"
              variants={itemVariants}
            >
              "Recovery is a journey, not a destination. I'm here to guide you every step of the way, right from the comfort of your home."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
