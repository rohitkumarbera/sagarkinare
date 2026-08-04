import os

src_dir = r"d:\Sagarkinare\src"

replacements = [
    ('bg-ocean-dark', 'bg-[#1E1B18]'),
    ('bg-ocean', 'bg-[#1E1B18]'),
    ('text-ocean', 'text-[#1E1B18]'),
    ('text-sand', 'text-[#F8F5F0]'),
    ('bg-sand-light', 'bg-[#F8F5F0]'),
    ('bg-sand-dark', 'bg-[#EFEAE2]'),
    ('border-sand-dark', 'border-[#E9E2D8]'),
    ('text-charcoal', 'text-[#1E1B18]'),
    ('text-gold-dark', 'text-[#966E30]'),
]

modified = []

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = content
            for old_str, new_str in replacements:
                new_content = new_content.replace(old_str, new_str)
                
            if new_content != content:
                with open(fp, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                modified.append(os.path.relpath(fp, src_dir))

print("Modified files:", modified)
