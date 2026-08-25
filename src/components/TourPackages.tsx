import React, { useState } from 'react';
import { TourPackage } from '../types';
import { Clock, MapPin, Check, ArrowRight, Sparkles, Eye, Users } from 'lucide-react';

interface TourPackagesProps {
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
  onInquirePackage: (pkg: TourPackage) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({
  packages,
  onSelectPackage,
  onInquirePackage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Bohol', 'Cebu South', 'Cebu City'];

  const filteredPackages =
    selectedCategory === 'All'
      ? packages
      : packages.filter((pkg) => pkg.region === selectedCategory);

  return (
    <section id="packages" className="py-16 sm:py-24 bg-[#EFE4C6]/40 border-y border-[#122423]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9A4A28]">
              Sample Itineraries & Routes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122423] mt-1.5 tracking-tight">
              Tour packages worth padayon-ing for.
            </h2>
            <p className="mt-3 text-base text-[#3E514F] leading-relaxed">
              All tours are 100% private and customized per group size and preferred pickup point. Click any package to view the hour-by-hour schedule.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#FBF8EF] rounded-lg border border-[#122423]/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B4A47] text-[#F4EEDD] shadow-xs'
                    : 'text-[#3E514F] hover:text-[#0B4A47] hover:bg-[#EFE4C6]/50'
                }`}
              >
                {cat === 'All' ? 'All Packages' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`flex flex-col bg-[#FBF8EF] rounded-xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden ${
                pkg.isMostBooked
                  ? 'border-[#E8A33D] ring-1 ring-[#E8A33D]/40'
                  : 'border-[#122423]/15'
              }`}
            >
              {/* Ribbon for Most Booked */}
              {pkg.isMostBooked && (
                <div className="absolute top-4 right-0 bg-[#9A4A28] text-[#F4EEDD] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-l shadow-sm flex items-center gap-1 z-10">
                  <Sparkles className="w-3 h-3 text-[#E8A33D]" />
                  <span>Most Booked</span>
                </div>
              )}

              {/* Photo Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#0B4A47]">
                <img
                  src={pkg.heroImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122423]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#F4EEDD]">
                  <span className="inline-flex items-center gap-1 bg-[#0B4A47]/80 backdrop-blur-xs px-2.5 py-0.5 rounded font-medium border border-white/10">
                    <Clock className="w-3 h-3 text-[#E8A33D]" />
                    {pkg.duration}
                  </span>
                  <span className="font-semibold text-[#E8A33D]">
                    From ₱{pkg.basePricePerPax.toLocaleString()} / pax
                  </span>
                </div>
              </div>

              {/* Top Details */}
              <div className="p-5 sm:p-6 pb-3 border-b border-[#122423]/10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A4A28]">
                  {pkg.region}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#122423] mt-1 leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#3E514F] mt-1.5 line-clamp-2">
                  {pkg.tagline}
                </p>
              </div>

              {/* Highlights List */}
              <div className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between">
                <ul className="space-y-2.5 mb-6">
                  {pkg.highlights.slice(0, 4).map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E514F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-2 flex-shrink-0" />
                      <span className="line-clamp-2 leading-relaxed">{hl}</span>
                    </li>
                  ))}
                  {pkg.highlights.length > 4 && (
                    <li className="text-xs text-[#0B4A47] font-semibold pl-4">
                      + {pkg.highlights.length - 4} more activities & stops
                    </li>
                  )}
                </ul>

                {/* Card Actions */}
                <div className="pt-4 border-t border-dashed border-[#122423]/15 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    id={`btn-view-itinerary-${pkg.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B4A47] hover:text-[#9A4A28] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Itinerary</span>
                  </button>

                  <button
                    onClick={() => onInquirePackage(pkg)}
                    id={`btn-inquire-${pkg.id}`}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded bg-[#0B4A47] hover:bg-[#12615C] text-[#F4EEDD] text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Notice */}
        <div className="mt-12 p-6 rounded-xl bg-[#FBF8EF] border border-[#122423]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE4C6] flex items-center justify-center text-[#0B4A47] flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base text-[#122423]">
                Traveling with a custom group or special route?
              </h4>
              <p className="text-xs sm:text-sm text-[#3E514F]">
                We create bespoke multi-day itineraries for barkadas, company retreats, and family reunions.
              </p>
            </div>
          </div>
          <button
            onClick={() => onInquirePackage(packages[0])}
            className="whitespace-nowrap px-4 py-2 rounded bg-[#9A4A28] hover:bg-[#7A3A1F] text-[#F4EEDD] text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer"
          >
            Request Custom Route
          </button>
        </div>
      </div>
    </section>
  );
};
