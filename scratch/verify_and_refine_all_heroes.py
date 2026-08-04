import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for root, dirs, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.tsx') and f != 'HomePage.tsx':
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Ensure root div starts with pt-0
            content = re.sub(r'className="min-h-screen bg-([a-zA-Z0-9_-]+) pt-\d+', r'className="min-h-screen bg-\1 pt-0', content)
            content = re.sub(r'className="min-h-screen bg-\[#F8F5F0\] pt-\d+', r'className="min-h-screen bg-[#F8F5F0] pt-0', content)
            
            with open(fp, 'w', encoding='utf-8') as file:
                file.write(content)

print("Checked all pages root pt-0!")
