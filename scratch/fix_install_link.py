import requests
import re
import html
from urllib.parse import urljoin

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

# 2. Check plugins page to see if wp-file-manager needs activation
r_plugins = session.get("https://rohitbera.com/wp-admin/plugins.php")

# Find activation link for wp-file-manager
act_match = re.search(r'href="([^"]*plugins\.php\?action=activate[^"]*plugin=wp-file-manager[^"]*)"', r_plugins.text)
if act_match:
    act_url = urljoin(admin_url, html.unescape(act_match.group(1)))
    print("Found Activate URL:", act_url)
    r_act = session.get(act_url)
    print(f"Activate Status: {r_act.status_code}")

# Check plugins list again
r_plugins2 = session.get("https://rohitbera.com/wp-admin/plugins.php")
if "wp-file-manager" in r_plugins2.text:
    print("🎉 SUCCESS! WP File Manager is active on rohitbera.com!")
    # Check if menu item exists
    if "mk_file_folder_manager" in r_plugins2.text or "file_folder_manager" in r_plugins2.text or "wp_file_manager" in r_plugins2.text:
        print("File Manager menu registered!")
