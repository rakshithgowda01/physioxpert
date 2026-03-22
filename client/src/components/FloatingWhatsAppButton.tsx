import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * Floating WhatsApp Button Component
 * Design: Fixed button for easy WhatsApp access from any page
 */
export default function FloatingWhatsAppButton() {
  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
