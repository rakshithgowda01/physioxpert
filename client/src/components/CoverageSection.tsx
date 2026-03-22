import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Coverage Section Component
 * Design: Map-based service coverage visualization
 * - Clinic service locations with pulse animations
 * - Feature cards on left side
 * - Glowing location dots on map
 */
export default function CoverageSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const coveragePoints = [
    { id: 1, top: "20%", left: "15%" },
    { id: 2, top: "35%", left: "35%" },
    { id: 3, top: "50%", left: "55%" },
    { id: 4, top: "65%", left: "25%" },
    { id: 5, top: "75%", left: "70%" },
  ];

  const features = [
    {
      title: "Experienced Therapists",
      description: "Highly trained professionals with years of clinical experience",
    },
    {
      title: "Modern Rehabilitation Methods",
      description: "Using latest techniques and equipment for optimal recovery",
    },
    {
      title: "Personalized Treatment Plans",
      description: "Custom care strategies designed for your unique needs",
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
      id="departments"
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-white via-[#F6FAFA] to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#11A7A5]/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left - Features */}
          <motion.div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                We help patients recover across multiple locations.
              </h2>
              <p className="text-gray-600 text-lg">
                Professional care available in your area
              </p>
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
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#11A7A5] hover:bg-[#E5F3F2]/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#11A7A5] text-white font-semibold">
                      ✓
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Map Visualization */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-[500px]"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-[#11A7A5]/10 to-[#0D7C7A]/5 rounded-3xl overflow-hidden border border-[#11A7A5]/20 relative"
              whileHover={{ scale: 1.02 }}
            >
              {/* Map background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="font-semibold">Service Coverage Map</p>
                </div>
              </div>

              {/* Coverage points with pulse animation */}
              {coveragePoints.map((point) => (
                <motion.div
                  key={point.id}
                  className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: point.top, left: point.left }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#11A7A5]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: point.id * 0.2,
                    }}
                  />

                  {/* Center dot */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#11A7A5] shadow-lg"
                    whileHover={{ scale: 1.3 }}
                  />
                </motion.div>
              ))}

              {/* User avatars */}
              <div className="absolute top-12 right-12 flex gap-2">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#11A7A5] to-[#0D7C7A] flex items-center justify-center text-white text-sm font-semibold shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
