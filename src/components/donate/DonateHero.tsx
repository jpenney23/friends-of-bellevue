'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function DonateHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 overflow-hidden dark:bg-[#0b1120]"
    >
      {/* Gradient background — light mode only */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{ background: 'linear-gradient(135deg, #E8671A 0%, #0F3060 60%, #1B5EA8 100%)' }}
      />
      {/* Blob decorations — light mode only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden">
        <div
          className="blob blob-delay-0 absolute w-80 h-80 opacity-15"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            top: '-5%',
            right: '10%',
          }}
        />
        <div
          className="blob blob-delay-2 absolute w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, #E8671A 0%, transparent 70%)',
            bottom: '-10%',
            left: '5%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* FOB Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <Image
              src="/images/logo.jpg"
              alt="Friends of Bellevue for the Cause"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white dark:text-white mb-4"
        >
          Make a Difference Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
        >
          100% of every donation goes directly to our partner charities — Dana-Farber, Bread of Life, and MS research.
        </motion.p>

        {/* Fundraising progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 dark:bg-[#141e34] backdrop-blur-sm rounded-2xl p-6 text-left"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-white dark:text-white font-bold text-lg">$70,000 raised</span>
            <span className="text-white/60 dark:text-gray-400 text-sm">Goal: $100,000</span>
          </div>
          <div className="h-3 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '70%' } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="h-full bg-fob-orange rounded-full"
            />
          </div>
          <p className="text-white/60 text-xs mt-2">70% of goal reached — help us get to $100,000!</p>
        </motion.div>
      </div>
    </section>
  );
}
