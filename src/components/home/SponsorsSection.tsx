'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Building2, Car, ShoppingBag } from 'lucide-react';

const sponsors = [
  {
    name: 'Citizens Bank',
    tier: 'Major Sponsor — Pending',
    icon: Building2,
    iconColor: '#1B3E7A',
    bgColor: 'bg-blue-50 dark:bg-blue-500/20',
    description: 'Pending partnership with Citizens Bank to support our annual golf tournament and charitable giving initiatives.',
    pending: true,
  },
  {
    name: 'Tulley Motors',
    tier: 'Presenting Sponsor',
    icon: Car,
    iconColor: '#D4500A',
    bgColor: 'bg-orange-50 dark:bg-orange-500/20',
    description: 'A proud local sponsor supporting Friends of Bellevue in its mission to give back to the community through charitable events.',
    pending: false,
  },
  {
    name: 'Accardi Foods',
    tier: 'Community Sponsor',
    icon: ShoppingBag,
    iconColor: '#3A9E42',
    bgColor: 'bg-green-50 dark:bg-green-500/20',
    description: 'Local food distributor and community partner, helping fuel our events and supporting our charitable mission across the Bellevue area.',
    pending: false,
  },
];

export default function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sponsors" className="bg-[#0F3060] dark:bg-[#0b1120] dark:border-t dark:border-b dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Our Major Sponsors
          </h2>
          <div className="fob-accent-bar fob-accent-bar-dark mx-auto" />
          <p className="text-white/60 max-w-xl mx-auto">
            Our generous sponsors make it possible for us to put on world-class events
            and maximize funds raised for charity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {sponsors.map((sponsor, i) => {
            const Icon = sponsor.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${sponsor.bgColor} p-3 rounded-xl`}>
                    <Icon className="size-6" style={{ color: sponsor.iconColor }} />
                  </div>
                  {sponsor.pending && (
                    <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-2 py-1 rounded-full">
                      Pending
                    </span>
                  )}
                </div>

                <h3 className="font-black text-white text-xl mb-1">{sponsor.name}</h3>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
                  {sponsor.tier}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{sponsor.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center border-t border-white/10 pt-10"
        >
          <p className="text-white/50 text-sm mb-4">
            Interested in becoming a sponsor and making a difference?
          </p>
          <button
            onClick={() => document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-fob-orange hover:bg-fob-orange/85 text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105 touch-manipulation btn-shine"
          >
            Get in Touch
            <ArrowRight className="size-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
