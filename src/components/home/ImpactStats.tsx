'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Stat {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  colorClass: string;
  noFormat?: boolean;
}

const stats: Stat[] = [
  {
    prefix: '$',
    value: 70000,
    suffix: '+',
    label: 'Total Raised',
    sublabel: 'In charitable giving across all events since our founding',
    colorClass: 'text-fob-orange',
  },
  {
    value: 6,
    label: 'Years Strong',
    sublabel: 'Serving the Bellevue community since 2019',
    colorClass: 'text-[#3A9E42]',
  },
  {
    value: 600,
    suffix: '+',
    label: 'Lives Changed',
    sublabel: 'Individuals and families touched by our charitable work',
    colorClass: 'text-fob-orange',
  },
  {
    value: 3,
    label: 'Causes',
    sublabel: 'Dana-Farber, Bread of Life & MS Research',
    colorClass: 'text-[#3A9E42]',
  },
];

function AnimatedCounter({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const formatted =
    !stat.noFormat && stat.value >= 1000
      ? count.toLocaleString()
      : count.toString();

  return (
    <span className="tabular-nums">
      {stat.prefix || ''}
      {formatted}
      {stat.suffix || ''}
    </span>
  );
}

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="bg-[#0F3060] dark:bg-[#0b1120] dark:border-t dark:border-b dark:border-white/15 py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Our Impact
          </h2>
          <div className="fob-accent-bar fob-accent-bar-dark mx-auto" />
          <p className="text-white/60 max-w-xl mx-auto">
            Since 2019, Friends of Bellevue has grown into a powerful force for good
            in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <div
                className={cn('text-4xl md:text-5xl font-black mb-2 fob-stat-value', stat.colorClass)}
              >
                <AnimatedCounter stat={stat} isVisible={isInView} />
              </div>
              <p className="text-white font-bold text-lg mb-1">{stat.label}</p>
              <p className="text-white/50 text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
