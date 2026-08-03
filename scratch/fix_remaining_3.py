import os

# 1. BookingPage.tsx
fp = r"d:\Sagarkinare\src\pages\BookingPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("confetti({", "// confetti({")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 2. GalleryPage.tsx
fp = r"d:\Sagarkinare\src\pages\GalleryPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("import { GALLERY_ITEMS, type GalleryItem } from '../data/resortData';", "import { GALLERY_ITEMS, type GalleryItem, ORIGINAL_IMAGES } from '../data/resortData';")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

# 3. ReviewsPage.tsx
fp = r"d:\Sagarkinare\src\pages\ReviewsPage.tsx"
with open(fp, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace("avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',", "avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',\n      verified: true,")
with open(fp, 'w', encoding='utf-8') as f: f.write(c)

print("Remaining 3 files updated!")
