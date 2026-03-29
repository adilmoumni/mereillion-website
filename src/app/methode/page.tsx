import type { Metadata } from 'next';
import MethodPageSection from '@/components/sections/MethodPageSection';

export const metadata: Metadata = {
  title: 'Méthode | Marelion',
  description: 'Découvrez la méthode Marélion pour sécuriser les décisions techniques en amont.',
};

export default function MethodePage() {
  return <MethodPageSection />;
}
