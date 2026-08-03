import requests

urls = [
    "https://rohitbera.com/",
    "https://rohitbera.com/clientwebsite/",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/wp-admin/"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for u in urls:
    try:
        r = requests.get(u, headers=headers, timeout=15)
        print(f"URL: {u} | Status: {r.status_code} | Length: {len(r.content)}")
        if r.status_code != 200:
            print("Response snippet:", r.text[:300])
    except Exception as e:
        print(f"URL: {u} | Error: {e}")
