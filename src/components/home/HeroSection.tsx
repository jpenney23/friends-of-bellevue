'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Heart } from 'lucide-react';

export default function HeroSection() {
  const scrollToMission = () => {
    document.querySelector('#mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Photo background */}
      <div className="absolute inset-0">
        <Image
          src="/images/event-5-group.jpeg"
          alt="FOB community gathering"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay: slightly lighter in light mode, darker in dark */}
        <div className="absolute inset-0 bg-fob-dark-navy/55 dark:bg-black/70" />
        {/* Bottom gradient for smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-fob-dark-navy/70 via-transparent to-transparent dark:from-black/80" />
      </div>

      {/* Subtle color blobs over photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob blob-delay-0 absolute w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, #E8671A 0%, transparent 70%)',
            top: '5%',
            right: '10%',
          }}
        />
        <div
          className="blob blob-delay-2 absolute w-[500px] h-[500px] opacity-8"
          style={{
            background: 'radial-gradient(circle, #3A9E42 0%, transparent 70%)',
            bottom: '10%',
            left: '5%',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Logo + name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 flex flex-col items-center gap-3"
        >
          <div className="relative w-36 h-36 mx-auto drop-shadow-xl">
            <Image
              src="/images/logo.jpg"
              alt="Friends of Bellevue for the Cause"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-white font-black text-2xl md:text-3xl leading-tight drop-shadow-md">
            Friends of Bellevue
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 drop-shadow-lg">
            Uniting Community.
            <br />
            <span className="text-fob-orange">Funding Hope.</span>
          </h1>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={scrollToMission}
            className="px-7 py-3 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-fob-dark-navy transition-all hover:shadow-lg touch-manipulation"
          >
            Learn More
          </button>
          <Link
            href="/donate"
            className="px-7 py-3 rounded-full bg-fob-orange text-white font-bold text-sm hover:bg-fob-orange/85 transition-all hover:shadow-lg flex items-center gap-2 touch-manipulation btn-shine"
          >
            <Heart className="size-4" />
            Donate
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToMission}
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="size-5 bounce-slow" />
        </button>
      </motion.div>
    </section>
  );
}
