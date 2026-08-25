import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (tourId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8EF]/95 backdrop-blur-md shadow-sm border-b border-[#122423]/10 py-3'
          : 'bg-[#FBF8EF] border-b border-[#122423]/10 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-2.5 group text-decoration-none"
          >
            <div className="w-8 h-8 rounded-full border border-[#0B4A47] flex items-center justify-center bg-[#F4EEDD] shadow-xs group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#0B4A47" strokeWidth="1.6" />
                <path
                  d="M6 19c3-5 8-9 10-9s7 4 10 9"
                  stroke="#E8A33D"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="10" r="2.2" fill="#9A4A28" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#0B4A47] leading-none tracking-tight">
                CEBU Exclusive TOUR
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#9A4A28]">
                Team Padayon · AJ’s Travel Affiliate
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#122423]">
            <a
              href="#about"
              id="nav-link-about"
              className="hover:text-[#0B4A47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A33D] hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a
              href="#packages"
              id="nav-link-packages"
              className="hover:text-[#0B4A47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A33D] hover:after:w-full after:transition-all"
            >
              Packages
            </a>
            <a
              href="#calculator"
              id="nav-link-calculator"
              className="hover:text-[#0B4A47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A33D] hover:after:w-full after:transition-all"
            >
              Rate Estimator
            </a>
            <a
              href="#why"
              id="nav-link-why"
              className="hover:text-[#0B4A47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A33D] hover:after:w-full after:transition-all"
            >
              Why Padayon
            </a>
            <a
              href="#reviews"
              id="nav-link-reviews"
              className="hover:text-[#0B4A47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A33D] hover:after:w-full after:transition-all"
            >
              Reviews
            </a>
            <a
              href="#faq"
              id="nav-link-faq"
              className="hover:text-[#0B4A47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A33D] hover:after:w-full after:transition-all"
            >
              FAQ
            </a>
          </div>

          {/* Contact & CTA actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+639660231567"
              id="nav-call-btn"
              title="Call us directly"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-[#0B4A47] bg-[#EFE4C6]/60 border border-[#122423]/10 hover:bg-[#EFE4C6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9A4A28]" />
              <span>+63 966 023 1567</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-book-cta"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0B4A47] hover:bg-[#12615C] text-[#F4EEDD] text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all active:scale-98 cursor-pointer"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded bg-[#0B4A47] text-[#F4EEDD] text-xs font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 text-[#122423] hover:text-[#0B4A47] rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden border-t border-[#122423]/10 bg-[#FBF8EF] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              About Team Padayon
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              Tour Packages
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              Price Rate Estimator
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              Why Us & Accreditation
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              Guest Reviews (100% Recommended)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#EFE4C6]/50 text-[#122423]"
            >
              Contact & Inquiries
            </a>
          </div>

          <div className="pt-3 border-t border-[#122423]/10 flex flex-col gap-2">
            <a
              href="tel:+639660231567"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#EFE4C6] text-[#0B4A47] text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#9A4A28]" />
              Call +63 966 023 1567
            </a>
            <a
              href="https://www.facebook.com/people/CEBU-Exclusive-TOUR/61560280627125/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded border border-[#122423]/20 text-[#122423] text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#0B4A47]" />
              Message Facebook Page
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
