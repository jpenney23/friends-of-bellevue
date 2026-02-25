'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Shield, CreditCard, Wallet, Smartphone, DollarSign, Mail } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '@/lib/utils';

type Frequency = 'one-time' | 'monthly';
type Amount = 25 | 50 | 100 | 250 | 500 | 'custom';
type PaymentMethod = 'card' | 'paypal' | 'applepay' | 'venmo' | 'check';

const impactText: Record<string, string> = {
  '25': 'Covers supplies for one round of cancer research',
  '50': 'Sponsors a golf hole at our tournament',
  '100': 'Funds a month of meals for 2 families',
  '250': 'Directly funds breakthrough cancer research',
  '500': 'Becomes a FOB community champion',
};

const amounts: Amount[] = [25, 50, 100, 250, 500, 'custom'];

const paymentMethods = [
  {
    id: 'card' as PaymentMethod,
    label: 'Credit / Debit Card',
    Icon: CreditCard,
    badge: 'Coming Soon',
    badgeGreen: false,
  },
  {
    id: 'paypal' as PaymentMethod,
    label: 'PayPal',
    Icon: Wallet,
    badge: 'Coming Soon',
    badgeGreen: false,
  },
  {
    id: 'applepay' as PaymentMethod,
    label: 'Apple Pay',
    Icon: Smartphone,
    badge: 'Coming Soon',
    badgeGreen: false,
  },
  {
    id: 'venmo' as PaymentMethod,
    label: 'Venmo',
    Icon: DollarSign,
    badge: 'Coming Soon',
    badgeGreen: false,
  },
  {
    id: 'check' as PaymentMethod,
    label: 'Check by Mail',
    Icon: Mail,
    badge: 'Available Now',
    badgeGreen: true,
  },
];

export default function DonationAmountPicker() {
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<Amount>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('check');

  const displayAmount =
    selectedAmount === 'custom'
      ? customAmount
        ? `$${customAmount}`
        : '$—'
      : `$${selectedAmount}`;

  const impact = selectedAmount !== 'custom' ? impactText[String(selectedAmount)] : null;
  const isCheckSelected = selectedMethod === 'check';

  return (
    <section className="py-16 bg-white dark:bg-[#0b1120]">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#141e34] shadow-xl overflow-hidden">

          {/* ── Amount Picker ── */}
          <div className="p-8">
            {/* Frequency tabs */}
            <div className="flex gap-2 p-1 bg-gray-100 dark:bg-white/10 rounded-full mb-8">
              {(['one-time', 'monthly'] as Frequency[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={cn(
                    'flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all',
                    frequency === f
                      ? 'bg-white dark:bg-[#141e34] shadow-md text-fob-dark-navy dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  )}
                >
                  {f === 'one-time' ? 'One-Time' : 'Monthly'}
                </button>
              ))}
            </div>

            {/* Amount grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelectedAmount(a)}
                  className={cn(
                    'py-3 rounded-xl border-2 text-sm font-bold transition-all',
                    selectedAmount === a
                      ? 'border-fob-orange bg-fob-orange/5 scale-105 shadow-md text-fob-orange'
                      : 'border-gray-200 dark:border-white/15 text-fob-dark-navy dark:text-white hover:border-fob-orange/50'
                  )}
                >
                  {a === 'custom' ? 'Custom' : `$${a}`}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <AnimatePresence>
              {selectedAmount === 'custom' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="flex items-center border-2 border-fob-orange rounded-xl overflow-hidden">
                    <span className="px-4 py-3 bg-fob-orange/10 text-fob-orange font-bold text-lg">$</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="flex-1 px-4 py-3 bg-transparent outline-none text-fob-dark-navy dark:text-white placeholder:text-gray-400"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Impact text */}
            {impact && (
              <div className="mb-6 p-4 bg-fob-navy/5 dark:bg-fob-navy/20 rounded-xl border border-fob-navy/10 dark:border-fob-navy/30">
                <p className="text-fob-dark-navy dark:text-white text-sm font-medium">
                  <span className="text-fob-orange font-bold">Your impact:</span> {impact}
                </p>
              </div>
            )}
          </div>

          {/* ── Divider ── */}
          <div className="border-t border-gray-100 dark:border-white/10" />

          {/* ── Payment Method Selection ── */}
          <div className="p-8 pt-7">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
              Payment Method
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {paymentMethods.map(({ id, label, Icon, badge, badgeGreen }) => {
                const isSelected = selectedMethod === id;
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedMethod(id)}
                    className={cn(
                      'relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 text-left transition-all',
                      isSelected
                        ? 'border-fob-navy bg-fob-navy/5 dark:bg-fob-navy/15'
                        : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                    )}
                  >
                    {/* Badge */}
                    <span
                      className={cn(
                        'absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-tight',
                        badgeGreen
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                          : 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400'
                      )}
                    >
                      {badge}
                    </span>

                    {/* Icon circle */}
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                        isSelected
                          ? 'bg-fob-navy/10 dark:bg-fob-navy/30'
                          : 'bg-gray-100 dark:bg-white/10'
                      )}
                    >
                      <Icon
                        className={cn(
                          'size-5 transition-colors',
                          isSelected ? 'text-fob-navy' : 'text-gray-500 dark:text-gray-400'
                        )}
                      />
                    </div>

                    {/* Label */}
                    <span
                      className={cn(
                        'text-xs font-bold text-center leading-tight',
                        isSelected ? 'text-fob-navy dark:text-white' : 'text-gray-600 dark:text-gray-300'
                      )}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Payment method previews */}
            <AnimatePresence mode="wait">
              {selectedMethod === 'card' && (
                <motion.div
                  key="card"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 p-5 rounded-2xl border-2 border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-800 dark:text-gray-100 font-black text-lg tracking-tight">Card Payment</span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 uppercase tracking-wider">
                        Demo Preview
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-400 dark:text-gray-500 font-mono text-sm flex items-center justify-between">
                        <span>•••• •••• •••• ••••</span>
                        <div className="flex gap-1.5">
                          <span className="text-[10px] font-black px-1.5 py-0.5 bg-blue-600 text-white rounded">VISA</span>
                          <span className="text-[10px] font-black px-1.5 py-0.5 bg-red-500 text-white rounded">MC</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-400 dark:text-gray-500 text-sm">
                          MM / YY
                        </div>
                        <div className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-400 dark:text-gray-500 text-sm">
                          CVV
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-3">
                      Secure card processing — <span className="font-semibold">not yet active</span>
                    </p>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'paypal' && (
                <motion.div
                  key="paypal"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 p-5 rounded-2xl border-2 border-[#009cde]/30 bg-[#009cde]/5 dark:bg-[#009cde]/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-black text-xl tracking-tight">
                        <span className="text-[#003087] dark:text-[#4db8ff]">Pay</span>
                        <span className="text-[#009cde]">Pal</span>
                      </span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 uppercase tracking-wider">
                        Demo Preview
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-full py-3 rounded-full text-center text-white font-bold text-sm opacity-50 cursor-not-allowed bg-[#003087]">
                        Pay with PayPal
                      </div>
                      <div className="flex items-center gap-2 w-full">
                        <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                        <span className="text-xs text-gray-400">or</span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                      </div>
                      <div className="w-full py-3 rounded-full text-center font-bold text-sm opacity-50 cursor-not-allowed border-2 border-[#009cde] text-[#009cde]">
                        Pay in 4 · No fees
                      </div>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        PayPal checkout — <span className="font-semibold">not yet active</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'applepay' && (
                <motion.div
                  key="applepay"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 p-5 rounded-2xl border-2 border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-black text-xl text-gray-900 dark:text-white tracking-tight">Apple Pay</span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 uppercase tracking-wider">
                        Demo Preview
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-full py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-sm text-center opacity-50 cursor-not-allowed flex items-center justify-center gap-2">
                        <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.39.07 2.35.74 3.17.8 1.21-.26 2.37-.97 3.67-.84 1.55.17 2.72.75 3.47 1.91-3.19 1.93-2.42 6.17.69 7.37-.58 1.53-1.33 3.03-3 3.62zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        Pay
                      </div>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        Double-click side button to pay — <span className="font-semibold">not yet active</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'venmo' && (
                <motion.div
                  key="venmo"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 p-5 rounded-2xl border-2 border-[#008CFF]/30 bg-[#008CFF]/5 dark:bg-[#008CFF]/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#008CFF] font-black text-xl tracking-tight">venmo</span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 uppercase tracking-wider">
                        Demo Preview
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="bg-white p-4 rounded-2xl shadow-sm inline-block">
                        <QRCodeSVG
                          value="https://venmo.com/FriendsOfBellevue"
                          size={160}
                          fgColor="#008CFF"
                          bgColor="#FFFFFF"
                          level="M"
                        />
                      </div>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-[#008CFF]">@FriendsOfBellevue</span>
                        <br />
                        Scan with Venmo to pay — <span className="font-semibold">not yet active</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'check' && (
                <motion.div
                  key="check"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 p-5 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-200 dark:border-green-800/40">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400 mb-3">
                      Mailing Instructions
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                      <span className="font-semibold">Make check payable to:</span>
                    </p>
                    <p className="text-sm font-bold text-fob-dark-navy dark:text-white mb-3">
                      Friends of Bellevue for the Cause
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                      <span className="font-semibold">Mail to:</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bellevue Golf Club<br />
                      320 Porter St<br />
                      Melrose, MA 02176
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA button */}
            {isCheckSelected ? (
              <a
                href="mailto:info@friendsofbellevue.org?subject=Donation%20by%20Check"
                className="w-full flex items-center justify-center gap-2 py-4 bg-fob-orange text-white font-bold text-lg rounded-full shadow-lg hover:bg-fob-orange/85 transition-colors btn-shine"
              >
                <Mail className="size-5" />
                Donate {displayAmount} by Check
              </a>
            ) : (
              <button
                disabled
                className="w-full py-4 bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-gray-500 font-bold text-lg rounded-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}

            {/* Trust line */}
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-400 flex-wrap">
              <span className="flex items-center gap-1">
                <Lock className="size-3" /> 501(c)(3) Pending
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Shield className="size-3" /> Tax Deductible
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
