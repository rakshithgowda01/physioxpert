import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * How It Works Section Component
 * Design: Three-step process with teal background
 * - Step indicators with connecting lines
 * - Mobile screen mockups
 * - Smooth animations and transitions
 */
export default function HowItWorksSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      number: "1",
      title: "Book an Appointment",
      description: "Choose your preferred time and therapist from our available options",
      icon: "📅",
    },
    {
      number: "2",
      title: "Meet Your Physiotherapist",
      description: "Connect with our certified professionals for personalized care",
      icon: "👨‍⚕️",
    },
    {
      number: "3",
      title: "Start Your Recovery Plan",
      description: "Begin your customized treatment journey towards better health",
      icon: "💪",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="how-it-works"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-[#11A7A5] to-[#0D7C7A] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Your Recovery Journey in 3 Simple Steps
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get started with PhysioCare and experience professional care from the comfort of your home
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white h-full hover:bg-white/15 transition-all duration-300"
                  >
                    {/* Step number circle */}
                    <motion.div
                      className="absolute -top-6 left-8 w-12 h-12 bg-white text-[#11A7A5] rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Content */}
                    <div className="pt-6 space-y-4">
                      <div className="text-5xl">{step.icon}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Mockups */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16"
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {[1, 2, 3].map((mockup) => (
                <motion.div
                  key={mockup}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
                >
                  {/* Phone frame */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-56 bg-white/10 rounded-2xl border-4 border-white/20 flex items-center justify-center">
                      <div className="text-center text-white/50">
                        <div className="text-3xl mb-2">📱</div>
                        <p className="text-xs">Screen {mockup}</p>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: mockup * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
