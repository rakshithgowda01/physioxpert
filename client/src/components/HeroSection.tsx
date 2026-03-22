import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const peekEase = [0.22, 1, 0.36, 1] as const;

function FloatingServiceCard({
  card,
  index,
  scrollY,
}: {
  card: { title: string; icon: string };
  index: number;
  scrollY: MotionValue<number>;
}) {
  const yParallax = useTransform(scrollY, [0, 400], [0, 28 * (index + 1)]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "65%" }}
      animate={{
        opacity: 1,
        x: ["65%", "48%", "52%", "50%"],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.35 + index * 0.12 },
        x: {
          duration: 1.35,
          delay: 0.35 + index * 0.12,
          ease: peekEase,
          times: [0, 0.55, 0.78, 1],
        },
      }}
      style={{
        y: yParallax,
        top: `${12 + index * 26}%`,
        right: 0,
      }}
      className="absolute w-[min(11.5rem,calc(100vw-2rem))] animate-float"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-white/85 backdrop-blur-md rounded-xl py-2.5 pl-3 pr-5 lg:py-3 lg:pl-3.5 lg:pr-6 shadow-xl border border-white/50 pointer-events-auto"
      >
        <div className="flex items-center gap-2 lg:gap-3">
          <span className="text-lg lg:text-2xl shrink-0">{card.icon}</span>
          <p className="text-xs lg:text-sm font-semibold text-gray-900 whitespace-nowrap">
            {card.title}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Hero Section Component - PhysioXpert
 * Design: High-converting hero with parallax scroll effect, fade in/out, and smooth animations
 * - Parallax background and floating cards
 * - Fade in/out on scroll
 * - Large heading with location emphasis
 * - Trust badge (5-star rating)
 * - Call and WhatsApp CTAs
 * - Floating service cards with staggered animations
 */
export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 400], [0, 120]);
  const yContent = useTransform(scrollY, [0, 400], [0, 60]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0.3]);

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const floatingCards = [
    { title: "Home Service", icon: "🏠" },
    { title: "Expert Care", icon: "👨‍⚕️" },
    { title: "5-Star Rated", icon: "⭐" },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-x-clip overflow-y-visible pt-24 pb-20"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 400], [0, -60]) }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10" 
      />

      <div className="container">
        <motion.div
          style={{ opacity: opacityHero }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div 
            style={{ y: yContent }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-3 lg:px-4 py-2 w-fit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 lg:w-4 h-3 lg:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs lg:text-sm font-semibold text-gray-900">5.0 Rating | Trusted</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-2">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent leading-tight"
                variants={itemVariants}
              >
                PhysioXpert
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-600"
                variants={itemVariants}
              >
                Physiotherapy at Your Doorstep
              </motion.p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="flex items-center gap-2 text-teal-600 font-semibold text-base md:text-lg"
              variants={itemVariants}
            >
              <Zap className="w-5 h-5" />
              <span>We Turn Pain into Power</span>
            </motion.div>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Expert Physiotherapy at Your Doorstep in Whitefield, Bengaluru. Get professional care from Dr. Lohith without leaving your home.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4">
              <motion.a
                href={`tel:+91${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-4 lg:w-5 h-4 lg:h-5" />
                  Call Now
                </Button>
              </motion.a>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 lg:w-5 h-4 lg:h-5" />
                  Book on WhatsApp
                </Button>
              </motion.a>
            </motion.div>

            {/* Quick Info */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 lg:gap-6 pt-4 text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 lg:w-5 h-4 lg:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 lg:w-5 h-4 lg:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Personalized Care</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & floating labels (peek half off the layout edge) */}
          <motion.div
            variants={itemVariants}
            className="relative h-80 md:h-96 lg:h-[500px] overflow-x-hidden overflow-y-visible"
          >
            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl md:text-6xl lg:text-7xl mb-4">👨‍⚕️</div>
                  <p className="text-lg md:text-xl font-semibold">Dr. Lohith</p>
                  <p className="text-xs md:text-sm text-blue-100">Expert Physiotherapist</p>
                </div>
              </div>
            </motion.div>

            {/* Labels sit on the right; translateX ~50% so ~half sits past the clipped column edge */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {floatingCards.map((card, index) => (
                <FloatingServiceCard key={card.title} card={card} index={index} scrollY={scrollY} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
