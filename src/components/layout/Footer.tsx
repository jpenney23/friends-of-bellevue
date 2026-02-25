'use client';

import { Heart, Mail, MapPin } from 'lucide-react';

const footerNav = [
  { name: 'About', href: '#mission' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Charities', href: '#charities' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Leadership', href: '#leadership' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-fob-dark-navy dark:bg-[#0b1120] dark:border-t dark:border-white/5 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Heart className="size-6 text-fob-orange" />
              <div>
                <p className="font-bold text-lg leading-tight">Friends of Bellevue</p>
                <p className="text-sm text-white/60">for the Cause</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Uniting community. Funding hope. A 501(c)(3) golf club charity raising money
              for cancer research, hunger relief, and neurological disease.
            </p>
            <p className="text-white/50 text-xs">
              501(c)(3) Pending — EIN: TBD
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="size-4 text-fob-orange mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">info@friendsofbellevue.org</span>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="size-4 text-fob-green mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm text-left">
                  Bellevue Golf Club<br />
                  320 Porter St<br />
                  Melrose, MA 02176
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © 2026 Friends of Bellevue for the Cause. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with <Heart className="size-3 inline text-fob-orange mx-0.5" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
