'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="relative py-24 overflow-hidden dark:bg-[#0b1120] dark:border-t dark:border-white/15" ref={ref}>
      {/* Navy/blue gradient background — light mode only */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F3060] via-[#1B5EA8] to-[#1B5EA8]/80 dark:hidden" />
      {/* Decorative blobs — light mode only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden dark:hidden">
        <div
          className="blob absolute w-80 h-80 opacity-15"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            top: '-10%',
            right: '10%',
          }}
        />
        <div
          className="blob blob-delay-4 absolute w-64 h-64 opacity-10"
          style={{
            background: 'radial-gradient(circle, #3A9E42 0%, transparent 70%)',
            bottom: '-5%',
            left: '15%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <div className="bg-white/20 rounded-full p-4">
              <Mail className="size-8 text-white" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Stay Connected with FOB
            </h2>
            <div className="fob-accent-bar fob-accent-bar-dark mx-auto" />
            <p className="text-white/80 text-lg max-w-lg mx-auto">
              Be the first to hear about upcoming events and charitable initiatives.
            </p>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/30 focus:border-white/60 text-sm font-medium transition-all"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-fob-orange text-white font-bold rounded-full hover:bg-fob-orange/85 transition-all hover:shadow-lg hover:scale-105 text-sm touch-manipulation whitespace-nowrap btn-shine"
              >
                {submitted ? (
                  <>
                    <Check className="size-4" />
                    Thank you!
                  </>
                ) : (
                  <>
                    Join Us
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-white/50 text-xs">
            No spam, ever. Unsubscribe at any time.
          </p>

          {/* Donate note */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              Ready to make a direct impact? Donate to our cause.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white font-bold px-6 py-3 rounded-full hover:bg-white/30 transition-all touch-manipulation text-sm"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
