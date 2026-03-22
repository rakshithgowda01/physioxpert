import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Navbar Component - PhysioXpert
 * Centered floating bar with rounded (pill) edges; nav links centered between logo and CTAs.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; href: string; spa?: boolean }[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "/blog", spa: true },
    { label: "Careers", href: "/careers", spa: true },
    { label: "Contact", href: "#contact" },
  ];

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const logoUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663399385942/LLmjhCGXuDgNq9wGvro6Vh/ChatGPTImageMar21,2026,08_59_58PM_ef3d3d76.png";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none"
    >
      <div className="relative w-full max-w-4xl pointer-events-auto">
        {/* Floating pill bar — centered, fully rounded */}
        <div className="rounded-full border border-white/50 bg-white/45 backdrop-blur-xl shadow-lg shadow-black/5 px-3 sm:px-5 py-2 sm:py-2.5">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex-shrink-0 justify-self-start cursor-pointer"
            >
              <img
                src={logoUrl}
                alt="PhysioXpert Logo"
                className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover shadow-md border-2 border-white/60"
              />
            </motion.a>

            {/* Desktop links — centered in the middle column */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-7 min-w-0">
              {navItems.map((item) =>
                item.spa ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group text-gray-700 font-medium text-sm whitespace-nowrap relative inline-block"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {item.label}
                    </motion.span>
                    <span className="pointer-events-none absolute -bottom-0.5 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-600 to-orange-500 rounded-full transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  </Link>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-gray-700 font-medium text-sm whitespace-nowrap relative"
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-teal-600 to-orange-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                  </motion.a>
                ),
              )}
            </div>

            {/* CTAs + mobile toggle */}
            <div className="flex items-center justify-end gap-1.5 sm:gap-2">
              <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
                <motion.a
                  href={`tel:+91${phoneNumber}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm flex items-center gap-1 lg:gap-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Phone className="w-3 lg:w-4 h-3 lg:h-4" />
                    <span className="hidden lg:inline">Call Now</span>
                    <span className="lg:hidden">Call</span>
                  </Button>
                </motion.a>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm flex items-center gap-1 lg:gap-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <MessageCircle className="w-3 lg:w-4 h-3 lg:h-4" />
                    <span className="hidden lg:inline">WhatsApp</span>
                    <span className="lg:hidden">Chat</span>
                  </Button>
                </motion.a>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/40 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu — below pill, same max width */}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
            marginTop: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`md:hidden overflow-hidden rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl shadow-lg ${isOpen ? "" : "pointer-events-none"}`}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) =>
              item.spa ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 font-medium py-2.5 px-2 rounded-xl hover:bg-white/50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 font-medium py-2.5 px-2 rounded-xl hover:bg-white/50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.99 }}
                >
                  {item.label}
                </motion.a>
              ),
            )}
            <div className="flex gap-2 pt-2">
              <motion.a
                href={`tel:+91${phoneNumber}`}
                className="flex-1"
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-full text-sm flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </motion.a>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2.5 rounded-full text-sm flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
