import os
import re

workspace = r"d:\Sagarkinare\src"
found = []

for root, dirs, files in os.walk(workspace):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
                if '/booking' in content or 'Book Your Stay' in content:
                    found.append(os.path.relpath(fp, workspace))

print("Files containing /booking or Book Your Stay:", found)
