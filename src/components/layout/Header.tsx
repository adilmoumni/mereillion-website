'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../common/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isHomeTopState = isHomePage && !isScrolled;
  const isInnerPage = !isHomePage;
  const contactEmail = 'contact@marelion-ts.com';
  const contactPhone = '+212 664-748172';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobileMenuOpen) {
        setIsHeaderVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

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
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Systèmes', href: '/systemes' },
    { name: 'Méthode', href: '/methode' },
    { name: 'Qualité', href: '/qualite' },
    { name: 'Integration', href: '/integration' },
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
    ? 'border-transparent bg-[rgba(247,245,243,0.2)] text-brand-background backdrop-blur-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_40px_rgba(0,0,0,0.16)]'
    : isInnerPage
      ? 'border border-brand-primaryText/35 bg-brand-primaryText/10'
      : 'border border-brand-secondaryText/25 bg-brand-primaryText/10';

  const mobileDrawerClass = isHomeTopState
    ? 'border-brand-background/12 bg-brand-secondaryText/90 text-brand-background backdrop-blur-2xl'
    : 'border-brand-primaryText/12 bg-brand-background/96 text-brand-secondaryText backdrop-blur-2xl';

  const mobileLinkClass = isHomeTopState
    ? 'border-brand-background/10 text-brand-background hover:bg-brand-background/10'
    : 'border-brand-primaryText/10 text-brand-secondaryText hover:bg-brand-primaryText/8';

  const mobileActiveLinkClass = isHomeTopState
    ? 'bg-[rgba(247,245,243,0.18)] text-brand-background'
    : 'bg-brand-primaryText/10 text-brand-primaryText';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[transform,background-color,padding,border-color] duration-300 ${(isHeaderVisible || isMobileMenuOpen) ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
          ? isHomePage
            ? 'border-b border-brand-secondaryText/10 bg-brand-background/90 py-2 backdrop-blur-xl md:py-3'
            : 'border-b border-brand-primaryText/15 bg-brand-background/95 py-2 backdrop-blur-xl md:py-3'
          : 'bg-transparent py-4 md:py-5'
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-container-gap">
        <Link href="/" className="flex items-center gap-4">
          {!isHomeTopState ? (
            <Image src="/logo-green.svg" alt="Marelion" width={249} height={38} className="h-auto w-[116px] md:w-[132px]" priority />
          ) : (
            <Image src="/logo-white.svg" alt="Marelion" width={249} height={38} className="h-auto w-[116px] md:w-[132px]" priority />
          )}
        </Link>

        <div className="ml-auto hidden items-center gap-5 md:flex lg:gap-7">
          <nav className="flex items-center gap-5 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 lg:px-4 lg:py-2 lg:text-base ${navLinkBaseClass} ${isActive ? activeNavClass : ''
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div>
            <Button
              variant={isHomeTopState ? 'light' : isInnerPage ? 'outline' : 'filled'}
              size="sm"
              className={isHomeTopState ? 'border-brand-background bg-brand-background text-brand-primaryText shadow-lg' : ''}
            >
              Télécharger la brochure
            </Button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`ml-auto p-2 md:hidden ${brandTextClass}`}
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-navigation-drawer"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100svh-4.5rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`border-t ${mobileDrawerClass}`}>
          <div className="max-h-[calc(100svh-5rem)] overflow-y-auto px-container-gap pb-6 pt-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-full border px-4 py-3 text-[1.05rem] font-medium transition-colors ${mobileLinkClass} ${
                      isActive ? mobileActiveLinkClass : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 border-t border-current/10 pt-5">
              <Button
                variant="light"
                size="lg"
                fullWidth
                className={isHomeTopState ? 'border-brand-background bg-brand-background text-brand-primaryText' : ''}
              >
                Télécharger la brochure
              </Button>

              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-[0.88rem] font-medium uppercase tracking-[0.08em] text-current/55">Téléphone</p>
                  <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="mt-1 block text-[1.05rem] font-medium text-current">
                    {contactPhone}
                  </a>
                </div>

                <div>
                  <p className="text-[0.88rem] font-medium uppercase tracking-[0.08em] text-current/55">E-mail</p>
                  <a href={`mailto:${contactEmail}`} className="mt-1 block text-[1.05rem] font-medium text-current break-all">
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
