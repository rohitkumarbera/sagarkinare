import zipfile
import os

dist_dir = r"d:\Sagarkinare\dist"
zip_path = r"d:\Sagarkinare\sagarkinaretajpur-website.zip"

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(dist_dir):
        for file in files:
            full_path = os.path.join(root, file)
            arcname = os.path.relpath(full_path, dist_dir)
            zipf.write(full_path, arcname)

print(f"Zip created successfully at: {zip_path}")
print(f"File size: {os.path.getsize(zip_path)} bytes")
