import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for root, dirs, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.tsx') and f != 'HomePage.tsx':
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Replace root div pt-24 or pt-20 with pt-0
            content = re.sub(r'className="min-h-screen bg-cream pt-(?:24|20|16)', 'className="min-h-screen bg-cream pt-0', content)
            content = re.sub(r'className="min-h-screen bg-\[#F8F5F0\] pt-(?:24|20|16)', 'className="min-h-screen bg-[#F8F5F0] pt-0', content)
            content = re.sub(r'className="min-h-screen bg-sand-light pt-(?:24|20|16)', 'className="min-h-screen bg-[#F8F5F0] pt-0', content)
            
            # Replace hero section padding
            content = re.sub(r'<section className="relative py-20 bg-', '<section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-', content)
            content = re.sub(r'<section className="relative py-24 text-white', '<section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white', content)
            content = re.sub(r'<section className="relative py-20 text-white', '<section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white', content)
            
            with open(fp, 'w', encoding='utf-8') as file:
                file.write(content)

print("Updated all internal page hero banners!")
