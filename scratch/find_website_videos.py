import requests
from bs4 import BeautifulSoup
import re

url = "https://www.tajpursagarkinare.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.content, 'html.parser')

video_urls = []
for video in soup.find_all('video'):
    src = video.get('src')
    if src:
        video_urls.append(src)
    for source in video.find_all('source'):
        if source.get('src'):
            video_urls.append(source.get('src'))

# Regex search for .mp4 in html content
matches = re.findall(r'[^"\']+\.mp4', r.text)
video_urls.extend(matches)

print("Found video URLs on website:", set(video_urls))
