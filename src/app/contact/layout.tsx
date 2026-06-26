import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | INITIAL KMITL Formula Student',
  description: 'Contact INITIAL KMITL Formula Student — sponsorship, partnership, recruitment, and media inquiries.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
