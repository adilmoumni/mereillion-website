import type { Metadata } from 'next';
import QualityPageSection from '@/components/sections/QualityPageSection';

export const metadata: Metadata = {
  title: 'Qualité | Marelion',
  description: 'Découvrez le cadre qualité Marélion : validation, contrôle et traçabilité.',
};

export default function QualitePage() {
  return <QualityPageSection />;
}
