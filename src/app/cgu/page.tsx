import type { Metadata } from 'next';
import LegalDocumentSection, { type LegalSection } from '@/components/sections/LegalDocumentSection';

export const metadata: Metadata = {
  title: 'Conditions générales d’utilisation | Marelion TS',
  description:
    'Conditions générales d’utilisation du site Marelion TS : accès, obligations de l’utilisateur, responsabilité et droit applicable.',
};

const sections: LegalSection[] = [
  {
    title: 'Objet',
    paragraphs: [
      'Les présentes Conditions Générales d’Utilisation ont pour objet de définir les modalités d’accès et d’utilisation du site https://marelion-ts.com/.',
    ],
  },
  {
    title: 'Accès au site',
    paragraphs: [
      'Le site est accessible gratuitement à tout utilisateur disposant d’un accès à internet.',
      'Tous les frais liés à l’accès au service restent à la charge de l’utilisateur.',
    ],
  },
  {
    title: 'Obligations de l’utilisateur',
    paragraphs: ['L’utilisateur s’engage à :'],
    bullets: [
      'Utiliser le site de manière légale et conforme',
      'Ne pas porter atteinte au bon fonctionnement du site',
      'Ne pas tenter d’accéder frauduleusement aux systèmes informatiques',
      'Fournir des informations exactes via les formulaires',
    ],
  },
  {
    title: 'Limitation de responsabilité',
    paragraphs: [
      'MARELION TS ne pourra être tenue responsable des interruptions temporaires du site, de bugs, ou de dommages indirects liés à l’utilisation du site.',
    ],
  },
  {
    title: 'Modification des CGU',
    paragraphs: ['MARELION TS se réserve le droit de modifier les présentes CGU à tout moment.'],
  },
  {
    title: 'Droit applicable',
    paragraphs: ['Les présentes CGU sont soumises au droit marocain.'],
  },
];

export default function CguPage() {
  return (
    <LegalDocumentSection
      eyebrow="Documents légaux"
      title="Conditions générales d’utilisation"
      subtitle="Modalités d’accès et d’utilisation du site Marelion TS, ainsi que les obligations applicables aux utilisateurs."
      sections={sections}
    />
  );
}
