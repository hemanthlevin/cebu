import React, { useState, useEffect } from 'react';
import { TourPackage, InquiryFormData } from '../types';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, Copy, Sparkles, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  packages: TourPackage[];
  prefilledData?: {
    tourId?: string;
    pax?: number;
    selectedAddOns?: string[];
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  packages,
  prefilledData,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    pax: 4,
    tourId: packages[0]?.id || 'bohol-countryside',
    preferredDate: '',
    hotelPickup: '',
    selectedAddOns: [],
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        tourId: prefilledData.tourId || prev.tourId,
        pax: prefilledData.pax || prev.pax,
        selectedAddOns: prefilledData.selectedAddOns || prev.selectedAddOns,
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `PADAYON-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedTour = packages.find((p) => p.id === formData.tourId);

  // Generate pre-formatted message for Facebook / WhatsApp
  const formattedInquiryText = encodeURIComponent(
    `Hello Team Padayon! I would like to inquire for a private tour:\n` +
      `• Tour: ${selectedTour?.title || 'Custom Tour'}\n` +
      `• Name: ${formData.fullName}\n` +
      `• Pax: ${formData.pax}\n` +
      `• Date: ${formData.preferredDate || 'To be determined'}\n` +
      `• Pickup: ${formData.hotelPickup || 'Cebu City'}\n` +
      (formData.message ? `• Note: ${formData.message}` : '')
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#EFE4C6]/40 border-t border-[#122423]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Contact Details Panel */}
          <div className="lg:col-span-5 bg-[#9A4A28] text-[#F4EEDD] rounded-2xl p-7 sm:p-9 shadow-lg relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#E8A33D]/20 blur-xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#F4EEDD]/80">
                  Direct Line · 24/7 Desk
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F4EEDD] mt-1">
                  Let's plan your padayon.
                </h3>
                <p className="text-xs sm:text-sm text-[#F4EEDD]/85 mt-2 leading-relaxed">
                  Reach out directly or send an inquiry below. We provide same-day confirmed custom quotes with full van and ferry inclusions.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-[#F4EEDD]/20">
                  <div className="w-8 h-8 rounded-full bg-[#7A3A1F] flex items-center justify-center flex-shrink-0 text-[#E8A33D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href="tel:+639660231567"
                      className="font-bold text-sm sm:text-base text-[#F4EEDD] hover:text-[#E8A33D] transition-colors block"
                    >
                      +63 966 023 1567
                    </a>
                    <div className="text-[11px] text-[#F4EEDD]/70">
                      Call or text for immediate booking & airport pickup
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-[#F4EEDD]/20">
                  <div className="w-8 h-8 rounded-full bg-[#7A3A1F] flex items-center justify-center flex-shrink-0 text-[#E8A33D]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href="mailto:Fless091695@gmail.com"
                      className="font-bold text-sm sm:text-base text-[#F4EEDD] hover:text-[#E8A33D] transition-colors block"
                    >
                      Fless091695@gmail.com
                    </a>
                    <div className="text-[11px] text-[#F4EEDD]/70">
                      For corporate group proposals & detailed itineraries
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-[#F4EEDD]/20">
                  <div className="w-8 h-8 rounded-full bg-[#7A3A1F] flex items-center justify-center flex-shrink-0 text-[#E8A33D]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/people/CEBU-Exclusive-TOUR/61560280627125/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-[#F4EEDD] hover:text-[#E8A33D] transition-colors inline-flex items-center gap-1"
                    >
                      <span>facebook.com/CEBU Exclusive TOUR</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <div className="text-[11px] text-[#F4EEDD]/70">
                      Message us on Messenger — always open 24/7
                    </div>
                  </div>
                </div>

                {/* Location & Affiliate */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-[#F4EEDD]/20">
                  <div className="w-8 h-8 rounded-full bg-[#7A3A1F] flex items-center justify-center flex-shrink-0 text-[#E8A33D]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#F4EEDD]">
                      Cebu City, Cebu, Philippines
                    </div>
                    <div className="text-[11px] text-[#F4EEDD]/70">
                      Exclusive Affiliate of AJ's Travel and Tours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form Card */}
          <div className="lg:col-span-7 bg-[#FBF8EF] border border-[#122423]/15 rounded-2xl p-6 sm:p-9 shadow-md">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#122423]">
                    Send a Tour Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E514F] mt-1">
                    No upfront payment required. This starts the conversation and reserves your van slot.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="tour-inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="Juan Dela Cruz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-pax"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                      >
                        Group Size (Pax) *
                      </label>
                      <input
                        id="inquiry-pax"
                        type="number"
                        min="1"
                        max="30"
                        required
                        value={formData.pax}
                        onChange={(e) =>
                          setFormData({ ...formData, pax: parseInt(e.target.value) || 1 })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                      >
                        Mobile / WhatsApp / Viber *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        placeholder="+63 9XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-tour"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                      >
                        Selected Tour *
                      </label>
                      <select
                        id="inquiry-tour"
                        value={formData.tourId}
                        onChange={(e) => setFormData({ ...formData, tourId: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                      >
                        {packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.title} ({pkg.region})
                          </option>
                        ))}
                        <option value="custom">Custom Multi-Day Itinerary</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-date"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                      >
                        Preferred Travel Date
                      </label>
                      <input
                        id="inquiry-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-pickup"
                      className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                    >
                      Hotel / Airport Pickup Location
                    </label>
                    <input
                      id="inquiry-pickup"
                      type="text"
                      placeholder="e.g., Waterfront Hotel Cebu / Mactan Resort / Mactan Airport Terminal 2"
                      value={formData.hotelPickup}
                      onChange={(e) => setFormData({ ...formData, hotelPickup: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-msg"
                      className="block text-xs font-bold uppercase tracking-wider text-[#3E514F] mb-1.5"
                    >
                      Special Requests or Questions
                    </label>
                    <textarea
                      id="inquiry-msg"
                      rows={3}
                      placeholder="e.g. Traveling with 2 seniors, would love wheelchair assistance at port and Loboc lunch."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#122423]/20 rounded-lg text-sm text-[#122423] focus:outline-none focus:border-[#0B4A47] focus:ring-1 focus:ring-[#0B4A47]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full py-3.5 px-4 bg-[#0B4A47] hover:bg-[#12615C] text-[#F4EEDD] font-bold text-sm sm:text-base rounded-lg tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Tour Inquiry</span>
                  </button>

                  <p className="text-[11px] text-center text-[#3E514F] pt-1">
                    We will reply promptly via phone, email, or Facebook Messenger.
                  </p>
                </form>
              </>
            ) : (
              /* Success Confirmation View */
              <div className="py-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#EFE4C6] text-[#0B4A47] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#0B4A47]" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9A4A28]">
                    Inquiry Received · Team Padayon
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#122423] mt-1">
                    Daghang Salamat, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E514F] mt-2 max-w-md mx-auto leading-relaxed">
                    Your inquiry for <strong className="text-[#122423]">{selectedTour?.title}</strong> ({formData.pax} pax) has been logged with our dispatch team.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#EFE4C6]/60 border border-[#122423]/10 max-w-sm mx-auto flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-[#9A4A28]">
                      Booking Reference
                    </div>
                    <div className="font-mono text-base font-bold text-[#0B4A47]">
                      {bookingRef}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyRef}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-[#FBF8EF] border border-[#122423]/20 hover:bg-white text-[#122423] flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Instant Messenger / WhatsApp Links */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://www.facebook.com/people/CEBU-Exclusive-TOUR/61560280627125/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B4A47] text-[#F4EEDD] text-xs sm:text-sm font-semibold hover:bg-[#12615C] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8A33D]" />
                    <span>Message on Facebook</span>
                  </a>

                  <a
                    href="tel:+639660231567"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#EFE4C6] text-[#0B4A47] text-xs sm:text-sm font-semibold hover:bg-[#EAE0C0] transition-colors border border-[#122423]/15"
                  >
                    <Phone className="w-4 h-4 text-[#9A4A28]" />
                    <span>Call +63 966 023 1567</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#3E514F] hover:text-[#0B4A47] underline cursor-pointer mt-4"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
