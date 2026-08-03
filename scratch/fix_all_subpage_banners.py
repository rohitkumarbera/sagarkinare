import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

# Check and update each page file
for f in os.listdir(pages_dir):
    if f.endswith('.tsx') and f != 'HomePage.tsx':
        fp = os.path.join(pages_dir, f)
        with open(fp, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Replace any light background or unsplash image in hero section with dark overlay and ORIGINAL_IMAGES
        print(f"Inspecting subpage: {f}")
