'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import { manropeFont } from '@/app/fonts';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Systèmes', href: '#systemes' },
    { name: 'Méthode', href: '#methode' },
    { name: 'Qualité', href: '#qualite' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className={`${manropeFont.className} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            Marelion
          </span>
        </Link>
        
        {/* Desktop Nav - Pill Style */}
        <nav className={`hidden md:flex items-center px-1.5 py-1.5 rounded-full transition-all ${
          isScrolled ? 'bg-neutral-100/50' : 'bg-white/10 backdrop-blur-sm'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[15px] font-medium transition-all duration-200 px-5 py-2 rounded-full ${
                isScrolled ? 'text-text hover:bg-white' : 'text-white hover:bg-white/10'
              } ${link.name === 'Accueil' ? (isScrolled ? 'bg-white shadow-sm' : 'bg-white/20') : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden md:block">
          <Button 
            variant="primary" 
            size="sm" 
            className="rounded-full !bg-white !text-[#1B6673] hover:!bg-neutral-100 font-semibold"
          >
            Télécharger la brochure
          </Button>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className={`md:hidden p-2 ${isScrolled ? 'text-text' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
