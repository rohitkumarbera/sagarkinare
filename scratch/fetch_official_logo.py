import os
import requests
from bs4 import BeautifulSoup
from PIL import Image
import io

url = "https://www.tajpursagarkinare.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.content, 'html.parser')

# Find img tags with logo in src or alt or class
logo_imgs = []
for img in soup.find_all('img'):
    src = img.get('src', '')
    alt = img.get('alt', '')
    cls = ' '.join(img.get('class', []))
    if 'logo' in src.lower() or 'logo' in alt.lower() or 'logo' in cls.lower() or 'sagar' in src.lower() or 'kinare' in src.lower():
        if not src.startswith('http'):
            src = 'https://www.tajpursagarkinare.com/' + src.lstrip('/')
        logo_imgs.append(src)

print("Found logo candidate URLs:", logo_imgs)

# If none found, inspect all img tags on header/nav
if not logo_imgs:
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if not src.startswith('http'):
            src = 'https://www.tajpursagarkinare.com/' + src.lstrip('/')
        logo_imgs.append(src)
    print("All image URLs:", logo_imgs[:10])

target_dir = r"d:\Sagarkinare\public\images\original"
os.makedirs(target_dir, exist_ok=True)

if logo_imgs:
    logo_url = logo_imgs[0]
    print(f"Downloading main logo from {logo_url}...")
    res = requests.get(logo_url, headers=headers)
    
    logo_png_path = os.path.join(target_dir, "sagar_kinare_logo.png")
    with open(logo_png_path, "wb") as f:
        f.write(res.content)
    
    print(f"Saved logo to {logo_png_path} ({len(res.content)} bytes)")
    
    # Process transparency if needed using PIL
    try:
        img = Image.open(logo_png_path).convert("RGBA")
        datas = img.getdata()
        
        # Check if background is white/light and convert to transparent
        newData = []
        for item in datas:
            # If color is near white (R>240, G>240, B>240) make transparent
            if item[0] > 235 and item[1] > 235 and item[2] > 235:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        logo_transparent_path = os.path.join(target_dir, "sagar_kinare_logo_transparent.png")
        img.save(logo_transparent_path, "PNG")
        print(f"Saved transparent logo to {logo_transparent_path}")
    except Exception as e:
        print("PIL error:", e)
