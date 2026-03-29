import React from 'react';
import Link from 'next/link';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSocialLink = {
  platform: 'linkedin' | 'instagram' | 'facebook';
  href: string;
  label?: string;
};

interface FooterProps {
  brandName?: string;
  description?: string;
  navTitle?: string;
  navLinks?: FooterLink[];
  contactTitle?: string;
  addressLines?: string[];
  phone?: string;
  email?: string;
  socialLinks?: FooterSocialLink[];
  legalLinks?: FooterLink[];
  year?: number;
  className?: string;
}

const defaultNavLinks: FooterLink[] = [
  { label: 'Systèmes', href: '/systemes' },
  { label: 'Méthode', href: '/methode' },
  { label: 'Qualité', href: '/qualite' },
  { label: 'l’intégration', href: '/integration' },
];

const defaultAddress = [
  'Angle Av Al Alaouiyine et Av Al Mariniyine',
  'Imm Oumniprise 4ème étage E2 D / E2 E',
  'Quartier Hassan, Rabat.',
];

const defaultSocialLinks: FooterSocialLink[] = [
  { platform: 'linkedin', href: '#', label: 'LinkedIn' },
  { platform: 'instagram', href: '#', label: 'Instagram' },
  { platform: 'facebook', href: '#', label: 'Facebook' },
];

const defaultLegalLinks: FooterLink[] = [
  { label: 'Mentions légales', href: '/terms' },
  { label: 'Politique de confidentialité', href: '/privacy' },
  { label: 'Politique relative aux cookies', href: '/cookies' },
  { label: 'Map', href: '/sitemap' },
];

const socialIcon = (platform: FooterSocialLink['platform']) => {
  if (platform === 'linkedin') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.5 2.5 0 0 0 2.48 2.5A2.5 2.5 0 0 0 7.5 6a2.5 2.5 0 0 0-2.52-2.5ZM3 9.75h4v11.25H3V9.75Zm6.5 0H13v1.53c.48-.87 1.7-1.78 3.5-1.78 3.25 0 4 2.01 4 5.36V21h-4v-5.53c0-1.7-.32-2.9-1.9-2.9-1.46 0-2.1 1.01-2.1 2.9V21h-4V9.75Z" />
      </svg>
    );
  }

  if (platform === 'instagram') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.98h-2.1V12h2.1V9.8c0-2.08 1.23-3.24 3.13-3.24.91 0 1.86.16 1.86.16v2.04h-1.04c-1.03 0-1.35.64-1.35 1.29V12h2.3l-.37 2.9h-1.93v6.98A10 10 0 0 0 22 12Z" />
    </svg>
  );
};

const RenderFooterLink: React.FC<{ link: FooterLink; className: string }> = ({ link, className }) => {
  if (link.external) {
    return (
      <a href={link.href} className={className} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
};

const Footer: React.FC<FooterProps> = ({
  brandName = 'Marelion',
  description = 'Sourcing technique et solutions d’ingénierie intégrées',
  navTitle = 'Accueil',
  navLinks = defaultNavLinks,
  contactTitle = 'Contact',
  addressLines = defaultAddress,
  phone = '+212 688 183 034',
  email = 'contact@marelio-ts.com',
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  year = new Date().getFullYear(),
  className = '',
}) => {
  const legalContent = legalLinks.map((link, index) => (
    <React.Fragment key={link.label}>
      {index > 0 ? <span className="text-brand-primaryText/45">|</span> : null}
      <RenderFooterLink link={link} className="hover:text-brand-primaryText transition-colors" />
    </React.Fragment>
  ));

  return (
    <footer className={`bg-brand-background text-brand-primaryText ${className}`}>
      <div className="mx-auto max-w-7xl px-container-gap pb-container-gap pt-section">
        <div className="grid grid-cols-1 gap-card-gap md:grid-cols-12">
          {/* Brand section */}
          <div className="md:col-span-5">
            <div className="mb-title-subtitle flex items-center gap-4">
              <svg className="h-9 w-14 shrink-0 text-brand-primaryText" viewBox="0 0 64 40" fill="currentColor" aria-hidden="true">
                <path d="M2 4h10l18 18V4h10v32H30L12 18v18H2V4Z" />
                <path d="M24 4h10l18 18V4h10v32H52L34 18v18H24V4Z" />
              </svg>
              <h3 className="text-title font-medium leading-none">{brandName}</h3>
            </div>
            <p className="max-w-md text-body text-brand-primaryText">
              {description}
            </p>
          </div>

          {/* Navigation section */}
          <div className="md:col-span-2">
            <h4 className="mb-6 text-button font-medium">{navTitle}</h4>
            <ul className="space-y-container-gap">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <RenderFooterLink
                    link={link}
                    className="text-body text-brand-primaryText transition-colors hover:text-brand-secondaryText"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="md:col-span-4">
            <h4 className="mb-6 text-button font-medium">{contactTitle}</h4>
            <div className="space-y-container-gap text-body text-brand-primaryText">
              <div>
                {addressLines.map((line) => (
                  <p key={line} className="text-body text-brand-primaryText">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-body text-brand-primaryText">{phone}</p>
              <a href={`mailto:${email}`} className="text-body text-brand-primaryText transition-colors hover:text-brand-secondaryText">
                {email}
              </a>
            </div>
          </div>

          {/* Social section */}
          <div className="flex items-end justify-start gap-3 md:col-span-1 md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label ?? social.platform}
                className="text-brand-primaryText transition-transform transition-colors hover:scale-105 hover:text-brand-secondaryText"
              >
                {socialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-section border-t border-brand-primaryText/35 pt-container-gap">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-base text-brand-primaryText/55">
              © {year} {brandName}. Tous droits réservés
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-brand-primaryText/45">
              {legalContent}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
