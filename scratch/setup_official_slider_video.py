import os
import shutil

src = r"D:\video slider\Slider Video.mp4"
dst1 = r"d:\Sagarkinare\public\videos\hero_resort_bg.mp4"
dst2 = r"d:\Sagarkinare\public\videos\slider_video.mp4"

shutil.copy2(src, dst1)
shutil.copy2(src, dst2)

print(f"Copied {src} to {dst1} (size: {os.path.getsize(dst1)} bytes)")
print(f"Copied {src} to {dst2} (size: {os.path.getsize(dst2)} bytes)")
