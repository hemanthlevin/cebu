import { TourPackage, ReviewItem } from '../types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'bohol-countryside',
    title: 'Bohol Countryside Exclusive Tour',
    tagline: 'Ferry crossing, Chocolate Hills, tarsiers & buffet river cruise',
    region: 'Bohol',
    duration: 'Full Day (12-14 hrs)',
    isMostBooked: true,
    basePricePerPax: 3200,
    minPax: 2,
    maxPax: 15,
    heroImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Chocolate Hills viewing deck (iconic 1,200+ cone-shaped hills)',
      'Bohol Tarsier Conservation Area in Corella (world’s smallest primates)',
      'Bilar Man-Made Mahogany Forest drive-through & photo stop',
      'Baclayon Historic Church & Museum (one of the oldest stone churches)',
      'Blood Compact (Sandugo) Shrine monument',
      'Optional ATV quad bike ride at foot of Chocolate Hills',
      'Optional Loboc Floating Restaurant river buffet lunch'
    ],
    inclusions: [
      'Round-trip OceanJet / fast craft ferry tickets (Cebu - Tagbilaran - Cebu)',
      'Exclusive air-conditioned tourist van in Bohol',
      'All tourism entrance fees & environmental tariffs',
      'Professional local driver & tour coordinator',
      'Hotel pickup and drop-off in Cebu City / Mandaue / Mactan',
      'Port terminal fees in Cebu and Tagbilaran'
    ],
    exclusions: [
      'Loboc River Cruise buffet lunch (available as add-on)',
      'ATV Rental at Chocolate Hills (available as add-on)',
      'Souvenirs and personal snacks',
      'Driver / guide gratuity (optional)'
    ],
    itinerary: [
      { time: '05:00 AM', activity: 'Hotel Pickup', description: 'Early morning van pickup at your Cebu / Mactan hotel.' },
      { time: '06:00 AM', activity: 'Cebu Pier 1 Departure', description: 'Board fast craft ferry to Tagbilaran Port, Bohol (2 hrs scenic cruise).' },
      { time: '08:15 AM', activity: 'Arrival & Welcome in Bohol', description: 'Meet your private Bohol driver-guide at the terminal.' },
      { time: '09:00 AM', activity: 'Blood Compact & Baclayon Church', description: 'Explore historical sites dating back to Spanish colonial times.' },
      { time: '10:15 AM', activity: 'Tarsier Conservation Sanctuary', description: 'Walk through quiet natural enclosure to spot wild Philippine Tarsiers.' },
      { time: '11:45 AM', activity: 'Loboc River Cruise Buffet', description: 'Enjoy local Visayan delicacies with live acoustic music while cruising down the jade river.' },
      { time: '01:30 PM', activity: 'Bilar Man-Made Forest', description: 'Lush 2km canopy stretch of planted mahogany trees, perfect for photos.' },
      { time: '02:30 PM', activity: 'Chocolate Hills Complex & ATV', description: 'Climb the 214 steps to the panoramic summit deck and optional ATV trails.' },
      { time: '04:15 PM', activity: 'Souvenir Stop & Aproniana Gift Shop', description: 'Sample famous Bohol Peanut Kisses and Calamay.' },
      { time: '05:40 PM', activity: 'Tagbilaran Port Ferry Return', description: 'Board ferry back to Cebu City.' },
      { time: '08:00 PM', activity: 'Drop-off at Hotel', description: 'Arrive back safely at your Cebu accommodation.' }
    ],
    addOns: [
      { id: 'loboc-lunch', name: 'Loboc River Buffet Lunch Cruise', price: 900, description: 'All-you-can-eat Filipino buffet with live cultural performance' },
      { id: 'atv-adventure', name: 'Chocolate Hills ATV Quad Bike (30 mins)', price: 650, description: 'Off-road quad biking through dirt trails and foothills' },
      { id: 'butterfly-garden', name: 'Bohol Habitat Conservation Butterfly Center', price: 150, description: 'Interactive guided tour of colorful native butterfly species' }
    ]
  },
  {
    id: 'oslob-waterfalls',
    title: 'Oslob Whale Sharks & Southern Waterfalls',
    tagline: 'Swim alongside gentle giants and explore turquoise cascades',
    region: 'Cebu South',
    duration: 'Full Day (13-15 hrs)',
    isMostBooked: false,
    basePricePerPax: 2850,
    minPax: 2,
    maxPax: 15,
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Oslob Whale Shark snorkeling encounter (Tan-awan sanctuary)',
      'Tumalog Falls misty curtain and natural forest pool',
      'Heritage Baluarte watchtower & Cuartel ruins in Oslob',
      'Optional Kawasan Falls canyoneering adrenaline leap',
      'Optional Sumilon Island sandbar crystal water crossing'
    ],
    inclusions: [
      'Exclusive air-conditioned van transfer for the entire south route',
      'Licensed local driver, fuel, toll, and parking fees',
      'Whale shark watching boat, life vest, snorkel & mask gear',
      'Local boatman assistance and environmental briefing fee',
      'Tumalog Falls entrance fee and local habal-habal transfer',
      'Door-to-door hotel pickup in Cebu City / Mandaue / Mactan'
    ],
    exclusions: [
      'Underwater camera rental (GoPro with guide photographer available on-site)',
      'Kawasan Canyoneering full adventure package (available as add-on)',
      'Meals and personal drinks'
    ],
    itinerary: [
      { time: '03:30 AM', activity: 'Early Hotel Departure', description: 'Depart Cebu City before traffic to secure early snorkeling queue number.' },
      { time: '06:30 AM', activity: 'Arrival in Tan-awan, Oslob', description: 'Safety orientation with marine wildlife wardens and gear fitting.' },
      { time: '07:00 AM', activity: 'Whale Shark Swimming (30-45m)', description: 'Snorkel right beside peaceful Rhincodon typus sharks in open water.' },
      { time: '08:30 AM', activity: 'Tumalog Falls Enchanting Basin', description: 'Short ride down to the mesmerizing weeping curtain waterfall.' },
      { time: '10:30 AM', activity: 'Sumilon Sandbar or Oslob Heritage', description: 'Relax on powder-white sandbars or explore Spanish coral-stone ruins.' },
      { time: '12:30 PM', activity: 'Seaside Lunch Stop', description: 'Dine on fresh seafood and Cebuano barbecue by the ocean.' },
      { time: '02:00 PM', activity: 'Optional Kawasan Canyoneering / Relaxed Return', description: 'Proceed to Badian for river trekking or scenic coastal drive back.' },
      { time: '06:00 PM', activity: 'Hotel Arrival', description: 'Safe drop-off back at your Cebu hotel.' }
    ],
    addOns: [
      { id: 'kawasan-canyoneering', name: 'Kawasan Falls Full Canyoneering (Badian)', price: 1800, description: 'Includes certified safety guide, helmet, vest, shoes & celebratory lunch' },
      { id: 'gopro-rental', name: 'GoPro Underwater Camera Rental with Guide Shooters', price: 700, description: 'Unlimited photos and videos transferred straight to your phone' },
      { id: 'sumilon-sandbar', name: 'Sumilon Island Sandbar Boat Crossing', price: 600, description: 'Round-trip boat to pristine turquoise sandbar & marine sanctuary' }
    ]
  },
  {
    id: 'cebu-city-highlands',
    title: 'Cebu City Heritage & Highlands Tour',
    tagline: 'Centuries of Philippine history meets breathtaking mountain views',
    region: 'Cebu City',
    duration: 'Half Day / Full Day (6-8 hrs)',
    isMostBooked: false,
    basePricePerPax: 1950,
    minPax: 2,
    maxPax: 15,
    heroImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Magellan’s Cross & Basilica Minore del Sto. Niño',
      'Fort San Pedro (Spanish military defense structure)',
      'Yap-Sandiego Ancestral House or Heritage of Cebu Monument',
      'Sirao Garden ("Little Amsterdam of Cebu") with giant hand view',
      'Temple of Leah (Roman-style tribute of eternal love)',
      'Tops Lookout / Busay sunset overlooking Metro Cebu & Mactan Channel'
    ],
    inclusions: [
      'Exclusive private van for city and upland mountain route',
      'Experienced friendly driver and fuel costs',
      'Entrance fees to all listed heritage monuments and highland gardens',
      'Flexible start time (Morning 8:00 AM or Afternoon 12:00 PM)',
      'Door-to-door pickup and drop-off within Metro Cebu'
    ],
    exclusions: [
      'Meals and refreshments at mountain cafes',
      'Personal shopping / pasalubong'
    ],
    itinerary: [
      { time: '08:30 AM', activity: 'Hotel Pickup', description: 'Convenient morning pickup from your hotel lobby.' },
      { time: '09:00 AM', activity: 'Historic Downtown Circuit', description: 'Visit Magellan’s Cross, the Basilica of Santo Niño, and Fort San Pedro.' },
      { time: '10:30 AM', activity: 'Parian & Ancestral Houses', description: 'Walk through historic Spanish-Chinese merchant heritage compounds.' },
      { time: '11:45 AM', activity: 'Scenic Drive to Busay Highlands', description: 'Ascend the cooling mountain slopes with lush vistas.' },
      { time: '12:30 PM', activity: 'Sirao Garden "Little Amsterdam"', description: 'Vibrant flower fields, artistic bird nests, and the famous giant hand view.' },
      { time: '02:00 PM', activity: 'Temple of Leah', description: 'Magnificent Greek-Roman architectural marvel with statues and panoramic views.' },
      { time: '03:30 PM', activity: 'Tops Lookout & Sunset Views', description: 'Unmatched 360-degree overlook of the entire Cebu metropolitan area.' },
      { time: '04:45 PM', activity: 'Drop-off at Hotel or Pasalubong Center', description: 'Optional drop-off at dried mangoes and lechon specialty hubs.' }
    ],
    addOns: [
      { id: 'lechon-lunch', name: 'Authentic House of Lechon Platter Experience', price: 550, description: 'Taste world-famous Cebu roasted pig with crunchy skin' },
      { id: '10000-roses', name: '10,000 Roses Cafe Cordova Extension', price: 400, description: 'Evening visit to glowing LED rose garden by the Mactan seaside' }
    ]
  },
  {
    id: 'moalboal-sardine-pescador',
    title: 'Moalboal Sardine Run & Pescador Island',
    tagline: 'Millions of swirling sardines and wild sea turtles reef snorkel',
    region: 'Cebu South',
    duration: 'Full Day (10-12 hrs)',
    isMostBooked: false,
    basePricePerPax: 2600,
    minPax: 2,
    maxPax: 14,
    heroImage: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Famous Moalboal Sardine Run just meters off Panagsama Beach',
      'Talisay Point Sea Turtle sanctuary swim',
      'Pescador Island coral reef wall diving & snorkeling',
      'Dolphin watching in Tañon Strait (weather permitting)'
    ],
    inclusions: [
      'Private air-conditioned vehicle to and from Moalboal',
      'Chartered motorized outrigger boat for island hopping',
      'Complete snorkeling gear, life jacket, and local spotter',
      'Government environmental and marine park permits',
      'Hotel pickup and drop-off in Cebu'
    ],
    exclusions: [
      'Personal lunch at Panagsama beach strip',
      'Underwater camera hire'
    ],
    itinerary: [
      { time: '05:30 AM', activity: 'Hotel Pickup', description: 'Early morning scenic transfer along the southwestern coast.' },
      { time: '08:30 AM', activity: 'Board Outrigger at Panagsama', description: 'Meet your boat captain and marine guides.' },
      { time: '09:00 AM', activity: 'Pescador Island Reef Wall', description: 'Discover thriving soft corals and multi-colored tropical fish.' },
      { time: '10:30 AM', activity: 'The Great Sardine Run', description: 'Witness millions of sardines moving in synchrony like a shimmering wall.' },
      { time: '11:45 AM', activity: 'Sea Turtle Encounter', description: 'Observe gentle green turtles grazing along the shallow sea grass.' },
      { time: '01:00 PM', activity: 'Lunch at Seaside Cafe', description: 'Fresh tropical fruit shakes and fresh seafood.' },
      { time: '02:30 PM', activity: 'Return Trip to Cebu', description: 'Relax on comfortable van ride back to city.' }
    ],
    addOns: [
      { id: 'badian-zipline', name: 'Badian Highland Zipline Extension', price: 600, description: '1-kilometer exhilarating canopy flight above green valleys' }
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Katrina & Mark V.',
    role: 'Couple Travelers from Manila',
    trip: 'Bohol Countryside Exclusive Tour',
    date: 'February 2026',
    rating: 5,
    comment: 'Sundo sila sa hotel on time! Our driver Kuya Jun was very polite and the Bohol countryside route hit every stop we asked about. The Chocolate Hills and Loboc River cruise were flawlessly organized without any queuing hassle.',
    avatarBg: 'bg-[#0B4A47]'
  },
  {
    id: 'rev-2',
    name: 'The Tan Family (8 pax)',
    role: 'Family Vacation with Seniors',
    trip: 'Bohol Day Tour & Tagbilaran',
    date: 'January 2026',
    rating: 5,
    comment: 'Driver and guide were extraordinarily patient with our lolas and lolos in the group — walked us through the tarsier sanctuary at their own pace and arranged priority seating at the ferry. Solid Team Padayon service!',
    avatarBg: 'bg-[#9A4A28]'
  },
  {
    id: 'rev-3',
    name: 'David Chen & Barkada',
    role: 'Barkada Group Booking',
    trip: 'Oslob Whale Sharks + Tumalog Falls',
    date: 'August 2025',
    rating: 5,
    comment: 'Messaged late at night about a promo package and still got a reply with a full quote before morning. The van was cool and clean, and we were in the first batch to snorkel with the whale sharks!',
    avatarBg: 'bg-[#12615C]'
  },
  {
    id: 'rev-4',
    name: 'Sarah & Alex Miller',
    role: 'International Guests (Australia)',
    trip: 'Cebu City Heritage & Highlands',
    date: 'December 2025',
    rating: 5,
    comment: 'Best tour company in Cebu! Booking via Facebook and WhatsApp was effortless. Temple of Leah and Sirao Garden photos came out spectacular thanks to our driver who doubled as a great photographer.',
    avatarBg: 'bg-[#E8A33D]'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How do we book a tour with CEBU Exclusive TOUR?',
    a: 'Simply fill out our inquiry form or send a direct message on our Facebook Page / WhatsApp (+63 966 023 1567). We provide instant custom quotes with zero upfront inquiry fees.'
  },
  {
    q: 'What is your affiliation with AJ’s Travel and Tours?',
    a: 'We are an authorized exclusive affiliate partner operating under the Team Padayon banner. All vehicle permits, ferry seat allocations, and tour operations are backed by AJ’s Travel and Tours network.'
  },
  {
    q: 'Are ferry tickets and entrance fees included in Bohol tours?',
    a: 'Yes! Our Bohol packages come complete with round-trip fast craft ferry tickets (Cebu–Tagbilaran), port terminal fees, air-conditioned private van in Bohol, and main sanctuary admission passes.'
  },
  {
    q: 'Can we customize stops or add activities like Canyoneering / ATV?',
    a: 'Absolutely! All our tours are 100% private and exclusive to your group. You can add ATV quad biking in Bohol, Kawasan Canyoneering, or change pickup times to match your flight schedule.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept GCash, Bank Transfers (BDO, BPI), Maya, and major credit cards via secure digital payment links, as well as cash on pickup day after initial booking deposit.'
  }
];
