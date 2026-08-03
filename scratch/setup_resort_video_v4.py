import os
import requests

video_dir = r"d:\Sagarkinare\public\videos"
os.makedirs(video_dir, exist_ok=True)

# Wikimedia commons ocean beach video
url = "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Waves_on_a_beach.ogv/Waves_on_a_beach.ogv.480p.vp9.webm"
url2 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
url3 = "https://media.w3.org/2010/05/sintel/trailer.mp4"

video_path = os.path.join(video_dir, "hero_resort_bg.mp4")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
}

for u in [url, url2, url3]:
    try:
        print(f"Trying {u}...")
        r = requests.get(u, headers=headers, timeout=15)
        if r.status_code == 200:
            with open(video_path, 'wb') as f:
                f.write(r.content)
            print(f"Saved video to {video_path}! Size: {os.path.getsize(video_path)} bytes")
            break
    except Exception as e:
        print("Error:", e)
