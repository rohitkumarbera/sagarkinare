import requests

url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
print(f"URL: {url} | Status Code: {r.status_code}")
print("Response text snippet:\n")
print(r.text[:500])

if "Sagar Kinare" in r.text or "<div id=\"root\">" in r.text:
    print("\n🎉 SUCCESS! Sagar Kinare Luxury Resort website is LIVE on rohitbera.com!")
else:
    print("\nVerification check snippet:", r.text[:300])
