import os

src_dir = r"d:\Sagarkinare\src"
found = {}

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = []
                for kw in ['ocean', 'sand', 'charcoal']:
                    if kw in content:
                        matches.append(kw)
                if matches:
                    found[os.path.relpath(fp, src_dir)] = matches

print("Files with invalid theme classes (ocean/sand/charcoal):")
for k, v in found.items():
    print(f"{k}: {v}")
