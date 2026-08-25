import React, { useState } from 'react';
import { TourPackage } from '../types';
import { Calculator, Users, Plus, Check, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface TripCalculatorProps {
  packages: TourPackage[];
  onApplyCalculation: (data: {
    tourId: string;
    pax: number;
    selectedAddOns: string[];
    estimatedTotal: number;
  }) => void;
}

export const TripCalculator: React.FC<TripCalculatorProps> = ({
  packages,
  onApplyCalculation,
}) => {
  const [selectedTourId, setSelectedTourId] = useState<string>(packages[0]?.id || 'bohol-countryside');
  const [paxCount, setPaxCount] = useState<number>(4);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['loboc-lunch']);

  const currentTour = packages.find((p) => p.id === selectedTourId) || packages[0];

  // Pricing math: larger groups get lower per-pax van overhead
  const getPaxMultiplier = (pax: number) => {
    if (pax === 1) return 1.6;
    if (pax === 2) return 1.15;
    if (pax <= 4) return 1.0;
    if (pax <= 8) return 0.88;
    if (pax <= 12) return 0.80;
    return 0.75;
  };

  const multiplier = getPaxMultiplier(paxCount);
  const baseRatePerPax = Math.round(currentTour.basePricePerPax * multiplier);
  const baseTotal = baseRatePerPax * paxCount;

  // Add-ons calculation
  const addOnsTotal = (currentTour.addOns || [])
    .filter((addon) => selectedAddOns.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price * paxCount, 0);

  const grandTotal = baseTotal + addOnsTotal;
  const grandPerPax = Math.round(grandTotal / paxCount);

  const toggleAddon = (addonId: string) => {
    if (selectedAddOns.includes(addonId)) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addonId));
    } else {
      setSelectedAddOns([...selectedAddOns, addonId]);
    }
  };

  const handleApply = () => {
    onApplyCalculation({
      tourId: currentTour.id,
      pax: paxCount,
      selectedAddOns,
      estimatedTotal: grandTotal,
    });
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#FBF8EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4C6] text-[#9A4A28] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#0B4A47]" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122423] tracking-tight">
            Estimate your group's tour rate.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3E514F]">
            Transparent quotes with no hidden fees. Select your destination, group size, and optional add-ons below.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto bg-[#F4EEDD]/50 border border-[#122423]/15 rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Select Tour */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9A4A28] mb-2">
                  1. Choose Tour Route
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => {
                        setSelectedTourId(pkg.id);
                        setSelectedAddOns([]);
                      }}
                      className={`p-3 rounded-lg text-left text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                        selectedTourId === pkg.id
                          ? 'bg-[#0B4A47] text-[#F4EEDD] border-[#0B4A47] shadow-sm'
                          : 'bg-[#FBF8EF] text-[#122423] border-[#122423]/15 hover:border-[#0B4A47]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif">{pkg.title.split(' ')[0]} Tour</span>
                        {selectedTourId === pkg.id && <Check className="w-3.5 h-3.5 text-[#E8A33D]" />}
                      </div>
                      <div className="text-[11px] opacity-80 mt-0.5 font-normal line-clamp-1">
                        {pkg.region} · {pkg.duration.split(' ')[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Number of Pax */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9A4A28]">
                    2. Group Size (Pax)
                  </label>
                  <span className="text-xs font-bold text-[#0B4A47] bg-[#EFE4C6] px-2.5 py-0.5 rounded">
                    {paxCount} {paxCount === 1 ? 'Guest' : 'Guests'} ({paxCount >= 6 ? 'Group Discount Active' : 'Private Van'})
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={paxCount}
                    onChange={(e) => setPaxCount(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-[#EFE4C6] rounded-lg appearance-none cursor-pointer accent-[#0B4A47]"
                  />
                </div>

                <div className="flex justify-between text-[11px] text-[#3E514F] mt-1 font-medium">
                  <span>1 (Solo)</span>
                  <span>4 (Barkada)</span>
                  <span>8 (Family)</span>
                  <span>15+ (Big Group)</span>
                </div>
              </div>

              {/* Step 3: Add-ons */}
              {currentTour.addOns && currentTour.addOns.length > 0 && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9A4A28] mb-2">
                    3. Optional Add-ons & Experiences
                  </label>
                  <div className="space-y-2">
                    {currentTour.addOns.map((addon) => {
                      const isChecked = selectedAddOns.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddon(addon.id)}
                          className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#EFE4C6] border-[#0B4A47] text-[#122423]'
                              : 'bg-[#FBF8EF] border-[#122423]/10 text-[#3E514F] hover:border-[#122423]/30'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border ${
                                isChecked
                                  ? 'bg-[#0B4A47] border-[#0B4A47] text-[#F4EEDD]'
                                  : 'border-[#122423]/30 bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3" />}
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-semibold text-[#122423]">
                                {addon.name}
                              </div>
                              <div className="text-[11px] text-[#3E514F]">{addon.description}</div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#9A4A28] whitespace-nowrap pl-2">
                            +₱{addon.price.toLocaleString()} / pax
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Price Summary Breakdown Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B4A47] text-[#F4EEDD] rounded-xl p-6 sm:p-7 shadow-md">
              <div>
                <div className="flex items-center justify-between border-b border-[#F4EEDD]/20 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E8A33D]">
                    Estimated Quote
                  </span>
                  <span className="text-[11px] bg-[#E8A33D]/20 text-[#E8A33D] px-2 py-0.5 rounded border border-[#E8A33D]/30">
                    PHP (₱)
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between text-[#F4EEDD]/85">
                    <span>{currentTour.title}</span>
                    <span className="font-semibold text-[#F4EEDD]">
                      ₱{baseRatePerPax.toLocaleString()} × {paxCount}
                    </span>
                  </div>

                  {selectedAddOns.length > 0 && (
                    <div className="pt-2 border-t border-[#F4EEDD]/10 space-y-1.5 text-xs text-[#F4EEDD]/75">
                      <div className="font-medium text-[#E8A33D]">Selected Add-ons:</div>
                      {currentTour.addOns
                        ?.filter((a) => selectedAddOns.includes(a.id))
                        .map((a) => (
                          <div key={a.id} className="flex justify-between pl-2">
                            <span className="line-clamp-1">{a.name}</span>
                            <span>₱{(a.price * paxCount).toLocaleString()}</span>
                          </div>
                        ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#F4EEDD]/20 flex flex-col gap-1">
                    <span className="text-xs text-[#F4EEDD]/70">Estimated Total Rate:</span>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#E8A33D]">
                      ₱{grandTotal.toLocaleString()}
                    </div>
                    <span className="text-xs text-[#F4EEDD]/80">
                      Approx. <strong className="text-[#F4EEDD]">₱{grandPerPax.toLocaleString()}</strong> per person
                    </span>
                  </div>
                </div>

                {/* Included badges */}
                <div className="mt-5 p-3 rounded-lg bg-[#0A3D3A] border border-[#F4EEDD]/15 text-[11px] space-y-1 text-[#F4EEDD]/80">
                  <div className="font-semibold text-[#F4EEDD] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#E8A33D]" />
                    Includes:
                  </div>
                  <div>• Exclusive Air-Conditioned Tourist Van</div>
                  <div>• Licensed Driver, Fuel & Environmental Fees</div>
                  {currentTour.region === 'Bohol' && <div>• Round-trip Fast-craft Ferry Tickets</div>}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-[#F4EEDD]/20">
                <button
                  type="button"
                  onClick={handleApply}
                  id="btn-apply-quote-inquiry"
                  className="w-full py-3 px-4 rounded bg-[#E8A33D] hover:bg-[#f0af52] text-[#7A3A1F] font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow transition-all cursor-pointer active:scale-98"
                >
                  <span>Book with this Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[10px] text-center text-[#F4EEDD]/60 mt-2">
                  No credit card required. Formal confirmation sent via WhatsApp/Messenger.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
