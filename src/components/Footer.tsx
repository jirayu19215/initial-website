import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-dark-border">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo/logo_initail.png" alt="INITIAL Logo" className="h-5 w-5 object-contain" />
              <h3 className="font-black uppercase text-lg tracking-wide text-white">KMITL</h3>
            </div>
            <p className="text-xs uppercase tracking-widest text-highlight mb-3">INITIAL Formula Student</p>
            <p className="text-sm text-gray-500 leading-relaxed">Engineering Excellence<br />in Motorsport</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-highlight transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-highlight transition-colors">About</Link></li>
              <li><Link href="/cars" className="hover:text-highlight transition-colors">Cars</Link></li>
              <li><Link href="/team" className="hover:text-highlight transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sponsors" className="hover:text-highlight transition-colors">Sponsors</Link></li>
              <li><Link href="/news" className="hover:text-highlight transition-colors">News</Link></li>
              <li><Link href="/join" className="hover:text-highlight transition-colors">Join</Link></li>
              <li><Link href="/contact" className="hover:text-highlight transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:initial.formula@gmail.com" className="hover:text-highlight transition-colors">initial.formula@gmail.com</a></li>
              <li><a href="tel:+6624297000" className="hover:text-highlight transition-colors">+66 (0) 2 429 7000</a></li>
              <li className="text-gray-400 text-xs">KMITL, Bangkok, Thailand</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 INITIAL KMITL Formula Student. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/initialteam/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">Facebook</a>
            <a href="https://www.instagram.com/initialformula.kmitl/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">Instagram</a>
            <a href="#" className="hover:text-highlight transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
