import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

overlay_style = """style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 45%, rgba(15,15,15,0.55) 100%)' }}"""

for root, dirs, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.tsx'):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Check if page has hero section
            if 'hero' in content.lower() or 'banner' in content.lower() or 'cta' in content.lower():
                print(f"Inspecting: {f}")
