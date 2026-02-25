'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'About', href: '#mission' },
  { name: 'Mission', href: '#charities' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Sponsors', href: '#sponsors' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 dark:bg-[#141e34]/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-fob-orange/20'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none">
          <div className={cn("relative h-12 w-12 rounded-full overflow-hidden border-2 shadow-md", scrolled ? "border-fob-navy/20 dark:border-white/40" : "border-white/40")}>
            <Image
              src="/images/logo.jpg"
              alt="Friends of Bellevue for the Cause"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span
            className={cn(
              'hidden sm:block font-bold text-sm leading-tight transition-colors',
              scrolled ? 'text-fob-navy dark:text-white' : 'text-white'
            )}
          >
            Friends of Bellevue<br />
            <span className="font-normal text-xs opacity-80">for the Cause</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors hover:opacity-80',
                scrolled ? 'text-fob-navy dark:text-white' : 'text-white'
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle scrolled={scrolled} />
          <Link
            href="/donate"
            className="hidden sm:flex items-center gap-2 bg-fob-orange hover:bg-fob-orange/85 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105 touch-manipulation btn-shine"
          >
            <Heart className="size-4" />
            Donate
          </Link>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-md transition-colors',
              scrolled ? 'text-fob-navy dark:text-white' : 'text-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/98 dark:bg-[#141e34]/98 backdrop-blur-md border-t border-gray-100 dark:border-white/10 shadow-xl"
          >
            <div className="px-6 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left text-sm font-semibold text-fob-navy dark:text-white py-2 border-b border-gray-100 dark:border-white/10 last:border-0 hover:text-fob-orange transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 bg-fob-orange text-white font-semibold text-sm px-4 py-3 rounded-full w-full justify-center mt-2 btn-shine"
              >
                <Heart className="size-4" />
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
