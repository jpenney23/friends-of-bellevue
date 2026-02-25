'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Car } from 'lucide-react';

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="bg-gray-50 dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white">
            Find Us
          </h2>
          <div className="fob-accent-bar mx-auto" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            All events are held at Bellevue Golf Club in Melrose, MA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10"
          >
            <iframe
              title="Bellevue Golf Club location"
              src="https://maps.google.com/maps?q=320+Porter+St+Melrose+MA+02176&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="bg-white dark:bg-[#141e34] rounded-2xl border border-gray-100 dark:border-white/10 p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-fob-navy/10 dark:bg-fob-navy/20 flex items-center justify-center shrink-0">
                  <MapPin className="size-4 text-fob-navy" />
                </div>
                <div>
                  <p className="font-bold text-fob-dark-navy dark:text-white text-sm mb-0.5">
                    Bellevue Golf Club
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    320 Porter St<br />
                    Melrose, MA 02176
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-fob-orange/10 dark:bg-fob-orange/20 flex items-center justify-center shrink-0">
                  <Car className="size-4 text-fob-orange" />
                </div>
                <div>
                  <p className="font-bold text-fob-dark-navy dark:text-white text-sm mb-0.5">Parking</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Free on-site parking available for all events
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-fob-green/10 dark:bg-fob-green/20 flex items-center justify-center shrink-0">
                  <Clock className="size-4 text-fob-green" />
                </div>
                <div>
                  <p className="font-bold text-fob-dark-navy dark:text-white text-sm mb-0.5">Event Hours</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Vary by event — check upcoming events for details
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/maps?q=320+Porter+St+Melrose+MA+02176"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-fob-navy text-fob-navy dark:text-white dark:border-white/30 font-semibold text-sm hover:bg-fob-navy hover:text-white dark:hover:bg-white/10 transition-all"
            >
              <MapPin className="size-4" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
