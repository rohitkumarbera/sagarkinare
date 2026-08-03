import requests

url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
print("Status Code:", r.status_code)
print("Length:", len(r.content))

css_match = "./assets/index-" in r.text or "assets/index-" in r.text
js_match = "assets/index-" in r.text

print(f"CSS asset present: {css_match}")
print(f"JS asset present: {js_match}")
