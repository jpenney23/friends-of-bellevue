'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Utensils, Brain } from 'lucide-react';

const charities = [
  {
    name: 'Dana-Farber Cancer Institute',
    icon: Heart,
    iconColor: '#1B5EA8',
    bgColor: 'bg-blue-50 dark:bg-white/10',
    borderColor: 'border-fob-navy',
    badge: 'Primary Beneficiary',
    badgeColor: 'bg-fob-navy text-white',
    description:
      'Dana-Farber is one of the world\'s leading cancer research and treatment centers. FOB\'s fundraising directly supports their groundbreaking research into life-saving cancer treatments. We have donated over $150,000 to Dana-Farber to date.',
    impact: '$150,000+ donated',
    impactColor: '#1B5EA8',
  },
  {
    name: 'Bread of Life',
    icon: Utensils,
    iconColor: '#3A9E42',
    bgColor: 'bg-green-50 dark:bg-white/10',
    borderColor: 'border-fob-green',
    badge: 'Community Partner',
    badgeColor: 'bg-fob-green text-white',
    description:
      'Bread of Life is a community organization providing hunger relief and essential services to families in need. FOB supports their mission of ensuring no one in our community goes without food or shelter.',
    impact: 'Supporting local families',
    impactColor: '#3A9E42',
  },
  {
    name: 'Multiple Sclerosis Initiative',
    icon: Brain,
    iconColor: '#E8671A',
    bgColor: 'bg-orange-50 dark:bg-white/10',
    borderColor: 'border-fob-orange',
    badge: 'Charity Partner',
    badgeColor: 'bg-fob-orange text-white',
    description:
      'FOB supports MS research and patient assistance programs, funding efforts to improve the quality of life for those living with Multiple Sclerosis and to accelerate progress toward a cure.',
    impact: 'Neurological research',
    impactColor: '#E8671A',
  },
];

export default function CharitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="charities" className="bg-gray-50 dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white">
            Charities We Support
          </h2>
          <div className="fob-accent-bar mx-auto" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Every dollar raised at our events goes directly to these incredible organizations
            making a real difference in people's lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {charities.map((charity, i) => {
            const Icon = charity.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`bg-white dark:bg-[#141e34] rounded-2xl border-2 ${charity.borderColor} shadow-sm hover:shadow-lg transition-shadow p-6`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${charity.bgColor} p-3 rounded-xl`}>
                    <Icon className="size-6" style={{ color: charity.iconColor }} />
                  </div>
                  <span className={`${charity.badgeColor} text-xs font-bold px-2.5 py-1 rounded-full`}>
                    {charity.badge}
                  </span>
                </div>

                <h3 className="font-black text-fob-dark-navy dark:text-white text-xl mb-3">{charity.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{charity.description}</p>

                <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                  <p className="text-xs font-bold" style={{ color: charity.impactColor }}>
                    FOB Impact: {charity.impact}
                  </p>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: charities.length * 0.15 }}
            className="bg-white dark:bg-[#141e34] rounded-2xl border-2 border-dashed border-gray-300 dark:border-white/20 shadow-sm p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-black text-gray-400 dark:text-white/40">+</span>
            </div>
            <h3 className="font-black text-fob-dark-navy dark:text-white text-xl mb-2">More Coming Soon</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              We are always looking to expand our charitable impact. Stay tuned for new partnerships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
