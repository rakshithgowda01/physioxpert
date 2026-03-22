import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

const SPA_ROUTES = new Set(["/privacy", "/terms", "/blog", "/careers"]);

const linkClass =
  "text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm";

function FooterNavLink({ href, label }: { href: string; label: string }) {
  if (SPA_ROUTES.has(href)) {
    return (
      <Link href={href} className={linkClass}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={linkClass}>
      {label}
    </a>
  );
}

/**
 * Footer Component - PhysioXpert
 * Design: Professional healthcare footer with circular logo and mobile responsiveness
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "6360196357";
  const logoUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663399385942/LLmjhCGXuDgNq9wGvro6Vh/ChatGPTImageMar21,2026,08_59_58PM_ef3d3d76.png";

  const footerLinkGroups: {
    title: string;
    links: { label: string; href: string }[];
  }[] = [
    {
      title: "Services",
      links: [
        { label: "Home Physiotherapy", href: "/#services" },
        { label: "Pain Relief", href: "/#services" },
        { label: "Post-Surgery Care", href: "/#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Dr. Lohith", href: "/#about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Contact", href: "/#contact" },
      ],
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-100 pt-20 pb-8">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 flex flex-col items-center md:items-start"
          >
            <motion.img
              src={logoUrl}
              alt="PhysioXpert Logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="h-16 w-16 rounded-full object-cover shadow-lg border-2 border-white/30 mb-4"
            />
            <div className="text-center md:text-left">
              <span className="font-bold text-lg">PhysioXpert</span>
              <p className="text-xs text-blue-400">At Your Doorstep</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-3 text-center md:text-left">
              Expert physiotherapy care delivered to your home in Whitefield, Bengaluru.
            </p>
          </motion.div>

          {footerLinkGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <h3 className="font-semibold text-white mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <FooterNavLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer justify-center md:justify-start">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:+91${phoneNumber}`}>+91 {phoneNumber}</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer justify-center md:justify-start">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@physioxpert.com">info@physioxpert.com</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer justify-center md:justify-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Whitefield, Bengaluru</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 my-8" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs md:text-sm text-center md:text-left"
          >
            © {currentYear} PhysioXpert. All rights reserved. ·{" "}
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
            {" · "}
            <Link href="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            {" · "}
            <Link href="/careers" className="hover:text-blue-400 transition-colors">
              Careers
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
