'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/cars', label: 'Cars' },
    { href: '/team', label: 'Team' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
    { href: '/shop', label: 'Shop' },
    { href: '/support', label: 'Support Us' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-secondary/95 backdrop-blur border-b border-dark-border">
      <div className="w-full px-0 flex items-center justify-between">

        {/* Logo — far left */}
        <Link href="/" className="flex-shrink-0 flex items-center py-2 pl-4">
          <Image
            src="/logo/logo_initail.png"
            alt="KMITL FS Logo"
            width={50}
            height={50}
            className="drop-shadow-lg"
          />
        </Link>

        {/* Desktop: Right Links */}
        <div className="hidden md:flex gap-8 pr-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider hover:text-highlight transition-colors duration-300 py-5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden py-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-accent transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`h-0.5 w-full bg-accent transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-accent transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-dark-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-semibold uppercase text-sm hover:text-highlight transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="#sponsors" className="btn-primary block text-center text-xs py-2">
              Sponsor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
