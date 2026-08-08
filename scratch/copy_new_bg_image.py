import shutil
import os

src_file = r"C:\Users\Administrator\.gemini\antigravity\brain\30d84ca1-3d7c-465c-ba64-357471ff594e\.user_uploaded\media_1786197089161.jpg"

dest_public = r"d:\Sagarkinare\public\images\original\resort_night_fountain_illumination.jpg"
dest_dist = r"d:\Sagarkinare\dist\images\original\resort_night_fountain_illumination.jpg"

os.makedirs(os.path.dirname(dest_public), exist_ok=True)
shutil.copy2(src_file, dest_public)
print("Copied to public:", dest_public)

if os.path.exists(os.path.dirname(dest_dist)):
    shutil.copy2(src_file, dest_dist)
    print("Copied to dist:", dest_dist)
