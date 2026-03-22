import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Services Section - PhysioXpert
 * Design: Display all services with smooth animations
 */
export default function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: "🏠",
      title: "Home Physiotherapy",
      description: "Professional physiotherapy treatment delivered at your doorstep in Whitefield",
    },
    {
      icon: "😌",
      title: "Pain Relief Therapy",
      description: "Targeted treatments for chronic pain, muscle tension, and discomfort",
    },
    {
      icon: "🏥",
      title: "Post-Surgery Rehabilitation",
      description: "Expert care to aid recovery and restore mobility after surgical procedures",
    },
    {
      icon: "⚽",
      title: "Sports Injury Recovery",
      description: "Specialized treatment for athletes to return to peak performance",
    },
    {
      icon: "👴",
      title: "Elderly Physiotherapy",
      description: "Gentle, safe treatments designed for senior citizens' mobility and wellness",
    },
    {
      icon: "💪",
      title: "Strength & Mobility",
      description: "Build strength and improve flexibility with personalized exercise programs",
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
      id="services"
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10" />

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
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive physiotherapy solutions tailored to your needs, delivered at your home
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50 transition-all duration-500 shadow-md hover:shadow-lg"
              >
                <div className="space-y-4">
                  <motion.div 
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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
