'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

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
            All events are held at 67 Bainbridge St, Malden, MA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 min-h-[360px]"
          >
            <iframe
              title="Friends of Bellevue location"
              src="https://maps.google.com/maps?q=67+Bainbridge+St+Malden+MA+02148&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '360px' }}
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
            className="flex flex-col gap-4"
          >
            {/* Address card */}
            <div className="bg-white dark:bg-[#141e34] rounded-2xl border border-gray-100 dark:border-white/10 p-6 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F3060] to-[#1B5EA8] flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="size-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-fob-dark-navy dark:text-white text-sm mb-1">Address</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  67 Bainbridge St<br />
                  Malden, MA 02148
                </p>
              </div>
            </div>

            {/* Event hours card */}
            <div className="bg-white dark:bg-[#141e34] rounded-2xl border border-gray-100 dark:border-white/10 p-6 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#3A9E42] flex items-center justify-center shrink-0 shadow-md">
                <Clock className="size-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-fob-dark-navy dark:text-white text-sm mb-1">Event Hours</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Vary by event — check upcoming events for details
                </p>
              </div>
            </div>

            {/* Google Maps button */}
            <a
              href="https://maps.google.com/maps?q=67+Bainbridge+St+Malden+MA+02148"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0F3060] to-[#1B5EA8] text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg transition-all shadow-md"
            >
              <ExternalLink className="size-4" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
