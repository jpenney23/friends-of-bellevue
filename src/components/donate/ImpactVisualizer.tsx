'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Utensils, Brain } from 'lucide-react';

const impacts = [
  {
    Icon: Heart,
    title: 'Cancer Research',
    description: 'Supporting Dana-Farber\'s groundbreaking work in life-saving cancer treatments and clinical trials.',
    borderColor: 'border-fob-navy',
    accentColor: 'text-fob-navy',
    iconColor: 'text-fob-navy',
  },
  {
    Icon: Utensils,
    title: 'Hunger Relief',
    description: 'Helping Bread of Life provide meals and essential services to families in our community.',
    borderColor: 'border-fob-green',
    accentColor: 'text-fob-green',
    iconColor: 'text-fob-green',
  },
  {
    Icon: Brain,
    title: 'MS Research',
    description: 'Funding Multiple Sclerosis research and patient assistance programs to improve quality of life.',
    borderColor: 'border-fob-orange',
    accentColor: 'text-fob-orange',
    iconColor: 'text-fob-orange',
  },
];

export default function ImpactVisualizer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-[#0b1120] dark:border-t dark:border-white/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white mb-3">
            Where Your Money Goes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Every dollar you donate goes directly to organizations making real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`bg-white dark:bg-[#141e34] rounded-2xl border-t-4 ${item.borderColor} p-6 shadow-sm hover:shadow-lg transition-shadow`}
            >
              <div className="mb-4">
                <item.Icon className={`size-8 ${item.iconColor}`} />
              </div>
              <h3 className={`font-black text-xl mb-2 ${item.accentColor}`}>{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
