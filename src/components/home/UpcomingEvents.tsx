'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Flag, Users, Heart } from 'lucide-react';
import { upcomingEvents } from '@/lib/data/events';

const typeConfig = {
  golf: { Icon: Flag, color: '#1B5EA8', bg: 'bg-blue-50 dark:bg-white/10' },
  social: { Icon: Users, color: '#3A9E42', bg: 'bg-green-50 dark:bg-white/10' },
  fundraiser: { Icon: Heart, color: '#E8671A', bg: 'bg-orange-50 dark:bg-white/10' },
};

function EventCard({ event, index }: { event: typeof upcomingEvents[0]; index: number }) {
  const config = typeConfig[event.type];
  const [year, month, day] = event.date.split('-');
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
  const monthStr = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white dark:bg-[#141e34] rounded-2xl shadow-md border border-gray-100 dark:border-white/10 overflow-hidden hover:shadow-xl transition-shadow group"
    >
      {/* Date badge bar */}
      <div className="h-2" style={{ backgroundColor: config.color }} />

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Date badge */}
          <div
            className="flex-shrink-0 text-center rounded-xl px-3 py-2 min-w-[60px]"
            style={{ backgroundColor: `${config.color}15`, color: config.color }}
          >
            <p className="text-xs font-bold tracking-wider">{monthStr}</p>
            <p className="text-2xl font-black leading-none">{day}</p>
            <p className="text-xs font-medium opacity-70">{year}</p>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <config.Icon className="size-4" style={{ color: config.color }} />
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: config.color }}
              >
                {event.type}
              </span>
            </div>
            <h3 className="font-black text-fob-dark-navy dark:text-white text-lg leading-tight mb-2">
              {event.title}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs mb-3">
              <MapPin className="size-3" />
              {event.location}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{event.description}</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {event.registrationOpen ? 'Registration open' : 'Stay tuned for details'}
          </p>
          <button
            className="flex items-center gap-1.5 text-xs font-semibold text-fob-navy dark:text-white hover:text-fob-orange transition-colors group-hover:gap-2.5"
            onClick={() => document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Register Interest
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function UpcomingEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="events" className="bg-gray-50 dark:bg-[#0b1120] dark:border-t dark:border-white/15 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white">
            Upcoming Events
          </h2>
          <div className="fob-accent-bar mx-auto" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Join us at our next gathering. All events benefit our partner charities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {upcomingEvents.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10"
        >
          Stay tuned — more events will be announced soon.{' '}
          <button
            onClick={() => document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            className="underline text-fob-navy dark:text-white hover:text-fob-orange transition-colors"
          >
            Join our newsletter
          </button>{' '}
          to be the first to know.
        </motion.p>
      </div>
    </section>
  );
}
