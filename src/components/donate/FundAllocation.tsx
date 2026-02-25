'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const allocations = [
  { label: 'Dana-Farber Cancer Institute', percent: 70, colorClass: 'bg-fob-navy' },
  { label: 'Bread of Life', percent: 20, colorClass: 'bg-fob-green' },
  { label: 'MS Initiative', percent: 10, colorClass: 'bg-fob-orange' },
];

export default function FundAllocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-fob-dark-navy dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Fund Allocation
          </h2>
          <p className="text-white/60 text-lg font-medium">
            100% of every donation goes to our partner charities. Zero overhead.
          </p>
        </motion.div>

        <div className="space-y-6">
          {allocations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold text-sm">{item.label}</span>
                <span className="text-white/60 font-bold text-sm">{item.percent}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={isInView ? { width: `${item.percent}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                  className={`h-full ${item.colorClass} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            Friends of Bellevue operates with volunteer leadership. Administrative costs are covered separately,
            ensuring your donation reaches those who need it most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
