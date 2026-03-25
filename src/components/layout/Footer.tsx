import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-h3 font-heading font-bold text-primary mb-6">Marélion</h3>
            <p className="text-neutral-400 max-w-sm mb-6">
              Sourcing technique et solutions d&apos;ingénierie intégrées pour projets de construction et d&apos;industrie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#expertise" className="text-neutral-400 hover:text-white transition-colors">Expertise</Link></li>
              <li><Link href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-body font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-neutral-400">
              <li>Email: contact@mereillion.com</li>
              <li>Tel: +33 (0)1 23 45 67 89</li>
              <li>City: Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-neutral-500">
            &copy; {currentYear} Mereillion. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-caption text-neutral-500 hover:text-white">Confidentialité</Link>
            <Link href="/terms" className="text-caption text-neutral-500 hover:text-white">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
