'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  {
    src: '/images/event-1-indoor.jpeg',
    alt: 'FOB indoor community gathering',
    caption: 'Community Night',
  },
  {
    src: '/images/event-5-group.jpeg',
    alt: 'Large group gathering with Dana-Farber banner',
    caption: 'Dana-Farber Fundraiser',
    tall: true,
  },
  {
    src: '/images/event-2-firepit.jpeg',
    alt: 'Friends gathered around fire pit at golf course',
    caption: 'Golf Course Gathering',
  },
  {
    src: '/images/event-6-banner.jpeg',
    alt: 'Members with Dana-Farber banner',
    caption: 'Supporting Dana-Farber',
  },
  {
    src: '/images/event-3-patio.jpeg',
    alt: 'Patio gathering at Bellevue Golf Club',
    caption: 'Patio Social',
    tall: true,
  },
  {
    src: '/images/event-4-dinner.jpeg',
    alt: 'Wine toast at charity dinner',
    caption: 'Annual Celebration Dinner',
  },
];

export default function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-white dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white">
            Community &amp; Events
          </h2>
          <div className="fob-accent-bar mx-auto" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Glimpses of the friendships, fun, and community spirit that make FOB special.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setLightboxIndex(i)}
            >
              <div className={`relative ${photo.tall ? 'h-72' : 'h-52'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-fob-dark-navy/0 group-hover:bg-fob-dark-navy/50 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X className="size-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white/80 text-sm py-3 bg-black/50">
                {photos[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
