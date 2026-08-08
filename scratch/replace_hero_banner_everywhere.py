import shutil
import os

src = r"d:\Sagarkinare\public\images\original\resort_night_fountain_illumination.jpg"

targets = [
    r"d:\Sagarkinare\public\images\original\hero_banner_tajpur.webp",
    r"d:\Sagarkinare\public\images\original\hero_banner_tajpur.jpg",
    r"d:\Sagarkinare\public\images\hero_banner_tajpur.webp",
    r"d:\Sagarkinare\public\images\hero_banner_tajpur.jpg",
    r"d:\Sagarkinare\dist\images\original\hero_banner_tajpur.webp",
    r"d:\Sagarkinare\dist\images\original\hero_banner_tajpur.jpg",
    r"d:\Sagarkinare\dist\images\hero_banner_tajpur.webp",
    r"d:\Sagarkinare\dist\images\hero_banner_tajpur.jpg",
]

for t in targets:
    os.makedirs(os.path.dirname(t), exist_ok=True)
    shutil.copy2(src, t)
    print("Replaced target:", t)

print("All hero_banner_tajpur files replaced with new fountain night photo!")
