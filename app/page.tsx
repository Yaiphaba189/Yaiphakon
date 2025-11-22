'use client';

import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ContentSplit from '@/components/ContentSplit';
import FocusAreas from '@/components/FocusAreas';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/30">
      <Hero />
      <FeatureGrid />
      <ContentSplit />
      <FocusAreas />
    </main>
  );
}
