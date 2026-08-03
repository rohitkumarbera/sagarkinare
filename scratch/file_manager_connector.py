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

# 1. Login
session.get(login_url)
session.post(login_url, data={
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
})

# 2. Get File Manager page to extract connector details
fm_url = "https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager"
r_fm = session.get(fm_url)
print(f"File Manager Page Status: {r_fm.status_code}")

# Find connector URL or nonce
connector_url_match = re.search(r'url\s*:\s*["\']([^"\']*connector[^"\']*)["\']', r_fm.text, re.IGNORECASE)
if not connector_url_match:
    connector_url_match = re.search(r'["\'](https://[^"\']*admin-ajax\.php[^"\']*)["\']', r_fm.text)

connector_url = connector_url_match.group(1) if connector_url_match else "https://rohitbera.com/wp-admin/admin-ajax.php?action=mk_file_folder_manager_backend"
print("Connector URL:", connector_url)

# Test connector init call (elFinder cmd=open&target=)
connector_data = {
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1'
}

r_conn = session.post(connector_url, data=connector_data)
print(f"Connector Status: {r_conn.status_code}")
try:
    res_json = r_conn.json()
    print("Root target:", res_json.get('cwd', {}).get('name'), "| hash:", res_json.get('cwd', {}).get('hash'))
    print("Files in root:", len(res_json.get('files', [])))
    for f in res_json.get('files', []):
        print(f" - {f.get('name')} (phash: {f.get('phash')}, hash: {f.get('hash')}, mime: {f.get('mime')})")
except Exception as e:
    print(f"Connector response parsing error: {e}")
    print("Raw connector text snippet:", r_conn.text[:400])
