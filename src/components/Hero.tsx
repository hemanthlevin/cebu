import React from 'react';
import { Compass, Sparkles, MapPin, Calendar, Users, ArrowRight, CheckCircle2, Award, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePackages }) => {
  return (
    <header className="relative overflow-hidden bg-radial-[at_15%_0%] from-[#E8A33D]/25 via-[#0B4A47] to-[#12615C] text-[#F4EEDD] pt-14 sm:pt-20 pb-0">
      {/* Background visual accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F4EEDD_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EEDD]/10 border border-[#E8A33D]/40 text-[#E8A33D] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-ping" />
            <span>Cebu · Bohol · Team Padayon</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] text-[#F4EEDD] tracking-tight">
            See the South <br />
            the <em className="italic font-normal text-[#E8A33D]">exclusive</em> way.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F4EEDD]/85 leading-relaxed font-normal max-w-2xl">
            <strong className="text-[#F4EEDD] font-semibold">CEBU Exclusive TOUR</strong> is your affiliate connection to{' '}
            <span className="text-[#E8A33D] font-medium underline underline-offset-4 decoration-[#E8A33D]/40">AJ's Travel and Tours</span> — hassle-free countryside escapes, island crossings, and hidden Visayan gems, arranged door to door.
          </p>

          {/* Key Quick Badges */}
          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#F4EEDD]/90">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A3D3A]/60 border border-[#F4EEDD]/15">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A33D]" />
              Private Air-Conditioned Tourist Vans
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A3D3A]/60 border border-[#F4EEDD]/15">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A33D]" />
              Fast-Craft Ferry Tickets Included
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A3D3A]/60 border border-[#F4EEDD]/15">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A33D]" />
              Zero Upfront Inquiry Fee
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            <button
              onClick={onOpenBooking}
              id="hero-reserve-btn"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-[#E8A33D] hover:bg-[#f0af52] text-[#7A3A1F] text-sm sm:text-base font-bold tracking-wide shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              <span>Reserve Your Slot</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#packages"
              onClick={onExplorePackages}
              id="hero-explore-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded border border-[#F4EEDD]/35 hover:border-[#F4EEDD] text-[#F4EEDD] text-sm sm:text-base font-semibold transition-all transform hover:-translate-y-0.5 backdrop-blur-xs bg-[#0B4A47]/30"
            >
              <span>See Tour Packages</span>
            </a>

            <a
              href="#calculator"
              id="hero-quote-btn"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm text-[#F4EEDD]/80 hover:text-[#E8A33D] transition-colors"
            >
              <span>Calculate Group Quote →</span>
            </a>
          </div>
        </div>

        {/* Live Social Proof Stats Strip */}
        <div className="mt-14 sm:mt-18 border-t border-[#F4EEDD]/20 pt-6 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="border-r border-[#F4EEDD]/15 pr-4 last:border-r-0">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8A33D]">1,097</div>
            <div className="text-xs sm:text-sm text-[#F4EEDD]/75 font-medium mt-0.5">Facebook Page Likes</div>
          </div>
          <div className="border-r border-[#F4EEDD]/15 pr-4 last:border-r-0">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8A33D]">100%</div>
            <div className="text-xs sm:text-sm text-[#F4EEDD]/75 font-medium mt-0.5">Guest Recommendation Rate</div>
          </div>
          <div className="border-r border-[#F4EEDD]/15 pr-4 last:border-r-0">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8A33D]">11 / 11</div>
            <div className="text-xs sm:text-sm text-[#F4EEDD]/75 font-medium mt-0.5">5-Star Verified Reviews</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8A33D]">24/7</div>
            <div className="text-xs sm:text-sm text-[#F4EEDD]/75 font-medium mt-0.5">Instant Booking & Inquiries</div>
          </div>
        </div>
      </div>

      {/* Route Graphic Motif Divider */}
      <div className="relative w-full overflow-hidden leading-none mt-2">
        <svg
          className="w-full h-16 sm:h-24 block text-[#FBF8EF]"
          viewBox="0 0 1180 90"
          preserveAspectRatio="none"
        >
          <path
            className="animate-dash-route"
            d="M0 30 C 250 70, 420 5, 600 45 S 950 70, 1180 20"
            stroke="#E8A33D"
            strokeWidth="2.2"
            fill="none"
            opacity="0.65"
          />
          {/* Animated stop dots */}
          <circle className="animate-pulse-subtle" cx="60" cy="36" r="4.5" fill="#E8A33D" />
          <circle className="animate-pulse-subtle" cx="600" cy="45" r="5" fill="#F4EEDD" style={{ animationDelay: '0.8s' }} />
          <circle className="animate-pulse-subtle" cx="1120" cy="23" r="4.5" fill="#E8A33D" style={{ animationDelay: '1.6s' }} />
          {/* Base bottom fill matching page paper bg */}
          <path
            d="M0 90 L0 55 C 250 90, 420 30, 600 65 S 950 90, 1180 45 L1180 90 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </header>
  );
};
