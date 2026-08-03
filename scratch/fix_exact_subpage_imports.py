import os
import re

# 1. AmenitiesPage.tsx
fp = r"d:\Sagarkinare\src\pages\AmenitiesPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { ShieldCheck, Trees, Utensils, Wifi, Clock, Coffee, Car, PhoneCall } from 'lucide-react';", "import { ShieldCheck, Trees, Utensils, Wifi, Clock, Coffee, Car, PhoneCall, Sparkles } from 'lucide-react';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 2. AttractionsPage.tsx
fp = r"d:\Sagarkinare\src\pages\AttractionsPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { MapPin, Compass, Clock, Navigation } from 'lucide-react';", "import { Navigation, CheckCircle2 } from 'lucide-react';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 3. BlogsPage.tsx
fp = r"d:\Sagarkinare\src\pages\BlogsPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { Calendar, User, ArrowRight } from 'lucide-react';", "import { User, ArrowRight, Clock } from 'lucide-react';")
c = c.replace("import { BLOGS, ORIGINAL_IMAGES } from '../data/resortData';", "import { BLOGS } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 4. BookingPage.tsx
fp = r"d:\Sagarkinare\src\pages\BookingPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { Calendar, Users, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';", "import { CheckCircle2, Phone, Sparkles, Tag, ArrowLeft } from 'lucide-react';\nimport { Link } from 'react-router-dom';")
c = c.replace("import { ROOMS, HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';", "import { ROOMS } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 5. ContactPage.tsx
fp = r"d:\Sagarkinare\src\pages\ContactPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';", "import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';")
c = c.replace("import { HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';", "import { HOTEL_INFO } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 6. FAQPage.tsx
fp = r"d:\Sagarkinare\src\pages\FAQPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';", "import { ChevronDown, HelpCircle, Search } from 'lucide-react';")
c = c.replace("import { FAQS, ORIGINAL_IMAGES } from '../data/resortData';", "import { FAQS } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 7. GalleryPage.tsx
fp = r"d:\Sagarkinare\src\pages\GalleryPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { GALLERY_ITEMS, GalleryItem, ORIGINAL_IMAGES } from '../data/resortData';", "import { GALLERY_ITEMS, type GalleryItem } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 8. OffersPage.tsx
fp = r"d:\Sagarkinare\src\pages\OffersPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { Tag, Calendar, CheckCircle2, Gift } from 'lucide-react';", "import { Tag, Calendar, Gift, Check, ArrowRight } from 'lucide-react';")
c = c.replace("import { OFFERS, ORIGINAL_IMAGES } from '../data/resortData';", "import { OFFERS } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 9. RestaurantPage.tsx
fp = r"d:\Sagarkinare\src\pages\RestaurantPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { Utensils, Flame, Sparkles, Clock } from 'lucide-react';", "import { Utensils, Flame, Clock } from 'lucide-react';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

print("Exact imports updated!")
