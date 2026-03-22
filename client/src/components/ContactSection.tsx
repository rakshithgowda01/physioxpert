import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Contact Section - PhysioXpert
 * Design: Contact information and location details with mobile responsiveness
 */
export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: `+91 ${phoneNumber}`,
      link: `tel:+91${phoneNumber}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@physioxpert.com",
      link: "mailto:info@physioxpert.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Whitefield, Bengaluru",
      link: "#",
    },
    {
      icon: Clock,
      label: "Available",
      value: "6 AM - 10 PM Daily",
      link: "#",
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
      id="contact"
      ref={ref}
      className="relative py-16 md:py-20 bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Contact PhysioXpert for any queries or to book your appointment
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 md:p-6 rounded-2xl border border-gray-200 hover:border-blue-300 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-500"
                >
                  <div className="space-y-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">{info.label}</h3>
                    <p className="text-gray-700 font-medium text-xs md:text-sm">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Map and CTA */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890!2d77.7!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b0000000001%3A0x0!2sWhitefield%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* CTA Content */}
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ready to Start Your Recovery?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Contact PhysioXpert today and experience professional physiotherapy care at your doorstep. Dr. Lohith is ready to help you recover faster and move better.
                </p>
              </div>

              <div className="space-y-2 md:space-y-3">
                <motion.a
                  href={`tel:+91${phoneNumber}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base">
                    <Phone className="w-4 md:w-5 h-4 md:h-5" />
                    Call Now
                  </Button>
                </motion.a>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base">
                    <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
                    Book on WhatsApp
                  </Button>
                </motion.a>
              </div>

              <p className="text-xs md:text-sm text-gray-600 text-center">
                Available 6 AM - 10 PM Daily | Whitefield, Bengaluru
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
