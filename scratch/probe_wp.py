import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

base = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
endpoints = [
    "",
    "wp-login.php",
    "wp-admin/",
    "wp-admin/admin-ajax.php",
    "wp-json/",
    "wp-json/wp/v2/posts",
    "wp-json/wp/v2/users",
    "xmlrpc.php",
    "readme.html",
    "license.txt",
    "wp-content/",
    "wp-content/plugins/",
    "wp-content/themes/",
    "wp-content/uploads/",
    "index.php"
]

print("Probing endpoints...")
for ep in endpoints:
    url = base + ep
    try:
        r = requests.get(url, headers=headers, timeout=10)
        print(f"[{r.status_code}] {url} | Length: {len(r.content)}")
        if r.status_code == 200:
            print("  Snippet:", repr(r.text[:150]))
    except Exception as e:
        print(f"[ERR] {url}: {e}")
