import requests

url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/images/original/slider_video.mp4"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers, stream=True)
print(f"Video URL: {url}")
print(f"Status: {r.status_code}")
print(f"Content-Type: {r.headers.get('Content-Type')}")
print(f"Content-Length: {r.headers.get('Content-Length')} bytes")
