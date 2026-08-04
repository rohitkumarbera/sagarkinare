import os
import shutil

folder = r"D:\video slider"

if os.path.exists(folder):
    files = os.listdir(folder)
    print(f"Files in {folder}:", files)
    
    target_dir1 = r"d:\Sagarkinare\public\videos"
    target_dir2 = r"d:\Sagarkinare\public\images\original"
    os.makedirs(target_dir1, exist_ok=True)
    os.makedirs(target_dir2, exist_ok=True)
    
    for f in files:
        src = os.path.join(folder, f)
        if os.path.isfile(src):
            size = os.path.getsize(src)
            print(f"File: {f}, Size: {size} bytes")
            
            # Copy to public/videos/
            dst1 = os.path.join(target_dir1, "slider_video.mp4")
            shutil.copy2(src, dst1)
            print(f"Copied to {dst1}")
            
            dst2 = os.path.join(target_dir1, f)
            shutil.copy2(src, dst2)
            print(f"Copied to {dst2}")
            
            # Copy to public/images/original/
            dst3 = os.path.join(target_dir2, "slider_video.mp4")
            shutil.copy2(src, dst3)
            print(f"Copied to {dst3}")
else:
    print(f"Directory {folder} does not exist!")
