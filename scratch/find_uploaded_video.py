import os

workspace = r"d:\Sagarkinare"
found_videos = []

for root, dirs, files in os.walk(workspace):
    if 'node_modules' in root or '.git' in root:
        continue
    for f in files:
        if f.lower().endswith(('.mp4', '.webm', '.mov', '.m4v', '.ogv')):
            fp = os.path.join(root, f)
            rel = os.path.relpath(fp, workspace)
            size = os.path.getsize(fp)
            found_videos.append((rel, size))

print("Found video files:", found_videos)
