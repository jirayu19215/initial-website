import '@/app/globals.css';
import { Inter, IBM_Plex_Sans_Thai } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-thai',
});

export const metadata = {
  title: {
    default: 'INITIAL KMITL Formula Student',
    template: '%s | INITIAL KMITL Formula Student',
  },
  description:
    'INITIAL — KMITL Formula Student racing team. Designing and building high-performance electric race cars since 2003. Winner of the Ansys Simulation Award at TSAE Auto Challenge 2026, heading to Formula Student China 2026.',
  keywords: [
    'Formula Student', 'KMITL', 'INITIAL', 'electric race car', 'TSAE Auto Challenge',
    'Formula Student China', 'INIXII', 'student formula', 'EV racing', 'Thailand',
  ],
  metadataBase: new URL('https://initial-website-65h7.vercel.app'),
  openGraph: {
    title: 'INITIAL KMITL Formula Student',
    description:
      'Engineering Excellence in Motorsport — electric Formula Student race cars built at KMITL since 2003.',
    images: ['/DSC05116.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INITIAL KMITL Formula Student',
    description: 'Engineering Excellence in Motorsport',
    images: ['/DSC05116.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${plexThai.variable} bg-secondary text-accent antialiased`}>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-secondary via-surface to-secondary" />
        {children}
      </body>
    </html>
  );
}
