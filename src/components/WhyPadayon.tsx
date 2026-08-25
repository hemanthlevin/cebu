import React from 'react';
import { ShieldCheck, Clock, Sliders, MapPin, CheckCircle, HeartHandshake } from 'lucide-react';

export const WhyPadayon: React.FC = () => {
  const reasons = [
    {
      num: 'Affiliate',
      title: "Backed by AJ's Travel",
      icon: <ShieldCheck className="w-5 h-5 text-[#E8A33D]" />,
      desc: "Bookings run through an established Cebu tour network with commercial insurance and verified vehicles — not a solo unverified freelancer."
    },
    {
      num: 'Always Open',
      title: '24/7 Booking & Support',
      icon: <Clock className="w-5 h-5 text-[#E8A33D]" />,
      desc: 'Message our desk around the clock. Early morning airport arrivals or last-minute ferry adjustments are monitored continuously.'
    },
    {
      num: 'Custom Fit',
      title: 'Itineraries Adjust to You',
      icon: <Sliders className="w-5 h-5 text-[#E8A33D]" />,
      desc: 'Add or drop stops like ATV rides, canyoneering leaps, or a leisurely river cruise lunch depending on your family’s preferred pace.'
    },
    {
      num: 'Local Crew',
      title: 'Cebu-Based Guides & Drivers',
      icon: <MapPin className="w-5 h-5 text-[#E8A33D]" />,
      desc: 'Licensed drivers and coordinators who know the Cebu–Bohol crossings, best highway pitstops, and scenic photo angles firsthand.'
    }
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-[#FBF8EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9A4A28]">
            Why Travel With Padayon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122423] mt-1.5 tracking-tight">
            What guests keep coming back for.
          </h2>
          <p className="mt-3 text-base text-[#3E514F] leading-relaxed">
            We treat every booking like our own family is visiting the Visayas. Here is what sets our private service apart.
          </p>
        </div>

        {/* 4 Column Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#122423]/15 border border-[#122423]/15 rounded-xl overflow-hidden shadow-sm">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8EF] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#F4EEDD]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#9A4A28] uppercase tracking-wider">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EFE4C6] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#122423] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3E514F] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#122423]/10 flex items-center gap-1.5 text-xs text-[#0B4A47] font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-[#E8A33D]" />
                <span>Padayon Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
