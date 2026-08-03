import os
import re

pages_dir = r"d:\Sagarkinare\src\pages"

for f in os.listdir(pages_dir):
    if f.endswith('.tsx') and f not in ['HomePage.tsx', 'RoomsPage.tsx']:
        fp = os.path.join(pages_dir, f)
        with open(fp, 'r', encoding='utf-8') as file:
            content = file.read()

        # Clean up any malformed imports
        content = re.sub(r'import\s*\{\s*,\s*ORIGINAL_IMAGES', 'import { ORIGINAL_IMAGES', content)
        content = re.sub(r'import\s*\{\s*ORIGINAL_IMAGES\s*,\s*,\s*', 'import { ORIGINAL_IMAGES, ', content)

        # Make sure ORIGINAL_IMAGES is properly imported if used
        if 'ORIGINAL_IMAGES' in content and "import { ORIGINAL_IMAGES }" not in content and "ORIGINAL_IMAGES," not in content:
            content = "import { ORIGINAL_IMAGES } from '../data/resortData';\n" + content

        # Remove duplicate imports of resortData if any
        lines = content.split('\n')
        resort_imports = [l for l in lines if "data/resortData" in l]
        if len(resort_imports) > 1:
            # combine them
            symbols = set()
            new_lines = []
            for l in lines:
                if "data/resortData" in l:
                    match = re.search(r'import\s*\{([^}]+)\}\s*from', l)
                    if match:
                        for s in match.group(1).split(','):
                            symbols.add(s.strip())
                else:
                    new_lines.append(l)
            combined_import = f"import {{ {', '.join(sorted(list(symbols)))} }} from '../data/resortData';"
            content = combined_import + "\n" + "\n".join(new_lines)

        with open(fp, 'w', encoding='utf-8') as file:
            file.write(content)

print("Cleaned subpage imports!")
