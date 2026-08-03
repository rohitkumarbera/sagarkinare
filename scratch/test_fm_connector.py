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

# Extract fmfparams nonce
nonce_match = re.search(r'var fmfparams = \{[^}]*"nonce":"([^"]+)"', r_fm.text)
nonce = nonce_match.group(1) if nonce_match else ""
print("Extracted fmfparams nonce:", nonce)

# Test 1: connector.minimal.php
conn1_url = "https://rohitbera.com/wp-content/plugins/wp-file-manager/lib/php/connector.minimal.php"
params1 = {
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1'
}

r1 = session.post(conn1_url, data=params1)
print(f"Test 1 connector.minimal.php status: {r1.status_code}")
if r1.status_code == 200:
    try:
        j1 = r1.json()
        print("Test 1 cwd name:", j1.get('cwd', {}).get('name'), "| target hash:", j1.get('cwd', {}).get('hash'))
        print("Root directory files:")
        for f in j1.get('files', []):
            print(f" - {f.get('name')} | mime: {f.get('mime')} | hash: {f.get('hash')}")
    except Exception as e:
        print("Test 1 JSON parse err:", e)
        print(r1.text[:300])

# Test 2: admin-ajax.php action=mk_file_folder_manager_backend
conn2_url = "https://rohitbera.com/wp-admin/admin-ajax.php"
params2 = {
    'action': 'mk_file_folder_manager_backend',
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1',
    '_wpnonce': nonce
}

r2 = session.post(conn2_url, data=params2)
print(f"\nTest 2 admin-ajax.php status: {r2.status_code}")
if r2.status_code == 200:
    try:
        j2 = r2.json()
        print("Test 2 cwd name:", j2.get('cwd', {}).get('name'), "| target hash:", j2.get('cwd', {}).get('hash'))
        print("Root directory files:")
        for f in j2.get('files', []):
            print(f" - {f.get('name')} | mime: {f.get('mime')} | hash: {f.get('hash')}")
    except Exception as e:
        print("Test 2 JSON parse err:", e)
        print(r2.text[:300])
