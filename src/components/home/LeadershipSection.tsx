'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const leaders = [
  {
    name: 'John DeVirgilio',
    title: 'President',
    tier: 'Officer',
    initials: 'JD',
    gradient: 'from-[#0F3060] to-[#1B5EA8]',
  },
  {
    name: 'Ted Arbo',
    title: 'Vice President',
    tier: 'Officer',
    initials: 'TA',
    gradient: 'from-[#0F3060] to-[#1B5EA8]',
  },
  {
    name: 'John Hastings',
    title: 'Treasurer',
    tier: 'Officer',
    initials: 'JH',
    gradient: 'from-[#0F3060] to-[#1B5EA8]',
  },
  {
    name: 'Bill Boudreau',
    title: 'Counsel Chair',
    tier: 'Officer',
    initials: 'BB',
    gradient: 'from-[#0F3060] to-[#1B5EA8]',
  },
  {
    name: 'Karla McDonald',
    title: 'Secretary',
    tier: 'Officer',
    initials: 'KM',
    gradient: 'from-[#0F3060] to-[#1B5EA8]',
  },
  {
    name: 'Steve Lomanno',
    title: 'Financial Officer',
    tier: 'Officer',
    initials: 'SL',
    gradient: 'from-[#0F3060] to-[#1B5EA8]',
  },
  {
    name: 'Giro Iuliano',
    title: 'Tournament Chair',
    tier: 'Committee',
    initials: 'GI',
    gradient: 'from-[#2E7D32] to-[#3A9E42]',
  },
  {
    name: 'Bob McConaghy',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'BM',
    gradient: 'from-[#2E7D32] to-[#3A9E42]',
  },
  {
    name: 'Lou Iuliano',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'LI',
    gradient: 'from-[#2E7D32] to-[#3A9E42]',
  },
  {
    name: 'Alex Zedros',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'AZ',
    gradient: 'from-[#2E7D32] to-[#3A9E42]',
  },
];

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const officers = leaders.filter((l) => l.tier === 'Officer');
  const committee = leaders.filter((l) => l.tier === 'Committee');

  return (
    <section id="leadership" className="bg-gray-50 dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white">
            Our Leadership
          </h2>
          <div className="fob-accent-bar mx-auto" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Dedicated volunteers who make Friends of Bellevue possible, giving their time
            to build community and support charitable causes.
          </p>
        </motion.div>

        {/* Officers */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-fob-navy/20 dark:to-white/10" />
            <span className="text-xs font-black uppercase tracking-widest text-fob-navy dark:text-white/60 px-3 py-1.5 rounded-full border border-fob-navy/20 dark:border-white/10">
              Officers
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-fob-navy/20 dark:to-white/10" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {officers.map((person, i) => (
              <OfficerCard key={person.name} person={person} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Committee */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-fob-green/20 dark:to-white/10" />
            <span className="text-xs font-black uppercase tracking-widest text-fob-green dark:text-white/60 px-3 py-1.5 rounded-full border border-fob-green/20 dark:border-white/10">
              Committee Chairs
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-fob-green/20 dark:to-white/10" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {committee.map((person, i) => (
              <CommitteeCard key={person.name} person={person} index={i + officers.length} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficerCard({
  person,
  index,
  isInView,
}: {
  person: (typeof leaders)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-center gap-4 bg-white dark:bg-[#141e34] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white font-black text-sm shadow-md flex-shrink-0`}
      >
        {person.initials}
      </div>
      <div className="min-w-0">
        <p className="font-bold text-fob-dark-navy dark:text-white text-sm leading-tight truncate">{person.name}</p>
        <p className="text-fob-navy/60 dark:text-gray-400 text-xs mt-0.5">{person.title}</p>
      </div>
    </motion.div>
  );
}

function CommitteeCard({
  person,
  index,
  isInView,
}: {
  person: (typeof leaders)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center text-center bg-white dark:bg-[#141e34] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div
        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white font-black text-sm shadow-md mb-3`}
      >
        {person.initials}
      </div>
      <p className="font-bold text-fob-dark-navy dark:text-white text-sm leading-tight">{person.name}</p>
      <p className="text-fob-green/70 dark:text-gray-400 text-xs mt-0.5">{person.title}</p>
    </motion.div>
  );
}
