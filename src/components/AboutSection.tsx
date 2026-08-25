import React from 'react';
import { ShieldCheck, Bus, MapPinned, Clock, CheckCircle2, Award, Users, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FBF8EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9A4A28]">
                Who We Are · Team Padayon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122423] leading-tight tracking-tight">
                A small crew, a big island, and routes we know by heart.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#3E514F] leading-relaxed">
              <p>
                <strong className="text-[#122423] font-semibold">CEBU Exclusive TOUR</strong> is based in Cebu City and runs as an{' '}
                <strong className="text-[#0B4A47] font-semibold">exclusive affiliate of AJ's Travel and Tours</strong>, under the banner{' '}
                <span className="italic text-[#9A4A28] font-medium">Team Padayon</span> — Cebuano for <em>"keep moving forward."</em>
              </p>
              <p>
                We coordinate the private tourist vans, the fast-craft ferry tickets, the local tour coordinators, and the entrance passes so your day runs the way an exclusive tour should: seamlessly, safely, and at your own group’s pace.
              </p>
              <p>
                Whether it's swimming beside the gentle whale sharks in Oslob, gazing across Bohol's 1,200 Chocolate Hills, or winding up the cool Busay mountain ridge for panoramic city views, we manage all logistics behind the scenes.
              </p>
            </div>

            {/* Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs sm:text-sm font-semibold text-[#9A4A28] bg-[#EFE4C6] border border-[#122423]/10">
                <Bus className="w-4 h-4 text-[#0B4A47]" />
                Transportation Service
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs sm:text-sm font-semibold text-[#9A4A28] bg-[#EFE4C6] border border-[#122423]/10">
                <MapPinned className="w-4 h-4 text-[#0B4A47]" />
                Travel & Island Transfers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs sm:text-sm font-semibold text-[#9A4A28] bg-[#EFE4C6] border border-[#122423]/10">
                <Clock className="w-4 h-4 text-[#0B4A47]" />
                24/7 Fast Booking Desk
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs sm:text-sm font-semibold text-[#0B4A47] bg-[#F4EEDD] border border-[#0B4A47]/20">
                <ShieldCheck className="w-4 h-4 text-[#0B4A47]" />
                AJ’s Travel Affiliate Network
              </span>
            </div>
          </div>

          {/* Right Column: Visual 4-Step Booking Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0B4A47] text-[#F4EEDD] p-6 sm:p-8 overflow-hidden shadow-xl border border-[#0B4A47]/30">
              {/* Decorative radial glow */}
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#E8A33D]/20 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-[#F4EEDD]/20 pb-4 mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F4EEDD]">
                    What booking looks like
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#E8A33D] text-[#7A3A1F]">
                    Simple 4 Steps
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3.5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8A33D]/25 border border-[#E8A33D] text-[#E8A33D] font-serif font-bold text-sm flex items-center justify-center">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4EEDD]">Inquire or message us</h4>
                      <p className="text-xs text-[#F4EEDD]/80 mt-0.5 leading-relaxed">
                        Send your preferred dates, target destinations, and group headcount.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 pt-3 border-t border-[#F4EEDD]/15">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8A33D]/25 border border-[#E8A33D] text-[#E8A33D] font-serif font-bold text-sm flex items-center justify-center">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4EEDD]">Custom Itinerary & Schedule</h4>
                      <p className="text-xs text-[#F4EEDD]/80 mt-0.5 leading-relaxed">
                        We lock in ferry seats, vehicle dispatch, and hotel pickup timings tailored to you.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 pt-3 border-t border-[#F4EEDD]/15">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8A33D]/25 border border-[#E8A33D] text-[#E8A33D] font-serif font-bold text-sm flex items-center justify-center">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4EEDD]">Door-to-Door Pickup</h4>
                      <p className="text-xs text-[#F4EEDD]/80 mt-0.5 leading-relaxed">
                        Your friendly driver and airconditioned van meet you right at your hotel lobby.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 pt-3 border-t border-[#F4EEDD]/15">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8A33D]/25 border border-[#E8A33D] text-[#E8A33D] font-serif font-bold text-sm flex items-center justify-center">
                      04
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4EEDD]">Pure Experience, Zero Stress</h4>
                      <p className="text-xs text-[#F4EEDD]/80 mt-0.5 leading-relaxed">
                        Enjoy every viewpoint and adventure while we handle fees and logistics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-[#F4EEDD]/20 flex items-center justify-between text-xs text-[#F4EEDD]/75">
                  <span>Need urgent dates?</span>
                  <a
                    href="tel:+639660231567"
                    className="text-[#E8A33D] font-semibold underline underline-offset-2 hover:text-[#f0af52]"
                  >
                    Call +63 966 023 1567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
