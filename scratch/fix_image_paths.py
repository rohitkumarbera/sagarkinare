import os

src_dir = r"d:\Sagarkinare\src"

modified_files = []

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith('.ts') or f.endswith('.tsx'):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
                
            if '"/images/' in content or "'/images/" in content:
                new_content = content.replace('"/images/', '"./images/').replace("'/images/", "'./images/")
                with open(fp, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                modified_files.append(fp)
                print(f"Updated image paths in: {fp}")

print(f"\nTotal files updated: {len(modified_files)}")
