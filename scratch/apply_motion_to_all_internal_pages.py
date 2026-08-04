import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for root, dirs, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.tsx') and f not in ['HomePage.tsx', 'RoomsPage.tsx']:
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Ensure motion import
            if "import { motion }" not in content and "import { motion" not in content:
                content = "import { motion } from 'framer-motion';\n" + content
                
            # Upgrade hero background image to motion.img
            content = re.sub(r'<img\s*\n?\s*src=\{ORIGINAL_IMAGES\.([^}]+)\}\s*\n?\s*alt=([^>]+)\s*\n?\s*className="w-full h-full object-cover([^"]*)"', r'<motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src={ORIGINAL_IMAGES.\1} alt=\2 className="w-full h-full object-cover\3"', content)
            content = re.sub(r'<img\s*\n?\s*src="([^"]+)"\s*\n?\s*alt=([^>]+)\s*\n?\s*className="w-full h-full object-cover([^"]*)"', r'<motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="\1" alt=\2 className="w-full h-full object-cover\3"', content)

            # Upgrade hero subtitle / category badge
            content = re.sub(r'<span className="text-gold([^"]*)"([^>]*)>', r'<motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold\1"\2>', content, count=1)
            content = re.sub(r'<span className="text-gold-light([^"]*)"([^>]*)>', r'<motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold-light\1"\2>', content, count=1)

            # Upgrade hero main h1
            content = re.sub(r'<h1 className="font-serif([^"]*)"([^>]*)>', r'<motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif\1"\2>', content, count=1)

            # Upgrade hero description p
            content = re.sub(r'<p className="text-white([^"]*)"([^>]*)>', r'<motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="text-white\1"\2>', content, count=1)
            content = re.sub(r'<p className="text-[#F8F5F0]([^"]*)"([^>]*)>', r'<motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="text-[#F8F5F0]\1"\2>', content, count=1)

            with open(fp, 'w', encoding='utf-8') as file:
                file.write(content)

print("Applied staggered motion animations across all internal pages!")
