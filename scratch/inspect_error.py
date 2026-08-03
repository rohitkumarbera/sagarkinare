import requests

url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/wp-login.php"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
print(f"Status Code: {r.status_code}")
print("Response text:\n")
print(r.text)
