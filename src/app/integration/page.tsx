import type { Metadata } from 'next';
import IntegrationPageSection from '@/components/sections/IntegrationPageSection';

export const metadata: Metadata = {
  title: 'Intégration | Marelion',
  description:
    'Découvrez l’approche Marélion pour assurer une continuité contractuelle et technique sans rupture.',
};

export default function IntegrationPage() {
  return <IntegrationPageSection />;
}
