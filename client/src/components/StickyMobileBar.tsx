import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Sticky Mobile Bar Component
 * Design: Fixed bottom bar on mobile with call and WhatsApp buttons
 */
export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show sticky bar only on mobile devices
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl md:hidden"
    >
      <div className="flex gap-2 p-3">
        {/* Call Button */}
        <motion.a
          href={`tel:+91${phoneNumber}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1"
        >
          <div className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer">
            <Phone className="w-5 h-5" />
            <span className="text-sm">Call</span>
          </div>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1"
        >
          <div className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">WhatsApp</span>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}
