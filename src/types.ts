export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  region: 'Bohol' | 'Cebu South' | 'Cebu City' | 'Islands';
  duration: string;
  isMostBooked?: boolean;
  basePricePerPax: number;
  minPax: number;
  maxPax: number;
  heroImage: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    time: string;
    activity: string;
    description: string;
  }[];
  addOns?: {
    id: string;
    name: string;
    price: number;
    description: string;
  }[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  trip: string;
  date: string;
  rating: number;
  comment: string;
  avatarBg: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  pax: number;
  tourId: string;
  preferredDate: string;
  hotelPickup: string;
  selectedAddOns: string[];
  message: string;
}
