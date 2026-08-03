import requests
import re
import os

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
login_data = {
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
}
session.post(login_url, data=login_data)

# 2. Get plugin-install.php page to get _wpnonce
r_install_page = session.get("https://rohitbera.com/wp-admin/plugin-install.php")
print(f"plugin-install.php status: {r_install_page.status_code}")

# Find install nonce
nonce_install = re.search(r'id="_wpnonce" name="_wpnonce" value="([a-f0-9]+)"', r_install_page.text)
if not nonce_install:
    nonce_install = re.search(r'_wpnonce=([a-f0-9]+)', r_install_page.text)

print("Install nonce:", nonce_install.group(1) if nonce_install else "Not found")

# Install wp-file-manager
plugin_slug = "wp-file-manager"
install_url = f"https://rohitbera.com/wp-admin/update.php?action=install-plugin&plugin={plugin_slug}&_wpnonce={nonce_install.group(1)}" if nonce_install else None

if install_url:
    print(f"Attempting to install plugin via: {install_url}")
    r_inst = session.get(install_url)
    print(f"Install response status: {r_inst.status_code}")
    print("Install snippet:", r_inst.text[:400])

    # Find activation link
    activate_match = re.search(r'href="(plugins\.php\?action=activate[^"]+)"', r_inst.text)
    if activate_match:
        act_url = "https://rohitbera.com/wp-admin/" + activate_match.group(1).replace('&amp;', '&')
        print(f"Activating plugin via: {act_url}")
        r_act = session.get(act_url)
        print(f"Activation status: {r_act.status_code}")
    else:
        print("Could not find activate link directly in output. Checking plugins.php...")

# Verify plugins page
r_plugins = session.get("https://rohitbera.com/wp-admin/plugins.php")
if "wp-file-manager" in r_plugins.text or "file-manager" in r_plugins.text:
    print("🎉 SUCCESS! WP File Manager is installed & active!")
else:
    print("WP File Manager not found in plugins list.")
