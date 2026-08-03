import requests

urls = [
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/images/original/8646_1684906992.jpg",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/images/original/1443_1684906720.jpg",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/images/original/1523_1684906720.jpg"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for u in urls:
    r = requests.get(u, headers=headers)
    print(f"URL: {u} | Status: {r.status_code} | Size: {len(r.content)} bytes")
