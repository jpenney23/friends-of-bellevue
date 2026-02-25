'use client';

const donors = [
  { name: 'John D.', amount: '$250', message: 'Keep up the amazing work!' },
  { name: 'Sarah M.', amount: '$100', message: 'For Dana-Farber 💙' },
  { name: 'Mike T.', amount: '$500', message: 'Proud to support FOB' },
  { name: 'Lisa K.', amount: '$50', message: 'Community first!' },
  { name: 'Bob R.', amount: '$250', message: 'Great cause, great people' },
  { name: 'Carol H.', amount: '$100', message: 'In honor of my father' },
  { name: 'Dave W.', amount: '$25', message: 'Every bit counts!' },
  { name: 'Amy P.', amount: '$500', message: 'Fighting cancer together' },
];

export default function RecentDonors() {
  const doubled = [...donors, ...donors];

  return (
    <section className="py-20 bg-white dark:bg-[#0b1120] dark:border-t dark:border-white/15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-fob-dark-navy dark:text-white mb-2">
          Recent Donors
        </h2>
        <p className="text-fob-orange font-bold text-lg">150+ donors and counting</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Join our generous community of supporters
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-[#0b1120] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-[#0b1120] to-transparent pointer-events-none" />

        <div
          className="flex gap-4 hover:[animation-play-state:paused]"
          style={{
            animation: 'marquee 30s linear infinite',
            width: 'max-content',
          }}
        >
          {doubled.map((donor, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-56 bg-gray-50 dark:bg-[#141e34] border border-gray-100 dark:border-white/10 rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-fob-dark-navy dark:text-white text-sm">{donor.name}</span>
                <span className="font-black text-fob-orange text-sm">{donor.amount}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs italic">&ldquo;{donor.message}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
