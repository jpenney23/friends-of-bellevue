'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const leaders = [
  {
    name: 'John DeVirgilio',
    title: 'President',
    tier: 'Officer',
    initials: 'JD',
    color: '#1B3E7A',
  },
  {
    name: 'Ted Arbo',
    title: 'Vice President',
    tier: 'Officer',
    initials: 'TA',
    color: '#1B3E7A',
  },
  {
    name: 'John Hastings',
    title: 'Founding Chair',
    tier: 'Officer',
    initials: 'JH',
    color: '#1B3E7A',
  },
  {
    name: 'Giro Iuliano',
    title: 'Tournament Chair',
    tier: 'Committee',
    initials: 'GI',
    color: '#2E7D32',
  },
  {
    name: 'Bob McConaghy',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'BM',
    color: '#2E7D32',
  },
  {
    name: 'Lou Iuliano',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'LI',
    color: '#2E7D32',
  },
  {
    name: 'Dan Cotton',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'DC',
    color: '#2E7D32',
  },
  {
    name: 'Alex Zedros',
    title: 'Committee Chair',
    tier: 'Committee',
    initials: 'AZ',
    color: '#2E7D32',
  },
];

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const officers = leaders.filter((l) => l.tier === 'Officer');
  const committee = leaders.filter((l) => l.tier === 'Committee');

  return (
    <section id="leadership" className="bg-white dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold uppercase tracking-widest text-fob-navy text-center mb-8"
          >
            Officers
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {officers.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-white/10 my-10" />

        {/* Committee */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-sm font-bold uppercase tracking-widest text-fob-green text-center mb-8"
          >
            Committee Chairs
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {committee.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i + 3} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonCard({
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
      className="flex flex-col items-center text-center p-5 rounded-2xl bg-gray-50 dark:bg-[#141e34] hover:bg-gray-100 dark:hover:bg-[#141e34]/80 transition-colors"
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg mb-3 shadow-md"
        style={{ backgroundColor: person.color }}
      >
        {person.initials}
      </div>
      <p className="font-bold text-fob-dark-navy dark:text-white text-sm leading-tight">{person.name}</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{person.title}</p>
    </motion.div>
  );
}
