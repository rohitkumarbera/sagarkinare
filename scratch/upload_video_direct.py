import requests
import os

url = "https://rohitbera.com/wp-admin/admin-ajax.php"
session = requests.Session()

login_resp = session.post("https://rohitbera.com/wp-login.php", data={
    'log': 'rohitkumarbera2006@gmail.com',
    'pwd': 'Rohit@2006',
    'wp-submit': 'Log In',
    'redirect_to': 'https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager'
})

data = {
    'action': 'mk_file_folder_manager',
    'cmd': 'tree',
    'target': 'l1_Lw'
}
r = session.post(url, data=data)

import re
m = re.search(r'"nonce"\s*:\s*"([a-f0-9]+)"', r.text)
if m:
    nonce = m.group(1)
else:
    nonce = "3826090874"

print(f"Extracted nonce: {nonce}")

# Mkdir videos in sagarkinaretajpur
data = {
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'mkdir',
    'target': 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1cg',
    'name': 'videos'
}
r_mkdir = session.post(url, data=data)

# Tree to get videos hash
data = {
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'tree',
    'target': 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1cg'
}
r_tree = session.post(url, data=data)
try:
    tree_data = r_tree.json()
    videos_hash = None
    for item in tree_data.get('tree', []):
        if item.get('name') == 'videos':
            videos_hash = item.get('hash')
            break
except Exception as e:
    videos_hash = None

if not videos_hash:
    videos_hash = 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1ci92aWRlb3M'

print("Videos target hash:", videos_hash)

video_path = r"d:\Sagarkinare\public\videos\slider_video.mp4"
with open(video_path, 'rb') as f:
    files = {
        'upload[]': ('slider_video.mp4', f, 'video/mp4')
    }
    data = {
        'action': 'mk_file_folder_manager',
        '_wpnonce': nonce,
        'cmd': 'upload',
        'target': videos_hash
    }
    print("Uploading 17.17 MB slider_video.mp4...")
    r_up = session.post(url, data=data, files=files)
    print("Upload status:", r_up.status_code)
    print("Response text snippet:", r_up.text[:300])
