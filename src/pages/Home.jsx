import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsBanner } from '../components/StatsBanner';
import { ProductCarousel } from '../components/ProductCarousel';
import { CapabilitiesGrid } from '../components/CapabilitiesGrid';
import { GovernanceSection } from '../components/GovernanceSection';
import { ContactForm } from '../components/ContactForm';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cybernet Systems Limited | Sovereign Software Architecture & Infrastructure";
  }, []);

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsBanner />
      <ProductCarousel />
      <CapabilitiesGrid />
      <GovernanceSection />
      <ContactForm />
    </main>
  );
};
