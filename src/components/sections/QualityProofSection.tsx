import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Link from 'next/link';

const qualityCards = [
  {
    title: 'Des procédures de contrôle formalisées',
    description: 'Chaque étape de votre projet est soumise à un protocole de validation strict pour garantir une exécution sans faille.',
    link: '#',
  },
  {
    title: 'Une documentation technique complète',
    description: 'Une traçabilité intégrale de tous les systèmes et composants, centralisée pour un pilotage efficace et pérenne.',
    link: '#',
  },
  {
    title: 'Vérifications ciblées à chaque étape',
    description: 'Des audits réguliers et des tests de performance pour assurer la conformité normative et la sécurité des ouvrages.',
    link: '#',
  },
];

const QualityProofSection = () => {
  return (
    <SectionWrapper className="bg-neutral-50 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-wider uppercase text-small block mb-4">
            Qualité & Conformité
          </span>
          <h2 className="text-h2 md:text-h1 font-heading font-bold text-text leading-tight">
            La qualité se démontre par la preuve
          </h2>
          <p className="mt-6 text-body text-text-muted max-w-xl">
            Pour Marélion, la conformité n&apos;est pas une déclaration, mais un processus continu de validation au service de la performance.
          </p>
        </div>
        
        <Link 
          href="#" 
          className="inline-flex items-center text-primary font-bold hover:translate-x-1 transition-transform group"
        >
          Approfondir notre démarche qualité
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {qualityCards.map((card) => (
          <div 
            key={card.title} 
            className="bg-white p-10 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <h3 className="text-h3 font-bold text-text mb-6 leading-snug">
              {card.title}
            </h3>
            <p className="text-body text-text-muted mb-8 flex-grow">
              {card.description}
            </p>
            <Link 
              href={card.link}
              className="mt-auto inline-flex items-center text-primary font-bold hover:underline"
            >
              En savoir plus
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default QualityProofSection;
