'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../common/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isHomeTopState = isHomePage && !isScrolled;
  const isInnerPage = !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const wasScrolled = currentScrollY > 10;

      setIsScrolled(wasScrolled);

      if (!wasScrolled) {
        setIsHeaderVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      const distance = Math.abs(currentScrollY - lastScrollYRef.current);

      if (distance > 4) {
        setIsHeaderVisible(isScrollingUp);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Systèmes', href: '/systemes' },
    { name: 'Méthode', href: '/methode' },
    { name: 'Qualité', href: '/qualite' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    if (href === '/systemes') {
      return pathname.startsWith('/systemes');
    }

    if (href === '/methode') {
      return pathname.startsWith('/methode');
    }

    if (href === '/qualite') {
      return pathname.startsWith('/qualite');
    }

    if (href === '/contact') {
      return pathname.startsWith('/contact');
    }

    return false;
  };

  const brandTextClass = isHomeTopState
    ? 'text-brand-background'
    : isInnerPage
      ? 'text-brand-primaryText'
      : 'text-brand-secondaryText';

  const navLinkBaseClass = isHomeTopState
    ? 'text-brand-background hover:bg-brand-background/10'
    : isInnerPage
      ? 'text-brand-primaryText hover:bg-brand-primaryText/10'
      : 'text-brand-secondaryText hover:bg-brand-primaryText/10';

  const activeNavClass = isHomeTopState
    ? 'border border-brand-background/55 bg-brand-background/12 backdrop-blur-sm'
    : isInnerPage
      ? 'border border-brand-primaryText/35 bg-brand-primaryText/10'
      : 'border border-brand-secondaryText/25 bg-brand-primaryText/10';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[transform,background-color,padding,border-color] duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
          ? isHomePage
            ? 'border-b border-brand-secondaryText/10 bg-brand-background/90 py-2 backdrop-blur-xl md:py-3'
            : 'border-b border-brand-primaryText/15 bg-brand-background/95 py-2 backdrop-blur-xl md:py-3'
          : 'bg-transparent py-4 md:py-5'
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-container-gap">
        <Link href="/" className="flex items-center gap-4">
          {!isHomeTopState ? (
            <Image src="/logo-green.svg" alt="Marelion" width={249} height={38} className="h-auto w-[116px] md:w-[132px]" priority />
          ) : (
            <Image src="/logo-white.svg" alt="Marelion" width={249} height={38} className="h-auto w-[116px] md:w-[132px]" priority />
          )}
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 lg:px-4 lg:py-2 lg:text-base ${navLinkBaseClass} ${isActive ? activeNavClass : ''
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            variant={isHomeTopState ? 'light' : isInnerPage ? 'outline' : 'filled'}
            size="sm"
            className={isHomeTopState ? 'border-brand-background bg-brand-background text-brand-primaryText shadow-lg' : ''}
          >
            Télécharger la brochure
          </Button>
        </div>

        <button className={`p-2 md:hidden ${brandTextClass}`}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
