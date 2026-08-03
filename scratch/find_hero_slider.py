import urllib.request
import re

url = "https://www.tajpursagarkinare.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Find slider or carousel elements
slider_imgs = re.findall(r'<img[^>]+src=["\']([^"\']*slider[^"\']*)["\']', html, re.IGNORECASE)
if not slider_imgs:
    slider_imgs = re.findall(r'src=["\']([^"\']*(?:slider|banner|header)[^"\']*)["\']', html, re.IGNORECASE)

print("Found slider images in HTML:")
for idx, s in enumerate(slider_imgs):
    print(f"{idx+1}. {s}")

# Also check background-image in inline style or CSS
bg_imgs = re.findall(r'url\(["\']?([^"\'\)]*(?:slider|banner|header)[^"\'\)]*)["\']?\)', html, re.IGNORECASE)
print("\nFound background slider images in CSS:")
for idx, b in enumerate(bg_imgs):
    print(f"{idx+1}. {b}")
