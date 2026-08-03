import os
import shutil

folder = r"D:\video slider"

if os.path.exists(folder):
    files = os.listdir(folder)
    print(f"Files in {folder}:", files)
    
    target_dir = r"d:\Sagarkinare\public\videos"
    os.makedirs(target_dir, exist_ok=True)
    
    copied = []
    for f in files:
        if f.lower().endswith(('.mp4', '.webm', '.mov', '.m4v', '.avi')):
            src = os.path.join(folder, f)
            dst = os.path.join(target_dir, f)
            shutil.copy2(src, dst)
            copied.append(f)
            print(f"Copied {f} to {dst}")
    
    print("Copied video files:", copied)
else:
    print(f"Folder {folder} does not exist!")
