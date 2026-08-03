import requests
import re

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

username = "rohitkumarbera2006@gmail.com"
password = "Rohit@2006"

login_url = "https://rohitbera.com/wp-login.php"
admin_url = "https://rohitbera.com/wp-admin/"
ajax_url = "https://rohitbera.com/wp-admin/admin-ajax.php"

session.get(login_url)
session.post(login_url, data={
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
})

r_fm = session.get("https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager")
nonce_match = re.search(r'var fmfparams = \{[^}]*"nonce":"([^"]+)"', r_fm.text)
nonce = nonce_match.group(1) if nonce_match else ""

# 1. Open root
r_open = session.post(ajax_url, data={
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'open',
    'target': '',
    'init': '1',
    'tree': '1'
})

cw_hash = None
for f in r_open.json().get('files', []):
    if f.get('name') == 'clientwebsite':
        cw_hash = f.get('hash')

# 2. Open clientwebsite
r_cw = session.post(ajax_url, data={
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'open',
    'target': cw_hash
})

sk_hash = None
for f in r_cw.json().get('files', []):
    if f.get('name') == 'sagarkinaretajpur':
        sk_hash = f.get('hash')

# 3. Open sagarkinaretajpur
r_sk = session.post(ajax_url, data={
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'open',
    'target': sk_hash
})

print("Files inside clientwebsite/sagarkinaretajpur:")
for f in r_sk.json().get('files', []):
    print(f" - {f.get('name')} | mime: {f.get('mime')} | hash: {f.get('hash')}")
