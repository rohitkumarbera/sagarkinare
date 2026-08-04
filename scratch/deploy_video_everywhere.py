import requests
import re
import os

url = "https://rohitbera.com/wp-admin/admin-ajax.php"
session = requests.Session()

print("Logging in to WP Admin...")
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

m = re.search(r'"nonce"\s*:\s*"([a-f0-9]+)"', r.text)
nonce = m.group(1) if m else "3826090874"
print(f"Extracted nonce: {nonce}")

# Target hashes to upload video into
targets = [
    ('sagarkinaretajpur root', 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1cg'),
    ('videos folder', 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1ci92aWRlb3M'),
    ('images/original folder', 'l1_Y2xpZW50d2Vic2l0ZS9zYWdhcmtpbmFyZXRhanB1ci9pbWFnZXMvb3JpZ2luYWw')
]

video_path = r"d:\Sagarkinare\public\videos\slider_video.mp4"
video_size = os.path.getsize(video_path)
print(f"Video file size: {video_size} bytes")

for name, target_hash in targets:
    print(f"\nUploading slider_video.mp4 to {name} ({target_hash})...")
    with open(video_path, 'rb') as f:
        files = {
            'upload[]': ('slider_video.mp4', f, 'video/mp4')
        }
        data = {
            'action': 'mk_file_folder_manager',
            '_wpnonce': nonce,
            'cmd': 'upload',
            'target': target_hash
        }
        r_up = session.post(url, data=data, files=files)
        print(f"Upload to {name} status: {r_up.status_code}")

print("\nFinished multi-target video upload!")
