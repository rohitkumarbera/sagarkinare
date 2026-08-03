import requests

urls = [
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/wp-admin/",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/wp-login.php"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for u in urls:
    r = requests.get(u, headers=headers, allow_redirects=False)
    print(f"URL: {u}")
    print(f"  Status Code: {r.status_code}")
    print(f"  Redirect Location: {r.headers.get('Location')}\n")
