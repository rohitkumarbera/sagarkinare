import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

# Targeted overlay replace pattern
dark_overlay_div = '''<div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />'''

for f in os.listdir(pages_dir):
    if f.endswith('.tsx') and f not in ['HomePage.tsx', 'RoomsPage.tsx']:
        fp = os.path.join(pages_dir, f)
        with open(fp, 'r', encoding='utf-8') as file:
            content = file.read()

        # Remove any broken single-line imports added earlier
        lines = content.split('\n')
        clean_lines = []
        for l in lines:
            if "import { ORIGINAL_IMAGES }" in l and ("AMENITIES" in l or "ROOMS" in l or "FAQS" in l or "OFFERS" in l or "HOTEL_INFO" in l):
                # keep original import line
                pass
            elif "import { ORIGINAL_IMAGES } from '../data/resortData';" in l and clean_lines and "from '../data/resortData'" in clean_lines[0]:
                pass
            else:
                clean_lines.append(l)

        content = "\n".join(clean_lines)

        # Replace light background overlays in section hero divs
        content = re.sub(
            r'<div[^>]*className=["\'][^"\']*bg-ocean-dark/80[^"\']*["\'][^>]*/>',
            dark_overlay_div,
            content
        )

        content = re.sub(
            r'<div[^>]*className=["\'][^"\']*bg-sand-light[^"\']*["\'][^>]*/>',
            dark_overlay_div,
            content
        )

        with open(fp, 'w', encoding='utf-8') as file:
            file.write(content)

print("Subpages safely updated with dark overlays!")
