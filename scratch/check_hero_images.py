import os
import urllib.request

try:
    from PIL import Image
except ImportError:
    Image = None

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

slider_urls = [
    ("slider3_default", "https://www.tajpursagarkinare.com/admin/images/slider3.jpg-3704_1684906628.jpg"),
    ("slider1", "https://www.tajpursagarkinare.com/admin/images/slider1.jpg-3544_1684907314.jpg"),
    ("slider2", "https://www.tajpursagarkinare.com/admin/images/slider2.jpg-8194_1684907276.jpg"),
]

output_dir = r"d:\Sagarkinare\public\images\original"
os.makedirs(output_dir, exist_ok=True)

hero_file_jpg = os.path.join(output_dir, "hero_banner_tajpur.jpg")
hero_file_webp = os.path.join(output_dir, "hero_banner_tajpur.webp")

# 1. Download slider3 (First/default slider hero image)
first_hero_url = slider_urls[0][1]
print(f"Downloading main first default hero slider image: {first_hero_url}")

req = urllib.request.Request(first_hero_url, headers=headers)
with urllib.request.urlopen(req) as resp, open(hero_file_jpg, 'wb') as out_f:
    data = resp.read()
    out_f.write(data)
    print(f"Saved JPG: {hero_file_jpg} ({len(data)} bytes)")

# 2. Check dimensions and convert to WebP for optimization
if Image:
    with Image.open(hero_file_jpg) as img:
        print(f"Image dimensions: {img.width}x{img.height} | Format: {img.format} | Mode: {img.mode}")
        img.save(hero_file_webp, "WEBP", quality=90)
        print(f"Saved optimized WebP: {hero_file_webp} ({os.path.getsize(hero_file_webp)} bytes)")
else:
    print("PIL not installed, using high quality JPG directly.")
