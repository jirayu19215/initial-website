import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'INIYAIL KMITL Formula Student',
  description: 'Engineering Excellence in Motorsport - KMITL Formula Student Racing Team',
  metadataBase: new URL('https://kmitl-fs.vercel.app'),
  openGraph: {
    title: 'INIYAIL KMITL Formula Student',
    description: 'Engineering Excellence in Motorsport',
    image: '/og-image.jpg',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} bg-secondary text-accent antialiased`}>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-secondary via-surface to-secondary" />
        {children}
      </body>
    </html>
  );
}
