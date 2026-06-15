import { Outfit } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// theme providers
import StarsCanvas from '@/components/StarBackground';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Vedaant Mitra || developer || AI',
  description: 'Portfolio Website',
  image: "/hero/developer.png",
  keywords: ['vedaant', 'mitra', 'developer', 'AI', 'portfolio', 'web development', 'app development', 'software', 'AI development'],
  openGraph: {
    title: 'Vedaant Mitra || developer || AI',
    description: 'Portfolio Website',
    images: [
      {
        url: "/hero/developer.png"
      }
    ]
  },
  metadataBase: new URL('https://abhirupkumar.vercel.app'),
  other: {
    "google-site-verification": "co0B-CYrqRdI_fmi2ySiu2nYjJd2Wq8Db9ESsAv_uZE"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} bg-background`}>
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
