import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import MenuSection from './components/MenuSection';
import BranchesSection from './components/BranchesSection';
import QualitySection from './components/QualitySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <div className="min-h-screen bg-teal-950 text-cream-50 font-sans overflow-x-hidden">

      {/* ── Sticky Navigation ─────────────────────── */}
      <Navbar onOpenOrderModal={openOrderModal} />

      {/* ── Main Content ─────────────────────────── */}
      <main>
        {/* 1. Hero / Landing Banner */}
        <Hero onOpenOrderModal={openOrderModal} />

        {/* 2. Brand Story & About Us */}
        <BrandStory />

        {/* 3. Interactive Menu with Filter Tabs */}
        <MenuSection />

        {/* 4. Branches / Contact Cards */}
        <BranchesSection />

        {/* 5. Quality Indicators & Testimonials */}
        <QualitySection />

        {/* 6. Contact & Order Section */}
        <ContactSection />
      </main>

      {/* ── Footer ────────────────────────────────── */}
      <Footer />

      {/* ── Global Order Modal (Sipariş Ver) ─────── */}
      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />

      {/* ── Floating Action Buttons ───────────────── */}
      <FloatingActions onOpenOrderModal={openOrderModal} />

    </div>
  );
}
