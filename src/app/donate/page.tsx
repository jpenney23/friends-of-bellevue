import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DonateHero from '@/components/donate/DonateHero';
import DonationAmountPicker from '@/components/donate/DonationAmountPicker';
import ImpactVisualizer from '@/components/donate/ImpactVisualizer';
import FundAllocation from '@/components/donate/FundAllocation';
import RecentDonors from '@/components/donate/RecentDonors';
import TrustSignals from '@/components/donate/TrustSignals';

export const metadata: Metadata = {
  title: 'Donate | Friends of Bellevue for the Cause',
  description:
    'Support Friends of Bellevue for the Cause. 100% of donations go to Dana-Farber Cancer Institute, Bread of Life, and MS research.',
};

export default function DonatePage() {
  return (
    <>
      <Header />
      <main>
        <DonateHero />
        <DonationAmountPicker />
        <ImpactVisualizer />
        <FundAllocation />
        <RecentDonors />
        <TrustSignals />
      </main>
      <Footer />
    </>
  );
}
