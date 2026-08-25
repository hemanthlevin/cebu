import React from 'react';
import { TourPackage } from '../types';
import { X, Clock, MapPin, Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface TourDetailModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  onBook: (pkg: TourPackage) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  pkg,
  onClose,
  onBook,
}) => {
  if (!pkg) return null;

  return (
    <div
      id="tour-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF8EF] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#122423]/20 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-[#0B4A47] flex-shrink-0">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122423]/90 via-[#122423]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner text */}
          <div className="absolute bottom-4 left-6 right-6 text-[#F4EEDD]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#E8A33D] text-[#7A3A1F]">
                {pkg.region}
              </span>
              <span className="text-xs text-[#F4EEDD]/90 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#E8A33D]" />
                {pkg.duration}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EEDD] leading-tight">
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F4EEDD]/80 mt-1">{pkg.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A4A28] mb-3">
              Tour Highlights & Key Stops
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#122423] p-2 rounded-lg bg-[#EFE4C6]/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-2 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hour-by-Hour Itinerary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A4A28] mb-3">
              Hour-by-Hour Day Schedule
            </h3>
            <div className="border-l-2 border-[#E8A33D]/60 ml-2 sm:ml-4 space-y-5 pl-4 sm:pl-6">
              {pkg.itinerary.map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[23px] sm:-left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-[#0B4A47] border-2 border-[#E8A33D]" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="font-mono font-bold text-xs text-[#9A4A28]">
                      {item.time}
                    </span>
                    <span className="font-semibold text-sm text-[#122423]">
                      {item.activity}
                    </span>
                  </div>
                  <p className="text-xs text-[#3E514F] mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#122423]/10">
            {/* Inclusions */}
            <div className="p-4 rounded-xl bg-[#0B4A47]/5 border border-[#0B4A47]/20">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B4A47] mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B4A47]" />
                What's Included
              </h4>
              <ul className="space-y-2 text-xs text-[#3E514F]">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0B4A47] font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions & Optional Add-ons */}
            <div className="p-4 rounded-xl bg-[#9A4A28]/5 border border-[#9A4A28]/20">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#9A4A28] mb-3 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#9A4A28]" />
                Exclusions / Optional
              </h4>
              <ul className="space-y-2 text-xs text-[#3E514F]">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#9A4A28] font-bold">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 bg-[#FBF8EF] border-t border-[#122423]/15 p-4 sm:p-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] text-[#3E514F]">Starting from</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#0B4A47]">
              ₱{pkg.basePricePerPax.toLocaleString()} <span className="text-xs font-sans font-normal text-[#3E514F]">/ person</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#3E514F] hover:text-[#122423] rounded-lg cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(pkg);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#0B4A47] hover:bg-[#12615C] text-[#F4EEDD] font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book This Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
