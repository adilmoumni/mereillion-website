import type { Metadata } from 'next';
import LegalDocumentSection, { type LegalSection } from '@/components/sections/LegalDocumentSection';

export const metadata: Metadata = {
  title: 'Mentions légales | Marelion TS',
  description:
    'Mentions légales du site Marelion TS : propriété intellectuelle, responsabilité, liens externes et droit applicable.',
};

const sections: LegalSection[] = [
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'L’ensemble du contenu présent sur le site https://marelion-ts.com/, incluant, de façon non limitative, les textes, images, graphismes, logos, vidéos, icônes et éléments visuels, est la propriété exclusive de MARELION TS ou fait l’objet d’une autorisation d’utilisation.',
      'Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.',
    ],
  },
  {
    title: 'Responsabilité',
    paragraphs: [
      'MARELION TS s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le site. Toutefois, l’entreprise ne peut garantir l’exactitude, la précision ou l’exhaustivité des informations mises à disposition.',
      'L’utilisateur reconnaît utiliser les informations du site sous sa responsabilité exclusive.',
    ],
  },
  {
    title: 'Liens externes',
    paragraphs: [
      'Le site peut contenir des liens vers des sites externes. MARELION TS ne saurait être tenue responsable du contenu ou des pratiques de confidentialité de ces sites tiers.',
    ],
  },
  {
    title: 'Droit applicable',
    paragraphs: ['Les présentes mentions légales sont régies par les lois en vigueur au Maroc.'],
  },
];

export default function TermsPage() {
  return (
    <LegalDocumentSection
      eyebrow="Documents légaux"
      title="Mentions légales"
      subtitle="Informations relatives à l’utilisation du site Marelion TS, à la propriété intellectuelle et au cadre légal applicable."
      sections={sections}
    />
  );
}
