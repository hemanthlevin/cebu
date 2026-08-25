import React from 'react';
import { ReviewItem } from '../types';
import { Star, MessageCircle, ThumbsUp, CheckCircle2 } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#0B4A47] text-[#F4EEDD] py-16 sm:py-24"
    >
      {/* Background visual glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A33D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#F4EEDD]/20 pb-8">
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E8A33D]">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4EEDD] mt-1.5 tracking-tight">
              Team Padayon, reviewed by the people who rode with us.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#0A3D3A]/80 border border-[#F4EEDD]/20 px-5 py-3 rounded-xl">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#E8A33D] leading-none">
              100%
            </div>
            <div className="text-xs text-[#F4EEDD]/80 leading-tight">
              <div className="flex text-[#E8A33D] text-xs mb-0.5">
                {'★'.repeat(5)}
              </div>
              <span>recommend rate based on 11 Facebook & direct reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F4EEDD]/[0.07] border border-[#F4EEDD]/15 rounded-xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xs hover:border-[#E8A33D]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#E8A33D] text-sm tracking-widest">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#E8A33D] font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Guest
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F4EEDD]/90 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4EEDD]/15 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${rev.avatarBg} text-[#F4EEDD] flex items-center justify-center font-bold text-xs flex-shrink-0 border border-[#F4EEDD]/30`}
                >
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-[#F4EEDD]">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-[#F4EEDD]/60">{rev.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social link footer */}
        <div className="mt-10 pt-6 border-t border-[#F4EEDD]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#F4EEDD]/80">
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-[#E8A33D]" />
            <span>Over 1,097 followers and likes on our official Facebook Page</span>
          </div>
          <a
            href="https://www.facebook.com/people/CEBU-Exclusive-TOUR/61560280627125/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E8A33D] hover:underline font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Visit Facebook Page for More Reviews →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
