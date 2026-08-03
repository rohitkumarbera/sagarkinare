import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for f in os.listdir(pages_dir):
    if f.endswith('.tsx') and f not in ['HomePage.tsx', 'RoomsPage.tsx']:
        fp = os.path.join(pages_dir, f)
        with open(fp, 'r', encoding='utf-8') as file:
            content = file.read()

        # Check if file has unsplash image or light overlay in section
        if 'unsplash' in content or 'bg-ocean' in content or 'bg-sand' in content:
            # Import ORIGINAL_IMAGES if missing
            if 'ORIGINAL_IMAGES' not in content:
                content = content.replace("from '../data/resortData';", ", ORIGINAL_IMAGES } from '../data/resortData';")
                content = content.replace("from '../data/resortData'", ", ORIGINAL_IMAGES } from '../data/resortData'")

            # Replace unsplash URLs with ORIGINAL_IMAGES.propertyOverview or ORIGINAL_IMAGES.heroBanner
            content = re.sub(r'src=["\']https://images\.unsplash\.com/[^"\']+["\']', 'src={ORIGINAL_IMAGES.propertyOverview}', content, count=1)
            
            # Ensure overlay is dark gradient
            content = re.sub(
                r'<div[^>]*className=["\'][^"\']*bg-ocean-dark/80[^"\']*["\'][^>]*/>',
                '''<div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />''',
                content
            )

            # Ensure h1 headings have text-shadow and font-extrabold
            content = re.sub(
                r'<h1([^>]*)className=["\']([^"\']*)font-serif([^"\']*)["\']',
                r'<h1\1className="\2font-serif font-extrabold tracking-wide text-white\3" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}',
                content
            )

            with open(fp, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated banner in: {f}")
