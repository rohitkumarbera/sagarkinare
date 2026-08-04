import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for root, dirs, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.tsx') and f not in ['HomePage.tsx', 'RoomsPage.tsx']:
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Replace unmatched opening/closing tags in hero sections
            # If opening tag is <motion.span ...> match with </motion.span>
            content = re.sub(r'(<motion\.span[^>]*>(.*?))</span>', r'\1</motion.span>', content, flags=re.DOTALL)
            content = re.sub(r'(<motion\.h1[^>]*>(.*?))</h1>', r'\1</motion.h1>', content, flags=re.DOTALL)
            content = re.sub(r'(<motion\.p[^>]*>(.*?))</p>', r'\1</motion.p>', content, flags=re.DOTALL)

            with open(fp, 'w', encoding='utf-8') as file:
                file.write(content)

print("Fixed all motion closing tags!")
