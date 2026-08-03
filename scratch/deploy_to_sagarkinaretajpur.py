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

# 2. Get WP File Manager page & nonce
r_fm = session.get("https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager")
nonce_match = re.search(r'var fmfparams = \{[^}]*"nonce":"([^"]+)"', r_fm.text)
nonce = nonce_match.group(1) if nonce_match else ""
print("Extracted nonce:", nonce)

# 3. Open root folder
open_payload = {
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1'
}

r_open = session.post(ajax_url, data=open_payload)
res_open = r_open.json()
files = res_open.get('files', [])

clientwebsite_hash = None
for f in files:
    if f.get('name') == 'clientwebsite':
        clientwebsite_hash = f.get('hash')
        print(f"Found 'clientwebsite' folder hash: {clientwebsite_hash}")

if clientwebsite_hash:
    # Open clientwebsite folder
    r_cw = session.post(ajax_url, data={
        'action': 'mk_file_folder_manager',
        '_wpnonce': nonce,
        'cmd': 'open',
        'target': clientwebsite_hash
    })
    res_cw = r_cw.json()
    
    target_hash = None
    for f in res_cw.get('files', []):
        if f.get('name') == 'sagarkinaretajpur':
            target_hash = f.get('hash')
            print(f"Found existing 'sagarkinaretajpur' folder hash: {target_hash}")

    # If sagarkinaretajpur folder does not exist, create it via mkdir
    if not target_hash:
        print("Creating 'sagarkinaretajpur' folder inside 'clientwebsite'...")
        r_mkdir = session.post(ajax_url, data={
            'action': 'mk_file_folder_manager',
            '_wpnonce': nonce,
            'cmd': 'mkdir',
            'target': clientwebsite_hash,
            'name': 'sagarkinaretajpur'
        })
        res_mkdir = r_mkdir.json()
        print("mkdir result:", res_mkdir)
        added = res_mkdir.get('added', [])
        if added:
            target_hash = added[0].get('hash')
            print(f"Created 'sagarkinaretajpur' folder hash: {target_hash}")

    # Now upload sagarkinaretajpur-website.zip into target_hash
    if target_hash:
        zip_path = r"d:\Sagarkinare\sagarkinaretajpur-website.zip"
        print(f"\nUploading {zip_path} to sagarkinaretajpur folder...")
        
        upload_data = {
            'action': 'mk_file_folder_manager',
            '_wpnonce': nonce,
            'cmd': 'upload',
            'target': target_hash
        }
        
        files_to_upload = {
            'upload[]': ('sagarkinaretajpur-website.zip', open(zip_path, 'rb'), 'application/zip')
        }
        
        r_upload = session.post(ajax_url, data=upload_data, files=files_to_upload)
        print(f"Upload Response Status: {r_upload.status_code}")
        res_up = r_upload.json()
        print("Upload Result:", res_up)
        
        zip_file_hash = None
        for af in res_up.get('added', []):
            if af.get('name') == 'sagarkinaretajpur-website.zip':
                zip_file_hash = af.get('hash')
                print(f"Uploaded zip hash: {zip_file_hash}")
                
        if zip_file_hash:
            print("\nExtracting sagarkinaretajpur-website.zip inside sagarkinaretajpur folder...")
            extract_payload = {
                'action': 'mk_file_folder_manager',
                '_wpnonce': nonce,
                'cmd': 'extract',
                'target': zip_file_hash,
                'makedir': '0'
            }
            r_ext = session.post(ajax_url, data=extract_payload)
            print(f"Extract Response Status: {r_ext.status_code}")
            print("Extract Result:", r_ext.text[:500])
else:
    print("Could not find clientwebsite directory.")
