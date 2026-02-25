import { Shield, Lock, Heart, Receipt } from 'lucide-react';

const signals = [
  { icon: Shield, label: '501(c)(3) Pending', sub: 'Tax-exempt organization' },
  { icon: Lock, label: 'Secure & Private', sub: 'Bank-level encryption' },
  { icon: Heart, label: '100% to Charity', sub: 'Zero overhead taken' },
  { icon: Receipt, label: 'Tax Deductible', sub: 'Keep your receipt' },
];

export default function TrustSignals() {
  return (
    <section className="py-14 bg-gray-50 dark:bg-[#0b1120] border-t border-gray-100 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {signals.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-fob-navy/10 dark:bg-fob-navy/20 flex items-center justify-center">
                  <Icon className="size-5 text-fob-navy" />
                </div>
                <p className="font-bold text-fob-dark-navy dark:text-white text-sm">{item.label}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
