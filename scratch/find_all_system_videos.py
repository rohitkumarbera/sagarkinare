import os

dirs_to_check = [
    r"C:\Users\Administrator\.gemini\antigravity\brain\30d84ca1-3d7c-465c-ba64-357471ff594e\.user_uploaded",
    r"C:\Users\Administrator\.gemini\antigravity\brain\30d84ca1-3d7c-465c-ba64-357471ff594e",
    r"d:\Sagarkinare\public",
    r"d:\Sagarkinare\public\images\original"
]

all_vids = []

for d in dirs_to_check:
    if os.path.exists(d):
        for root, dirs, files in os.walk(d):
            for f in files:
                if f.lower().endswith(('.mp4', '.webm', '.mov', '.m4v', '.ogv')):
                    fp = os.path.join(root, f)
                    size = os.path.getsize(fp)
                    all_vids.append((fp, size))

print("System videos found:", all_vids)
