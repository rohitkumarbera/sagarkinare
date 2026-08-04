import requests
from bs4 import BeautifulSoup
import os
from PIL import Image

url = "https://www.tajpursagarkinare.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.content, 'html.parser')

target_dir = r"d:\Sagarkinare\public\images\original"
os.makedirs(target_dir, exist_ok=True)

# Find all images inside header, nav, or with logo in src/alt/class
found = []
for img in soup.find_all('img'):
    src = img.get('src', '')
    alt = img.get('alt', '')
    cls = ' '.join(img.get('class', []))
    
    if not src.startswith('http'):
        src_url = 'https://www.tajpursagarkinare.com/' + src.lstrip('/')
    else:
        src_url = src
        
    found.append({
        'src': src,
        'full_url': src_url,
        'alt': alt,
        'class': cls
    })

print(f"Found {len(found)} total images on site:")
for item in found:
    print(item)

# Download logo.png or primary logo image
for item in found:
    if 'logo' in item['src'].lower() or 'logo' in item['alt'].lower() or 'sagar' in item['src'].lower():
        print(f"\nDownloading primary logo from {item['full_url']}...")
        res = requests.get(item['full_url'], headers=headers)
        fname = os.path.basename(item['src'])
        out_path = os.path.join(target_dir, f"site_official_{fname}")
        with open(out_path, 'wb') as f:
            f.write(res.content)
        print(f"Saved logo file to {out_path} ({len(res.content)} bytes)")
        
        # Process high res transparent PNG
        try:
            im = Image.open(out_path).convert("RGBA")
            print("Logo image format:", im.format, "size:", im.size)
            datas = im.getdata()
            new_data = []
            for pixel in datas:
                # If background is white/near-white convert to transparent
                if pixel[0] > 230 and pixel[1] > 230 and pixel[2] > 230:
                    new_data.append((255, 255, 255, 0))
                else:
                    new_data.append(pixel)
            im.putdata(new_data)
            
            # Trim bounding box
            bbox = im.getbbox()
            if bbox:
                im_cropped = im.crop(bbox)
                final_logo_path = os.path.join(target_dir, "official_sagar_kinare_logo.png")
                im_cropped.save(final_logo_path, "PNG")
                print(f"Saved trimmed official logo to {final_logo_path} (size: {im_cropped.size})")
        except Exception as e:
            print("PIL error:", e)
