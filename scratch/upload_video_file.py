import requests
import json
import os

url = "https://rohitbera.com/wp-admin/admin-ajax.php"
nonce = "3826090874"

video_path = r"d:\Sagarkinare\public\videos\slider_video.mp4"

session = requests.Session()

# Get fresh nonce if needed
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
res = r.json()
if 'nonce' in res:
    nonce = res['nonce']

print(f"Using nonce: {nonce}")

# Find or create videos directory inside sagarkinaretajpur
data = {
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'mkdir',
    'target': 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1cg',
    'name': 'videos'
}
r = session.post(url, data=data)
print("Mkdir videos status:", r.status_code, r.text[:200])

# Get target hash for videos folder
data = {
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'tree',
    'target': 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1cg'
}
r = session.post(url, data=data)
tree_res = r.json()
videos_hash = None
for item in tree_res.get('tree', []):
    if item.get('name') == 'videos':
        videos_hash = item.get('hash')
        break

if not videos_hash:
    videos_hash = 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1ci92aWRlb3M'

print(f"Videos folder target hash: {videos_hash}")

# Upload video file
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
    print("Uploading slider_video.mp4 (17.17 MB)...")
    ru = session.post(url, data=data, files=files)
    print("Upload status:", ru.status_code)
    print(ru.text[:300])
