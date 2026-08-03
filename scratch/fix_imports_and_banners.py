import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for f in os.listdir(pages_dir):
    if f.endswith('.tsx') and f not in ['HomePage.tsx', 'RoomsPage.tsx']:
        fp = os.path.join(pages_dir, f)
        with open(fp, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        new_lines = []
        has_orig = False

        for line in lines:
            if "from '../data/resortData'" in line or 'from "../data/resortData"' in line:
                if 'ORIGINAL_IMAGES' not in line:
                    line = line.replace('{', '{ ORIGINAL_IMAGES, ')
                    if '{ ORIGINAL_IMAGES,' not in line and 'ORIGINAL_IMAGES' not in line:
                        line = line.replace("import ", "import { ORIGINAL_IMAGES } from '../data/resortData';\nimport ")
            new_lines.append(line)

        content = "".join(new_lines)

        # Fix any broken import syntax like `, ORIGINAL_IMAGES } from '../data/resortData'`
        content = re.sub(r'import\s*,\s*ORIGINAL_IMAGES\s*}\s*from', 'import { ORIGINAL_IMAGES } from', content)
        content = re.sub(r'\{\s*,\s*ORIGINAL_IMAGES', '{ ORIGINAL_IMAGES', content)

        # Replace unsplash URLs
        content = re.sub(r'src=["\']https://images\.unsplash\.com/[^"\']+["\']', 'src={ORIGINAL_IMAGES.propertyOverview}', content)

        # Ensure hero banner section has dark overlay style
        if 'linear-gradient(180deg, rgba(15,15,15,0.75)' not in content:
            content = re.sub(
                r'<div[^>]*className=["\'][^"\']*bg-[^"\']*["\'][^>]*/>',
                '''<div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />''',
                content,
                count=1
            )

        # Add text-shadow to h1
        if 'textShadow' not in content:
            content = re.sub(
                r'<h1([^>]*)>',
                r'<h1\1 style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>',
                content,
                count=1
            )

        with open(fp, 'w', encoding='utf-8') as file:
            file.write(content)

print("Subpage imports and banners fixed successfully!")
