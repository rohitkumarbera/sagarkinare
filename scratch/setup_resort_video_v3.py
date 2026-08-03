import os
import requests

video_dir = r"d:\Sagarkinare\public\videos"
os.makedirs(video_dir, exist_ok=True)

# Direct working MP4 URLs
url = "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/person-bicycle-car-detection.mp4"
# Let's test a working luxury beach video URL
url = "https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_30fps.mp4"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

video_path = os.path.join(video_dir, "hero_resort_bg.mp4")

try:
    print(f"Downloading luxury beach resort video from {url}...")
    r = requests.get(url, headers=headers, stream=True, timeout=30)
    if r.status_code == 200:
        with open(video_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=1024*1024):
                if chunk:
                    f.write(chunk)
        print(f"Successfully saved video! Size: {os.path.getsize(video_path)} bytes")
    else:
        print(f"HTTP {r.status_code}")
except Exception as e:
    print("Download error:", e)
