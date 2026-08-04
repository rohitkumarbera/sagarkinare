import os

src_dir = r"d:\Sagarkinare\src"
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
                if 'MessageSquare' in content or 'whatsapp' in content.lower() or 'wa.me' in content.lower() or 'bottom-6 left-6' in content or 'bottom-8 left-8' in content or 'z-40' in content:
                    print("Match in file:", os.path.relpath(fp, src_dir))
