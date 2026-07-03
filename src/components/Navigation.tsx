'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/cars', label: 'Cars' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
    { href: '/shop', label: 'Shop' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-secondary/90 backdrop-blur-md border-b border-dark-border shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-black/70 to-transparent border-b border-transparent'
      }`}
    >
      {/* Thin red accent line on top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo — far left */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-3 py-2 group">
          <Image
            src="/logo/logo_initial_wide.png"
            alt="KMITL FS Logo"
            width={112}
            height={52}
            className={`w-auto drop-shadow-lg transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
          />
          <div className="hidden lg:block leading-tight">
            <p className="font-black uppercase text-sm tracking-[0.2em] text-white group-hover:text-highlight transition-colors">
              Initial
            </p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500">
              KMITL Formula Student
            </p>
          </div>
        </Link>

        {/* Desktop: Links */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[13px] font-semibold uppercase tracking-wider px-4 py-6 transition-colors duration-300 group ${
                isActive(link.href) ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {/* Underline indicator */}
              <span
                className={`absolute left-4 right-4 bottom-4 h-[2px] bg-primary-500 origin-left transition-transform duration-300 ${
                  isActive(link.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}

          {/* CTA button */}
          <Link
            href="/support"
            className="ml-4 px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_18px_rgba(225,6,0,0.5)]"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)' }}
          >
            Support Us
          </Link>
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
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-dark-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 font-semibold uppercase text-sm py-2.5 transition-colors ${
                  isActive(link.href) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`block w-4 h-[2px] transition-colors ${
                    isActive(link.href) ? 'bg-primary-500' : 'bg-dark-border'
                  }`}
                />
                {link.label}
              </Link>
            ))}
            <a href="/support" className="btn-primary block text-center text-xs py-2.5 !mt-4">
              Support Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
