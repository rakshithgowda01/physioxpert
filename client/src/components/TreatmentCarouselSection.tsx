import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

/**
 * Treatment images:
 * - Put WebP files in client/public/treatments/ matching `file` (e.g. manual-therapy.webp).
 * - Optional: set `imageUrl` to a full https URL to use it instead of the local file.
 * - If the primary image fails to load, `fallback` is used.
 */
const slideData: {
  title: string;
  button: string;
  file: string;
  /** Optional: full https URL to your photo; overrides /treatments/{file} when set */
  imageUrl?: string;
  fallback: string;
}[] = [
  {
    title: "Manual Therapy",
    button: "Pain Relief Treatment",
    file: "manual-therapy.webp",
    fallback:
      "https://images.unsplash.com/photo-1588776814546-ec7e1b47d7f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Home Physiotherapy",
    button: "At Your Doorstep",
    file: "home-physiotherapy.webp",
    fallback:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sports Injury Rehab",
    button: "Recovery & Strength",
    file: "sports-rehab.webp",
    fallback:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Elderly Care Therapy",
    button: "Safe & Personalized",
    file: "elderly-care.webp",
    fallback:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
];

function TreatmentSlideImage({
  title,
  primarySrc,
  fallbackSrc,
}: {
  title: string;
  primarySrc: string;
  fallbackSrc: string;
}) {
  const [src, setSrc] = useState(primarySrc);

  const onError = useCallback(() => {
    setSrc((current) => (current !== fallbackSrc ? fallbackSrc : current));
  }, [fallbackSrc]);

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      decoding="async"
      onError={onError}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
    />
  );
}

export default function TreatmentCarouselSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const phoneNumber = "6360196357";
  const whatsappMessage = "Hi, I'd like to book a physiotherapy session with PhysioXpert.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="treatments"
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8 md:space-y-10"
        >
          <motion.div variants={itemVariants} className="text-center space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Treatments in Action
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Real therapy sessions focused on recovery and care
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center w-full px-2 sm:px-4">
            {/* Fixed 4:3 frame — all slides share the same aspect ratio */}
            <div className="w-full max-w-3xl">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                  duration: 40,
                  dragFree: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3 sm:-ml-4">
                  {slideData.map((slide, index) => (
                    <CarouselItem key={slide.file} className="pl-3 sm:pl-4 basis-full">
                      <motion.div
                        initial={{ opacity: 0.85, scale: 0.98 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0.85, scale: 0.98 }
                        }
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1] as const,
                          delay: index * 0.05,
                        }}
                        className="group relative w-full overflow-hidden rounded-2xl bg-gray-200 shadow-xl ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <TreatmentSlideImage
                            title={slide.title}
                            primarySrc={
                              slide.imageUrl?.trim()
                                ? slide.imageUrl.trim()
                                : `/treatments/${slide.file}`
                            }
                            fallbackSrc={slide.fallback}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
                          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
                            <div className="space-y-3">
                              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                                {slide.title}
                              </h3>
                              <p className="text-sm md:text-base text-gray-100">
                                {slide.button}
                              </p>
                              <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="inline-block"
                              >
                                <Button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-4 md:px-6 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm transition-colors duration-300">
                                  <MessageCircle className="w-4 h-4" />
                                  Book Now
                                </Button>
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="hidden md:block">
                  <CarouselPrevious className="left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 border-0 shadow-lg transition-transform duration-200 hover:scale-105" />
                  <CarouselNext className="right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 border-0 shadow-lg transition-transform duration-200 hover:scale-105" />
                </div>
              </Carousel>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-2">
            {slideData.map((_, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  index === selectedIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-gray-600 text-sm md:text-base"
          >
            <p>✓ All treatments delivered with care and expertise by Dr. Lohith</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
