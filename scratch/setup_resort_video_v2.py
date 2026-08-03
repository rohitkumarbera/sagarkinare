import os
import requests

video_dir = r"d:\Sagarkinare\public\videos"
os.makedirs(video_dir, exist_ok=True)

video_urls = [
    "https://cdn.pixabay.com/video/2021/04/12/70884-536768393_large.mp4",
    "https://cdn.pixabay.com/video/2019/04/23/23011-332371946_large.mp4",
    "https://v.ftcdn.net/03/48/27/26/700_F_348272641_b2E4tH7iC4W8n2Jq1H7y7.mp4"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

video_path = os.path.join(video_dir, "hero_resort_bg.mp4")

for url in video_urls:
    try:
        print(f"Trying download from {url}...")
        r = requests.get(url, headers=headers, timeout=15)
        if r.status_code == 200 and len(r.content) > 100000:
            with open(video_path, 'wb') as f:
                f.write(r.content)
            print(f"Downloaded video successfully ({len(r.content)} bytes)!")
            break
    except Exception as e:
        print("Download error:", e)
