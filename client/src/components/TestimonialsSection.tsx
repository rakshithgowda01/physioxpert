import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

/**
 * Testimonials Section - PhysioXpert
 * Design: Display patient reviews with smooth animations
 */
export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Patient",
      review: "Highly recommend for quality physiotherapy care. Dr. Lohith is professional and caring.",
      rating: 5,
      avatar: "👨",
    },
    {
      name: "Priya Sharma",
      role: "Patient",
      review: "The home service is so convenient! Worked wonders for my shoulder issue. Great experience.",
      rating: 5,
      avatar: "👩",
    },
    {
      name: "Amit Patel",
      role: "Patient",
      review: "Professional and caring service. Recovery has been smooth with personalized treatment.",
      rating: 5,
      avatar: "👨",
    },
    {
      name: "Sneha Desai",
      role: "Patient",
      review: "Best physiotherapy experience. Flexible scheduling and excellent results. Highly satisfied!",
      rating: 5,
      avatar: "👩",
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
      id="testimonials"
      ref={ref}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />

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
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from satisfied patients who experienced PhysioXpert's care
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl border border-gray-200 hover:border-blue-300 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-4">
                  {/* Rating */}
                  <motion.div 
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.review}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center">
              <motion.p 
                className="text-4xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                500+
              </motion.p>
              <p className="text-gray-600 text-sm mt-2">Happy Patients</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <motion.p 
                className="text-4xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                5.0
              </motion.p>
              <p className="text-gray-600 text-sm mt-2">Average Rating</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <motion.p 
                className="text-4xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                1000+
              </motion.p>
              <p className="text-gray-600 text-sm mt-2">Sessions Completed</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
