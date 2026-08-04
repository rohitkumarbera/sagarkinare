export interface Room {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  capacity: string;
  bedType: string;
  size: string;
  view: string;
  ac: boolean;
  tv: string;
  wifi: boolean;
  breakfastIncluded: boolean;
  sweetWater: boolean;
  featured: boolean;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Dining & Beach' | 'Hospitality' | 'Leisure';
  description: string;
  iconName: string;
  image: string;
  highlightBadge?: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Bengali Seafood' | 'North Indian' | 'Chinese Delicacies' | 'Bonfire BBQ' | 'Beverages & Desserts';
  price: number;
  description: string;
  isChefSpecial?: boolean;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar: string;
  roomBooked: string;
}

export interface FAQItem {
  id: string;
  category: 'Booking & Tariff' | 'Check-in & Rules' | 'Dining & Food' | 'Beach & Location';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rooms' | 'Beach' | 'Garden' | 'Restaurant' | 'Bonfire' | 'Sunset' | 'Night View' | 'Swimming Area';
  image: string;
  caption: string;
  isOriginalPropertyPhoto?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  discountBadge: string;
  code: string;
  validity: string;
  description: string;
  image: string;
  inclusions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export const HOTEL_INFO = {
  name: "Sagar Kinare Hotel & Resorts",
  tagline: "Experience Coastal Luxury Beside Tajpur Beach",
  address: "Bodhra, Tajpur Beach, Purba Medinipur, West Bengal - 721423, India",
  phonePrimary: "+91 95931 65851",
  phoneSecondary: "+91 97325 92801",
  phoneOther: ["+91 95931 65848", "+91 97329 85098"],
  email: "sagarkinare.tajpur@gmail.com",
  checkIn: "12:00 PM (Noon)",
  checkOut: "11:00 AM",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.868735231718!2d87.62562141502447!3d21.650894085663734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0339d4e5f7a29f%3A0xb3a82643a6d4bc8f!2sSagar%20Kinare%20Hotel%20%26%20Resorts%2C%20Tajpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappNumber: "919593165851",
  socials: {
    facebook: "https://facebook.com/sagarkinaretajpur",
    instagram: "https://instagram.com/sagarkinaretajpur",
    twitter: "https://twitter.com/sagarkinaretajpur",
    tripadvisor: "https://tripadvisor.com"
  }
};

// Real Downloaded Original Images Mapped from tajpursagarkinare.com
export const ORIGINAL_IMAGES = {
  heroBanner: "./images/original/hero_banner_tajpur.webp",
  heroBannerJpg: "./images/original/hero_banner_tajpur.jpg",
  propertyOverview: "./images/original/1490580_1405253236381114_107032954_o.jpg-3991_1684908055.jpg",
  deluxeRoom: "./images/original/8646_1684906992.jpg",
  semiDeluxeRoom: "./images/original/1443_1684906720.jpg",
  familyRoom: "./images/original/1523_1684906720.jpg",
  standardRoom: "./images/original/1680_1684906720.jpg",
  restaurantMain: "./images/original/3008_1684907022.jpg",
  restaurantFood: "./images/original/3570_1684907022.jpg",
  gardenTrail1: "./images/original/4256_1684906754.jpg",
  gardenTrail2: "./images/original/501_1684906754.jpg",
  beachPine1: "./images/original/6129_1684906754.jpg",
  beachPine2: "./images/original/6603_1684906754.jpg",
  bonfireNight: "./images/original/184405245.jpg-7147_1684908065.jpg",
  receptionLobby: "./images/original/184405510.jpg-1738_1684908027.jpg",
  logo: "./images/original/official_sagar_kinare_logo.png"
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-ac",
    name: "Deluxe Ocean & Casuarina AC Suite",
    subtitle: "Sanctuary of Coastal Luxury",
    tagline: "Spacious luxury room with private sea breeze balcony and premium sweet-water bath.",
    price: 2500,
    originalPrice: 3200,
    capacity: "2 Adults + 1 Child",
    bedType: "King Size Plush Bed",
    size: "380 sq ft",
    view: "Casuarina Pine Forest & Sea View",
    ac: true,
    tv: "43\" Smart LED TV",
    wifi: true,
    breakfastIncluded: true,
    sweetWater: true,
    featured: true,
    description: "The Deluxe Ocean AC Suite offers an uncompromised blend of luxury and natural serenity. Designed with warm teak accents, plush king bedding, and floor-to-ceiling balcony windows overlooking the casuarina pines.",
    image: ORIGINAL_IMAGES.deluxeRoom,
    gallery: [
      ORIGINAL_IMAGES.deluxeRoom,
      ORIGINAL_IMAGES.semiDeluxeRoom,
      ORIGINAL_IMAGES.familyRoom
    ],
    features: [
      "24/7 Sweet Water Bath",
      "Individual Split AC Control",
      "Private Casuarina View Balcony",
      "Complimentary Gourmet Breakfast",
      "24/7 Power Backup",
      "Daily Room Service & Housekeeping"
    ]
  },
  {
    id: "semi-deluxe-ac",
    name: "Semi-Deluxe Garden View AC Room",
    subtitle: "Elegance Meets Nature",
    tagline: "Modern air-conditioned room surrounded by landscaped tropical gardens.",
    price: 2300,
    originalPrice: 2900,
    capacity: "2 Adults",
    bedType: "Queen Size Comfort Bed",
    size: "320 sq ft",
    view: "Tropical Resort Garden",
    ac: true,
    tv: "32\" HD LED TV",
    wifi: true,
    breakfastIncluded: true,
    sweetWater: true,
    featured: true,
    description: "Perfect for couples seeking a peaceful beach holiday. Elegant decor, soft ambient lighting, high-speed Wi-Fi, and sweet water shower facilities.",
    image: ORIGINAL_IMAGES.semiDeluxeRoom,
    gallery: [
      ORIGINAL_IMAGES.semiDeluxeRoom,
      ORIGINAL_IMAGES.deluxeRoom
    ],
    features: [
      "Quiet Garden Orientation",
      "Sweet Water Supply",
      "Split Air Conditioner",
      "Work Desk & Reading Lamp",
      "24/7 Hot/Cold Water"
    ]
  },
  {
    id: "executive-family-suite",
    name: "Executive Family AC Haven",
    subtitle: "Ultimate Space for Loved Ones",
    tagline: "Grand double-bed suite designed for family comfort with dual seating areas.",
    price: 3800,
    originalPrice: 4800,
    capacity: "4 Adults + 2 Children",
    bedType: "2 Queen Size Beds",
    size: "520 sq ft",
    view: "Dual Aspect Garden & Pine Trail View",
    ac: true,
    tv: "50\" 4K Smart TV",
    wifi: true,
    breakfastIncluded: true,
    sweetWater: true,
    featured: true,
    description: "Our largest accommodation featuring two full queen beds, spacious seating lounge, oversized bathroom with sweet water supply, and direct garden access.",
    image: ORIGINAL_IMAGES.familyRoom,
    gallery: [
      ORIGINAL_IMAGES.familyRoom,
      ORIGINAL_IMAGES.deluxeRoom
    ],
    features: [
      "2 Large Double Beds",
      "Spacious Family Seating Area",
      "24/7 Sweet Water",
      "Private Tea & Coffee Maker",
      "Complimentary Breakfast for 4"
    ]
  },
  {
    id: "standard-non-ac",
    name: "Standard Pine View Cottage Room",
    subtitle: "Cozy Beach Retreat",
    tagline: "Eco-chic standard room nestled next to the casuarina forest trail.",
    price: 2100,
    originalPrice: 2600,
    capacity: "2 Adults",
    bedType: "Queen Size Bed",
    size: "280 sq ft",
    view: "Casuarina Plantation Trail",
    ac: false,
    tv: "32\" HD TV",
    wifi: true,
    breakfastIncluded: false,
    sweetWater: true,
    featured: false,
    description: "A comfortable non-AC retreat kept naturally cool by sea breezes and high-speed ceiling fans. Features sweet water bathroom amenities.",
    image: ORIGINAL_IMAGES.standardRoom,
    gallery: [
      ORIGINAL_IMAGES.standardRoom
    ],
    features: [
      "Natural Sea Breeze Air Flow",
      "24/7 Sweet Water Bath",
      "High Speed Ceiling Fan",
      "Attached Private Bathroom"
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "sweet-water",
    title: "100% Pure Sweet Water Guarantee",
    category: "Infrastructure",
    description: "Unlike many coastal hotels with saline water, Sagar Kinare provides purified sweet groundwater for soothing showers and tap usage.",
    iconName: "Droplets",
    image: ORIGINAL_IMAGES.receptionLobby,
    highlightBadge: "Pure Groundwater"
  },
  {
    id: "power-backup",
    title: "24/7 Uninterrupted Power Backup",
    category: "Infrastructure",
    description: "Equipped with heavy-duty commercial silent diesel generators ensuring zero power loss for air conditioning and lighting.",
    iconName: "Zap",
    image: ORIGINAL_IMAGES.propertyOverview,
    highlightBadge: "Zero Downtime"
  },
  {
    id: "beach-trail",
    title: "Casuarina Pine Beach Trail",
    category: "Dining & Beach",
    description: "Direct 300m shaded walkway through the whispering casuarina pine trees right onto the serene, uncrowded Tajpur Beach.",
    iconName: "Trees",
    image: ORIGINAL_IMAGES.beachPine1,
    highlightBadge: "Direct Access"
  },
  {
    id: "seafood-dining",
    title: "The Casuarina Seafood Grill",
    category: "Dining & Beach",
    description: "Gourmet in-house dining serving fresh coastal catches (Pomfret, Hilsa, Crabs, Prawns) along with North Indian & Chinese cuisine.",
    iconName: "Utensils",
    image: ORIGINAL_IMAGES.restaurantMain,
    highlightBadge: "Fresh Daily Catch"
  },
  {
    id: "bonfire-bbq",
    title: "Beachside Bonfire & Barbecue",
    category: "Leisure",
    description: "Experience magical sea-breeze evenings under the stars with private wood bonfires, live grill delicacies, and acoustic soundscapes.",
    iconName: "Flame",
    image: ORIGINAL_IMAGES.bonfireNight,
    highlightBadge: "Evening Experience"
  },
  {
    id: "pickup-service",
    title: "Station & Beach Transfers",
    category: "Hospitality",
    description: "Hassle-free pickup and drop services from Digha, Balisai, or Ramnagar railway station and local coastal transfer vehicles.",
    iconName: "Car",
    image: ORIGINAL_IMAGES.gardenTrail1,
    highlightBadge: "Chauffeur Service"
  },
  {
    id: "lush-gardens",
    title: "Manicured Lawns & Kid's Zone",
    category: "Leisure",
    description: "Expansive green resort lawns for morning yoga, leisure walks, and a safe dedicated play park for kids.",
    iconName: "Flower2",
    image: ORIGINAL_IMAGES.gardenTrail2
  },
  {
    id: "secure-parking",
    title: "24/7 CCTV Monitored Parking",
    category: "Infrastructure",
    description: "Ample complimentary on-site parking with dedicated driver accommodation facilities.",
    iconName: "ShieldCheck",
    image: ORIGINAL_IMAGES.beachPine2
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: "tajpur-beach",
    name: "Tajpur Beach & Red Crab Sanctuary",
    distance: "300 meters",
    travelTime: "5 min walk",
    category: "Beach & Nature",
    description: "Tajpur is famous for its tranquil, untouched shoreline blanketed by millions of crimson red crabs that scatter across the sand during low tide.",
    image: ORIGINAL_IMAGES.beachPine1,
    highlights: ["Red Crab Sightings", "Casuarina Shade", "Quiet Sunset Views"]
  },
  {
    id: "mandarmani-sports",
    name: "Mandarmani Beach & Water Sports",
    distance: "14 km",
    travelTime: "25 min drive",
    category: "Adventure & Sports",
    description: "Famous for motorable sand beach, thrill-packed water sports including parasailing, jet-skiing, ATV rides, and banana boat rides.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    highlights: ["Parasailing", "Jet Skiing", "Beach ATV Driving"]
  },
  {
    id: "shankarpur-harbor",
    name: "Shankarpur Fishing Harbor",
    distance: "10 km",
    travelTime: "18 min drive",
    category: "Culture & Sightseeing",
    description: "A serene twin-beach location featuring a bustling harbor where colorful wooden trawlers dock with fresh ocean catches every morning.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    highlights: ["Trawler Harbor Views", "Fresh Sea Auction", "Photography spot"]
  },
  {
    id: "digha-beach",
    name: "Digha Sea Promenade & Marine Center",
    distance: "18 km",
    travelTime: "30 min drive",
    category: "Attractions & Shopping",
    description: "The most popular seaside hub in Bengal featuring the Biswa Bangla Sea Beach Gate, Marine Aquarium, and local seashell craft markets.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    highlights: ["Marine Aquarium", "Seashell Shopping", "Beachfront Promenade"]
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Tajpur Special Pomfret Tawa Fry",
    category: "Bengali Seafood",
    price: 420,
    description: "Freshly caught silver pomfret marinated in coastal Bengali spices and pan-fried to crisp perfection.",
    isChefSpecial: true,
    image: ORIGINAL_IMAGES.restaurantFood
  },
  {
    id: "m2",
    name: "Gold Prawn Malai Curry",
    category: "Bengali Seafood",
    price: 480,
    description: "Jumbo tiger prawns simmered in a velvety coconut milk gravy with green cardamom and ghee.",
    isChefSpecial: true,
    image: ORIGINAL_IMAGES.restaurantMain
  },
  {
    id: "m3",
    name: "Traditional Shorshe Ilish (Hilsa)",
    category: "Bengali Seafood",
    price: 550,
    description: "Authentic Bay of Bengal Hilsa steak slow-cooked in sharp mustard seed paste and green chillies.",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m4",
    name: "Beachside Tandoori Chicken Grill",
    category: "Bonfire BBQ",
    price: 380,
    description: "Charcoal-grilled whole chicken succulent pieces tossed in smoked butter and mint chutney.",
    image: ORIGINAL_IMAGES.bonfireNight
  },
  {
    id: "m5",
    name: "Kadhai Paneer Special",
    category: "North Indian",
    price: 280,
    description: "Fresh cottage cheese cubes tossed with bell peppers and roasted coriander in rich tomato gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m6",
    name: "Chilli Crab Masala Dry",
    category: "Bengali Seafood",
    price: 490,
    description: "Fresh sea crab tossed in a spicy garlic onion gravy—a signature coastal delicacy.",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Subhabrata Mukherjee",
    location: "Kolkata, WB",
    rating: 5,
    date: "2 weeks ago",
    comment: "Sagar Kinare is hands down the best luxury property in Tajpur! The sweet water availability is a massive bonus in a coastal area. The seafood at their restaurant was sublime, and the pine trail to the beach is breathtaking.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    roomBooked: "Deluxe Ocean & Casuarina AC Suite"
  },
  {
    id: "r2",
    author: "Dr. Ananya Roy & Family",
    location: "Durgapur, WB",
    rating: 5,
    date: "1 month ago",
    comment: "We stayed in the Executive Family Suite for 3 nights. Super clean rooms, polite staff, and an amazing bonfire evening arrangement right in the resort garden. Highly recommended for family vacations!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    roomBooked: "Executive Family AC Haven"
  },
  {
    id: "r3",
    author: "Amitabh & Priyadarshini",
    location: "Ranchi, Jharkhand",
    rating: 5,
    date: "3 weeks ago",
    comment: "The quietude of Tajpur beach combined with Sagar Kinare's luxury hospitality made our anniversary unforgettable. Special thanks to the chef for the Pomfret fry!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    roomBooked: "Semi-Deluxe Garden View AC Room"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    category: "Booking & Tariff",
    question: "What are the check-in and check-out timings at Sagar Kinare?",
    answer: "Our standard check-in time is 12:00 PM (Noon) and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability and prior request."
  },
  {
    id: "f2",
    category: "Booking & Tariff",
    question: "Is sweet water available in the resort rooms?",
    answer: "Yes! Sagar Kinare guarantees 100% pure, non-saline sweet groundwater in all our bathrooms and room taps 24/7."
  },
  {
    id: "f3",
    category: "Check-in & Rules",
    question: "What documents are required during check-in?",
    answer: "All adult guests must produce a valid government-issued photo ID (Aadhaar Card, Voter ID, Passport, or Driving License) upon arrival."
  },
  {
    id: "f4",
    category: "Dining & Food",
    question: "Is outside food allowed inside the resort premises?",
    answer: "To ensure maximum food safety, cleanliness, and hygiene, outside cooked food is strictly prohibited. Our in-house chef prepares fresh local Bengali, Seafood, Indian, and Chinese dishes on order."
  },
  {
    id: "f5",
    category: "Beach & Location",
    question: "How far is Tajpur Beach from Sagar Kinare Resort?",
    answer: "The resort is just 300 meters from Tajpur Beach, connected via a lovely 5-minute shaded casuarina pine tree walking trail."
  },
  {
    id: "f6",
    category: "Booking & Tariff",
    question: "How do I reach Sagar Kinare from Digha or Ramnagar Railway Station?",
    answer: "We provide dedicated pickup & drop services from Digha, Balisai, and Ramnagar station upon advance request when booking."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Original Resort & Lawn Overview", category: "Garden", image: ORIGINAL_IMAGES.propertyOverview, caption: "Authentic view of Sagar Kinare Tajpur property & lush grounds", isOriginalPropertyPhoto: true },
  { id: "g2", title: "Deluxe AC Suite Interior", category: "Rooms", image: ORIGINAL_IMAGES.deluxeRoom, caption: "Spacious luxury room with teak furnishings & AC", isOriginalPropertyPhoto: true },
  { id: "g3", title: "Semi-Deluxe AC Room", category: "Rooms", image: ORIGINAL_IMAGES.semiDeluxeRoom, caption: "Cozy air-conditioned room with garden outlook", isOriginalPropertyPhoto: true },
  { id: "g4", title: "Family Executive Suite", category: "Rooms", image: ORIGINAL_IMAGES.familyRoom, caption: "Double bed family suite accommodation", isOriginalPropertyPhoto: true },
  { id: "g5", title: "Standard Cottage Room", category: "Rooms", image: ORIGINAL_IMAGES.standardRoom, caption: "Clean non-AC retreat next to the pine forest", isOriginalPropertyPhoto: true },
  { id: "g6", title: "The Casuarina Dining Hall", category: "Restaurant", image: ORIGINAL_IMAGES.restaurantMain, caption: "In-house restaurant dining setup serving Bengali delicacies", isOriginalPropertyPhoto: true },
  { id: "g7", title: "Fresh Catch Seafood Preparation", category: "Restaurant", image: ORIGINAL_IMAGES.restaurantFood, caption: "Freshly prepared coastal seafood dishes", isOriginalPropertyPhoto: true },
  { id: "g8", title: "Casuarina Pine Forest Trail", category: "Garden", image: ORIGINAL_IMAGES.gardenTrail1, caption: "300m shaded walkway connecting resort to Tajpur Beach", isOriginalPropertyPhoto: true },
  { id: "g9", title: "Resort Pathway & Palms", category: "Garden", image: ORIGINAL_IMAGES.gardenTrail2, caption: "Manicured gardens & palm trees inside property", isOriginalPropertyPhoto: true },
  { id: "g10", title: "Tajpur Beach Shoreline", category: "Beach", image: ORIGINAL_IMAGES.beachPine1, caption: "Pristine, uncrowded sands of Tajpur Beach", isOriginalPropertyPhoto: true },
  { id: "g11", title: "Evening Pine Canopy View", category: "Sunset", image: ORIGINAL_IMAGES.beachPine2, caption: "Golden hour sunset through the casuarina pines", isOriginalPropertyPhoto: true },
  { id: "g12", title: "Night Beach Bonfire Arrangement", category: "Bonfire", image: ORIGINAL_IMAGES.bonfireNight, caption: "Starlit wood bonfires with barbecue grilling", isOriginalPropertyPhoto: true }
];

export const OFFERS: Offer[] = [
  {
    id: "off-1",
    title: "Romantic Ocean Escape",
    discountBadge: "SAVE 20%",
    code: "LUXBEACH20",
    validity: "Valid till Sep 30, 2026",
    description: "Includes Deluxe AC Suite stay, complimentary room breakfast, 1 candlelight dinner with wine mocktails, and private evening beach bonfire.",
    image: ORIGINAL_IMAGES.heroBanner,
    inclusions: ["Deluxe AC Suite", "Complimentary Breakfast", "Candlelight Dinner Setup", "Private Beach Bonfire"]
  },
  {
    id: "off-2",
    title: "Weekend Coastal Getaway",
    discountBadge: "15% OFF",
    code: "TAJPURWEEKEND",
    validity: "Fri - Sun Stays",
    description: "Book 2 nights and get 15% instant discount plus complimentary station transfer from Ramnagar / Balisai.",
    image: ORIGINAL_IMAGES.propertyOverview,
    inclusions: ["15% Off Total Tariff", "Free Station Pickup", "Gourmet Seafood Platter Voucher"]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "b1",
    title: "The Mystery of Tajpur's Red Crabs: Nature's Scarlet Carpet",
    category: "Beach & Wildlife",
    readTime: "4 min read",
    date: "July 15, 2026",
    excerpt: "Discover why millions of vibrant red crabs turn the sands of Tajpur Beach into a breathtaking scarlet carpet during low tide.",
    content: "Tajpur Beach is one of the rare coastal stretches in Bengal that remains undisturbed by commercial crowds. As the tide recedes, millions of tiny red ghost crabs emerge from their sandy burrows...",
    image: ORIGINAL_IMAGES.beachPine1,
    author: "Resort Naturalist Team"
  },
  {
    id: "b2",
    title: "Ultimate Seafood Lover's Guide to Tajpur Coastal Delicacies",
    category: "Culinary",
    readTime: "5 min read",
    date: "June 28, 2026",
    excerpt: "From crisp Pomfret fry to jumbo Gold Prawn malai curry, explore the secret coastal recipes served at Sagar Kinare.",
    content: "Bengali coastal cuisine is defined by fresh catches landed right off the fishing boats at daybreak...",
    image: ORIGINAL_IMAGES.restaurantFood,
    author: "Chef Debabrata Sen"
  }
];
