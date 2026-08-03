import requests
import re
import json

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

username = "rohitkumarbera2006@gmail.com"
password = "Rohit@2006"

login_url = "https://rohitbera.com/wp-login.php"
admin_url = "https://rohitbera.com/wp-admin/"

session.get(login_url)
session.post(login_url, data={
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
})

r_fm = session.get("https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager")

# Extract nonce
nonce_match = re.search(r'var fmfparams = \{[^}]*"nonce":"([^"]+)"', r_fm.text)
nonce = nonce_match.group(1) if nonce_match else ""
print("Extracted nonce:", nonce)

ajax_url = "https://rohitbera.com/wp-admin/admin-ajax.php"

# Test open command
payload = {
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1'
}

r_open = session.post(ajax_url, data=payload)
print(f"Open command status: {r_open.status_code}")
if r_open.status_code == 200:
    res = r_open.json()
    print("🎉 SUCCESS! CWD name:", res.get('cwd', {}).get('name'), "| hash:", res.get('cwd', {}).get('hash'))
    print("Files in root folder:")
    for f in res.get('files', []):
        print(f" - {f.get('name')} (hash: {f.get('hash')}, mime: {f.get('mime')})")
else:
    print("Open error text snippet:", r_open.text[:400])
