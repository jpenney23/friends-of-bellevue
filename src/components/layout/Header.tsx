'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
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
        <Link href="/" className="flex items-center gap-3 focus:outline-none min-w-0 shrink">
          <div className="relative h-12 w-12 flex-shrink-0 drop-shadow-md">
            <Image
              src="/images/logo.jpg"
              alt="Friends of Bellevue"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold text-base leading-tight min-w-0 truncate drop-shadow-sm">
            <span className="text-fob-orange">Friends</span>{' '}
            <span className="text-fob-green">of</span>{' '}
            <span className="text-[#4a8fd6]">Bellevue</span>
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
        <div className="flex items-center gap-3 flex-shrink-0">
          <ThemeToggle scrolled={scrolled} />
          <Link
            href="/donate"
            className="flex items-center gap-2 bg-fob-orange hover:bg-fob-orange/85 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md transition-colors hover:shadow-lg touch-manipulation btn-shine"
          >
            <Heart className="size-4" />
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
