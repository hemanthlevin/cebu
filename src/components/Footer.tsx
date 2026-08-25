import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A3D3A] text-[#F4EEDD]/75 pt-14 pb-8 border-t border-[#F4EEDD]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F4EEDD]/15">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#E8A33D] flex items-center justify-center bg-[#0B4A47]">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#F4EEDD" strokeWidth="1.6" />
                  <path
                    d="M6 19c3-5 8-9 10-9s7 4 10 9"
                    stroke="#E8A33D"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="16" cy="10" r="2.2" fill="#E8A33D" />
                </svg>
              </div>
              <span className="font-serif font-bold text-xl text-[#F4EEDD]">
                CEBU Exclusive TOUR
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F4EEDD]/80 leading-relaxed max-w-sm">
              Affiliate connection to <strong>AJ's Travel and Tours</strong>. Operating under the banner <em>Team Padayon</em> — bringing exclusive, hassle-free private adventures across Cebu, Bohol, and the Central Visayas.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#E8A33D] bg-[#0B4A47] px-3 py-1.5 rounded border border-[#E8A33D]/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Tourism Affiliate Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E8A33D]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#F4EEDD] transition-colors">
                  About Team Padayon
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#F4EEDD] transition-colors">
                  Tour Packages & Circuits
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#F4EEDD] transition-colors">
                  Group Rate Calculator
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-[#F4EEDD] transition-colors">
                  Why Travel With Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F4EEDD] transition-colors">
                  Guest Reviews & Proof
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F4EEDD] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E8A33D]">
              24/7 Booking Desk
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="tel:+639660231567"
                className="flex items-center gap-2 text-[#F4EEDD] hover:text-[#E8A33D] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#E8A33D]" />
                <span>+63 966 023 1567</span>
              </a>

              <a
                href="mailto:Fless091695@gmail.com"
                className="flex items-center gap-2 text-[#F4EEDD] hover:text-[#E8A33D] transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-[#E8A33D]" />
                <span>Fless091695@gmail.com</span>
              </a>

              <a
                href="https://www.facebook.com/people/CEBU-Exclusive-TOUR/61560280627125/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F4EEDD] hover:text-[#E8A33D] transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#E8A33D]" />
                <span>Facebook Page (1,097+ Likes)</span>
              </a>

              <div className="flex items-start gap-2 text-[#F4EEDD]/75 pt-1">
                <MapPin className="w-4 h-4 text-[#E8A33D] flex-shrink-0 mt-0.5" />
                <span>Cebu City, Cebu, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4EEDD]/60">
          <div>
            © {new Date().getFullYear()} CEBU Exclusive TOUR · Team Padayon. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with passion in Cebu, Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
