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

# Find sagarkinaretajpur folder hash
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

htaccess_content = """# Redirect wp-admin and wp-login.php to main working WordPress Login
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /clientwebsite/sagarkinaretajpur/
  
  RewriteRule ^wp-admin/?$ https://rohitbera.com/wp-admin/ [R=301,L]
  RewriteRule ^wp-login\.php$ https://rohitbera.com/wp-login.php [R=301,L]

  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /clientwebsite/sagarkinaretajpur/index.html [L]
</IfModule>
"""

local_htaccess = r"d:\Sagarkinare\public\.htaccess"
with open(local_htaccess, 'w', encoding='utf-8') as f:
    f.write(htaccess_content)

print("Created updated local .htaccess with wp-admin redirect rules.")

# Upload .htaccess to sagarkinaretajpur
r_up = session.post(ajax_url, data={
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'upload',
    'target': sk_hash
}, files={
    'upload[]': ('.htaccess', open(local_htaccess, 'rb'), 'text/plain')
})

print(f"Upload .htaccess status: {r_up.status_code}")
print("Upload response:", r_up.json())
