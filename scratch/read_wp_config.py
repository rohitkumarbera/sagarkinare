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

# Read clientwebsite/wp-config.php content via file manager get command
r_getcontent = session.post(ajax_url, data={
    'action': 'mk_file_folder_manager',
    '_wpnonce': nonce,
    'cmd': 'get',
    'target': 'l1_Y2xpZW50d2Vic2l0ZS93cC1jb25maWcucGhw'
})

print("clientwebsite/wp-config.php content:\n")
print(r_getcontent.text[:1200])
