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

resp = session.post(login_url, data=login_data)
print(f"Logged into Main WP Admin! Status: {resp.status_code} | URL: {resp.url}")

# Fetch admin dashboard
r_admin = session.get(admin_url)
print(f"Admin Page Status: {r_admin.status_code}")

# Check installed plugins
r_plugins = session.get("https://rohitbera.com/wp-admin/plugins.php")
print(f"Plugins Page Status: {r_plugins.status_code}")

# Find _wpnonce for plugin installation or media upload
nonce_match = re.search(r'name="_wpnonce" value="([a-f0-9]+)"', r_plugins.text)
if nonce_match:
    print("Found plugins wpnonce:", nonce_match.group(1))

# Check if file manager plugin exists
if "wp-file-manager" in r_plugins.text or "file-manager" in r_plugins.text:
    print("WP File Manager is installed!")
else:
    print("Checking if we can install WP File Manager or deploy files...")

# List plugins text snippet
plugins_matches = re.findall(r'<tr class="[^"]*plugin[^"]*"[^>]*data-slug="([^"]+)"', r_plugins.text)
print("Installed plugin slugs:", plugins_matches)
