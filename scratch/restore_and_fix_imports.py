import os

imports_map = {
    'AmenitiesPage.tsx': "import React from 'react';\nimport { AMENITIES, ORIGINAL_IMAGES } from '../data/resortData';\nimport { ShieldCheck, Trees, Utensils, Wifi, Clock, Coffee, Car, PhoneCall } from 'lucide-react';\nimport { Link } from 'react-router-dom';",
    'AttractionsPage.tsx': "import React from 'react';\nimport { ATTRACTIONS, ORIGINAL_IMAGES } from '../data/resortData';\nimport { MapPin, Compass, Clock, Navigation } from 'lucide-react';\nimport { Link } from 'react-router-dom';",
    'BlogsPage.tsx': "import React from 'react';\nimport { BLOGS, ORIGINAL_IMAGES } from '../data/resortData';\nimport { Calendar, User, ArrowRight } from 'lucide-react';\nimport { Link } from 'react-router-dom';",
    'BookingPage.tsx': "import React, { useState } from 'react';\nimport { useSearchParams } from 'react-router-dom';\nimport { ROOMS, HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';\nimport { Calendar, Users, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';",
    'ContactPage.tsx': "import React, { useState } from 'react';\nimport { HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';\nimport { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';",
    'FAQPage.tsx': "import React, { useState } from 'react';\nimport { FAQS, ORIGINAL_IMAGES } from '../data/resortData';\nimport { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';\nimport { Link } from 'react-router-dom';",
    'GalleryPage.tsx': "import React, { useState } from 'react';\nimport { GALLERY_ITEMS, GalleryItem, ORIGINAL_IMAGES } from '../data/resortData';\nimport { X, ZoomIn } from 'lucide-react';",
    'OffersPage.tsx': "import React from 'react';\nimport { OFFERS, ORIGINAL_IMAGES } from '../data/resortData';\nimport { Tag, Calendar, CheckCircle2, Gift } from 'lucide-react';\nimport { Link } from 'react-router-dom';",
    'RestaurantPage.tsx': "import React, { useState } from 'react';\nimport { MENU_ITEMS, ORIGINAL_IMAGES } from '../data/resortData';\nimport { Utensils, Flame, Sparkles, Clock } from 'lucide-react';\nimport { Link } from 'react-router-dom';",
    'ReviewsPage.tsx': "import React from 'react';\nimport { REVIEWS, Review, ORIGINAL_IMAGES } from '../data/resortData';\nimport { Star, CheckCircle2, MessageSquarePlus } from 'lucide-react';",
}

pages_dir = r"d:\Sagarkinare\src\pages"

for filename, correct_import in imports_map.items():
    fp = os.path.join(pages_dir, filename)
    if os.path.exists(fp):
        with open(fp, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Remove old import lines at the top up to first function component definition
        lines = content.split('\n')
        code_start_idx = 0
        for idx, line in enumerate(lines):
            if line.startswith('export const') or line.startswith('interface') or line.startswith('const '):
                code_start_idx = idx
                break
        
        body = "\n".join(lines[code_start_idx:])
        new_content = correct_import + "\n\n" + body
        
        with open(fp, 'w', encoding='utf-8') as file:
            file.write(new_content)

print("Restored clean imports for all subpages!")
