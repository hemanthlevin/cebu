import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/tours';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#EFE4C6]/30 border-t border-[#122423]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9A4A28]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#122423] mt-1.5 tracking-tight">
            Everything you need to know before booking.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FBF8EF] border border-[#122423]/15 rounded-xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F4EEDD]/30 transition-colors"
                >
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#122423]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0B4A47] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#9A4A28]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3E514F] leading-relaxed border-t border-[#122423]/10 bg-[#FBF8EF]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-[#3E514F]">
          Have a unique question?{' '}
          <a
            href="tel:+639660231567"
            className="text-[#0B4A47] font-semibold underline hover:text-[#9A4A28]"
          >
            Call our desk directly at +63 966 023 1567
          </a>
        </div>
      </div>
    </section>
  );
};
