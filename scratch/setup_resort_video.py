import os
import requests

video_dir = r"d:\Sagarkinare\public\videos"
os.makedirs(video_dir, exist_ok=True)

# High quality luxury resort beach video URL
sample_video_url = "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-resort-and-the-ocean-41584-large.mp4"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

video_path = os.path.join(video_dir, "hero_resort_bg.mp4")

try:
    print(f"Downloading resort video to {video_path}...")
    r = requests.get(sample_video_url, headers=headers, timeout=20)
    if r.status_code == 200:
        with open(video_path, 'wb') as f:
            f.write(r.content)
        print(f"Video saved successfully! ({len(r.content)} bytes)")
    else:
        print(f"HTTP {r.status_code} downloading video")
except Exception as e:
    print("Error downloading video:", e)
