import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CapitalMatrix from './components/CapitalMatrix';
import PilotOverview from './components/PilotOverview';
import ServicesMatrix from './components/ServicesMatrix';
import Ecosystem from './components/Ecosystem';
import IntakeSection from './components/IntakeSection';
import Footer from './components/Footer';
import ProspectusModal from './components/ProspectusModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navigation onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <CapitalMatrix />
      <PilotOverview />
      <ServicesMatrix onOpenModal={() => setIsModalOpen(true)} />
      <Ecosystem />
      <IntakeSection />
      <Footer />
      <ProspectusModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
