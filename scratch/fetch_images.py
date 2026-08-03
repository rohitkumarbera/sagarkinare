import urllib.request
import re
import os
from urllib.parse import urljoin

base_url = "https://www.tajpursagarkinare.com/"
pages = ["", "about.php", "service.php", "room.php", "gallery.php", "site.php", "contact.php"]

output_dir = r"d:\Sagarkinare\public\images\original"
os.makedirs(output_dir, exist_ok=True)

image_urls = set()

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for page in pages:
    url = urljoin(base_url, page)
    print(f"Fetching page: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
            # Find all img src
            matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
            for m in matches:
                full_img_url = urljoin(base_url, m)
                image_urls.add(full_img_url)

            # Find background-image: url(...)
            bg_matches = re.findall(r'url\(["\']?([^"\'\)]+)["\']?\)', html, re.IGNORECASE)
            for m in bg_matches:
                if not m.startswith('data:'):
                    full_img_url = urljoin(base_url, m)
                    image_urls.add(full_img_url)

    except Exception as e:
        print(f"Error fetching {url}: {e}")

print(f"Found {len(image_urls)} unique image URLs:")
downloaded_images = []

for idx, img_url in enumerate(sorted(image_urls)):
    print(f"{idx+1}. {img_url}")
    filename = os.path.basename(img_url.split('?')[0])
    if not filename or not any(filename.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']):
        filename = f"image_{idx+1}.jpg"
    
    local_path = os.path.join(output_dir, filename)
    try:
        req = urllib.request.Request(img_url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(local_path, 'wb') as out_file:
            data = resp.read()
            out_file.write(data)
            downloaded_images.append((filename, f"/images/original/{filename}", img_url, len(data)))
            print(f"Saved: {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed to download {img_url}: {e}")

print("\nDownloaded summary:")
for item in downloaded_images:
    print(item)
