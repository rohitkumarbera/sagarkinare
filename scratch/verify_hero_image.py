import requests

urls = [
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/images/original/hero_banner_tajpur.webp",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/images/original/hero_banner_tajpur.jpg"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for u in urls:
    r = requests.get(u, headers=headers)
    print(f"URL: {u} | Status: {r.status_code} | Size: {len(r.content)} bytes")
