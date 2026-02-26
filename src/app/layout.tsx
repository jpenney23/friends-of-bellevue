import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://friends-of-bellevue.vercel.app"),
  title: "Friends of Bellevue for the Cause | Golf Club Charity",
  description:
    "Friends of Bellevue for the Cause (FOB) is a 501(c)(3) golf club charity that has donated $70,000 to Dana-Farber Cancer Institute and supports ~600 Bellevue families. Join us in uniting community and funding hope.",
  keywords: [
    "Friends of Bellevue",
    "FOB",
    "golf charity",
    "Dana-Farber",
    "cancer research",
    "Bellevue NH",
    "charity golf tournament",
    "501c3",
  ],
  openGraph: {
    title: "Friends of Bellevue for the Cause",
    description:
      "Uniting Community. Funding Hope. A 501(c)(3) golf club charity supporting Dana-Farber, Bread of Life, and MS research.",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Friends of Bellevue for the Cause",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
