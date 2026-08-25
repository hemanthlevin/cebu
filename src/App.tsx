/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TourPackages } from './components/TourPackages';
import { TripCalculator } from './components/TripCalculator';
import { WhyPadayon } from './components/WhyPadayon';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { TourDetailModal } from './components/TourDetailModal';
import { Footer } from './components/Footer';
import { TOUR_PACKAGES, REVIEWS } from './data/tours';
import { TourPackage } from './types';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedModalPackage, setSelectedModalPackage] = useState<TourPackage | null>(null);
  const [prefilledInquiry, setPrefilledInquiry] = useState<{
    tourId?: string;
    pax?: number;
    selectedAddOns?: string[];
  }>({
    tourId: 'bohol-countryside',
    pax: 4,
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (tourId?: string) => {
    if (tourId) {
      setPrefilledInquiry((prev) => ({ ...prev, tourId }));
    }
    scrollToSection('contact');
  };

  const handleSelectPackageModal = (pkg: TourPackage) => {
    setSelectedModalPackage(pkg);
  };

  const handleInquirePackage = (pkg: TourPackage) => {
    setPrefilledInquiry({
      tourId: pkg.id,
      pax: 4,
      selectedAddOns: [],
    });
    scrollToSection('contact');
  };

  const handleApplyCalculation = (data: {
    tourId: string;
    pax: number;
    selectedAddOns: string[];
    estimatedTotal: number;
  }) => {
    setPrefilledInquiry({
      tourId: data.tourId,
      pax: data.pax,
      selectedAddOns: data.selectedAddOns,
    });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#122423] font-['Space_Grotesk',sans-serif] flex flex-col selection:bg-[#E8A33D]/30 selection:text-[#0B4A47]">
      {/* Top Notification Announcement Banner */}
      <div className="bg-[#0B4A47] text-[#F4EEDD] text-xs py-2 px-4 text-center border-b border-[#E8A33D]/30 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#E8A33D] animate-pulse" />
        <span>
          <strong>2026 Promo:</strong> Bohol & Cebu Countryside Exclusive Tours available with instant fast-craft ferry ticketing.
        </span>
        <a
          href="#contact"
          className="underline text-[#E8A33D] font-semibold hover:text-[#f0af52] ml-1"
        >
          Book Your Date →
        </a>
      </div>

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onExplorePackages={() => scrollToSection('packages')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* About Team Padayon & AJ's Travel */}
        <AboutSection />

        {/* Tour Packages Cards & Filters */}
        <TourPackages
          packages={TOUR_PACKAGES}
          onSelectPackage={handleSelectPackageModal}
          onInquirePackage={handleInquirePackage}
        />

        {/* Interactive Trip Rate Estimator */}
        <TripCalculator
          packages={TOUR_PACKAGES}
          onApplyCalculation={handleApplyCalculation}
        />

        {/* Why Padayon & Accreditations */}
        <WhyPadayon />

        {/* Reviews & Social Proof */}
        <ReviewsSection reviews={REVIEWS} />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Direct Contact & Booking Inquiry Form */}
        <ContactSection
          packages={TOUR_PACKAGES}
          prefilledData={prefilledInquiry}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Package Itinerary & Inclusions Modal */}
      <TourDetailModal
        pkg={selectedModalPackage}
        onClose={() => setSelectedModalPackage(null)}
        onBook={handleInquirePackage}
      />

      {/* Mobile Floating Quick Action Dock */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 bg-[#0B4A47]/95 backdrop-blur-md p-2 rounded-xl shadow-2xl border border-[#E8A33D]/30 flex items-center justify-between gap-2">
        <a
          href="tel:+639660231567"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#EFE4C6] text-[#0B4A47] font-bold text-xs shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#9A4A28]" />
          <span>Call Now</span>
        </a>

        <a
          href="https://www.facebook.com/people/CEBU-Exclusive-TOUR/61560280627125/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#12615C] text-[#F4EEDD] font-bold text-xs border border-white/10"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#E8A33D]" />
          <span>Messenger</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-[#E8A33D] text-[#7A3A1F] font-bold text-xs shadow-xs cursor-pointer"
        >
          <span>Book Tour</span>
        </button>
      </div>
    </div>
  );
}
