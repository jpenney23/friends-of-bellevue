'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Users, Heart } from 'lucide-react';

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="mission" className="bg-white dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-2 bg-fob-navy/10 text-fob-navy text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                <Calendar className="size-3" />
                Established 2019
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white leading-tight">
              Our Mission
            </h2>
            <div className="fob-accent-bar" />

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Friends of Bellevue for the Cause (FOB) is a golf club charity dedicated
              to uniting the Bellevue community and raising funds for impactful charitable
              organizations. Through our annual golf tournament and community events, we
              bring together neighbors, friends, and local businesses to make a lasting
              difference.
            </p>

            {/* Founding story highlight */}
            <div className="border-l-4 border-fob-green pl-5 py-2 bg-green-50 dark:bg-green-950/30 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                Founded in 2019 by a dedicated group of Bellevue residents with a shared passion
                for golf and giving back, FOB has grown from a small gathering into a cornerstone
                of our community's charitable efforts — donating over $150,000 to date.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#141e34] rounded-xl">
                <Users className="size-5 text-fob-navy mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-fob-dark-navy dark:text-white text-sm">Community</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">in the Bellevue community</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/event-5-group.jpeg"
                alt="FOB community gathering with Dana-Farber banner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fob-dark-navy/40 to-transparent" />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <p className="font-bold text-fob-dark-navy text-sm">
                    Annual Golf Tournament & Community Event
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    67 Bainbridge St — Malden, MA
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-fob-orange/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fob-navy/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
