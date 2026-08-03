import requests
import re
import json
import os

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

username = "rohitkumarbera2006@gmail.com"
password = "Rohit@2006"

login_url = "https://rohitbera.com/wp-login.php"
admin_url = "https://rohitbera.com/wp-admin/"
ajax_url = "https://rohitbera.com/wp-admin/admin-ajax.php"

# 1. Login
session.get(login_url)
session.post(login_url, data={
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
})

# 2. Get Nonce
r_fm = session.get("https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager")
nonce_match = re.search(r'var fmfparams = \{[^}]*"nonce":"([^"]+)"', r_fm.text)
nonce = nonce_match.group(1) if nonce_match else ""
print("Extracted nonce:", nonce)

def get_or_create_dir(parent_hash, dir_name):
    r = session.post(ajax_url, data={
        'action': 'mk_file_folder_manager',
        '_wpnonce': nonce,
        'cmd': 'open',
        'target': parent_hash
    })
    res = r.json()
    for f in res.get('files', []):
        if f.get('name') == dir_name and f.get('mime') == 'directory':
            print(f"Directory '{dir_name}' exists with hash: {f.get('hash')}")
            return f.get('hash')
            
    # Create directory
    print(f"Creating directory '{dir_name}' in parent {parent_hash}...")
    r_mk = session.post(ajax_url, data={
        'action': 'mk_file_folder_manager',
        '_wpnonce': nonce,
        'cmd': 'mkdir',
        'target': parent_hash,
        'name': dir_name
    })
    res_mk = r_mk.json()
    added = res_mk.get('added', [])
    if added:
        h = added[0].get('hash')
        print(f"Created '{dir_name}' hash: {h}")
        return h
    return None

def upload_files_to_hash(target_hash, file_paths):
    if not file_paths:
        return
    print(f"Uploading {len(file_paths)} files to target {target_hash}...")
    files_payload = []
    for fp in file_paths:
        files_payload.append(('upload[]', (os.path.basename(fp), open(fp, 'rb'))))
        
    r_up = session.post(ajax_url, data={
        'action': 'mk_file_folder_manager',
        '_wpnonce': nonce,
        'cmd': 'upload',
        'target': target_hash
    }, files=files_payload)
    print(f"Upload status: {r_up.status_code}")
    print("Uploaded:", len(r_up.json().get('added', [])))

# 3. Locate root folders
r_open = session.post(ajax_url, data={
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1'
})
res_open = r_open.json()
cw_hash = None
for f in res_open.get('files', []):
    if f.get('name') == 'clientwebsite':
        cw_hash = f.get('hash')

sagarkinare_hash = get_or_create_dir(cw_hash, 'sagarkinaretajpur')
assets_hash = get_or_create_dir(sagarkinare_hash, 'assets')
images_hash = get_or_create_dir(sagarkinare_hash, 'images')
original_hash = get_or_create_dir(images_hash, 'original')

# 4. Upload root files
dist_dir = r"d:\Sagarkinare\dist"
root_files = [os.path.join(dist_dir, f) for f in os.listdir(dist_dir) if os.path.isfile(os.path.join(dist_dir, f))]
print(f"Found {len(root_files)} root files to upload...")
upload_files_to_hash(sagarkinare_hash, root_files)

# 5. Upload assets files
dist_assets = os.path.join(dist_dir, 'assets')
asset_files = [os.path.join(dist_assets, f) for f in os.listdir(dist_assets) if os.path.isfile(os.path.join(dist_assets, f))]
print(f"Found {len(asset_files)} asset files to upload...")
upload_files_to_hash(assets_hash, asset_files)

# 6. Upload original images
dist_original = os.path.join(dist_dir, 'images', 'original')
original_files = [os.path.join(dist_original, f) for f in os.listdir(dist_original) if os.path.isfile(os.path.join(dist_original, f))]
print(f"Found {len(original_files)} original images to upload...")

# Batch upload images in chunks of 10
chunk_size = 10
for i in range(0, len(original_files), chunk_size):
    chunk = original_files[i:i+chunk_size]
    print(f"Uploading image chunk {i+1} to {i+len(chunk)}...")
    upload_files_to_hash(original_hash, chunk)

print("\n🎉 ALL FILES UPLOADED DIRECTLY TO EXACT TARGET DIRECTORIES!")
