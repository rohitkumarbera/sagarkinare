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

# 1. Login
session.get(login_url)
session.post(login_url, data={
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
})

# 2. Fetch plugin-install.php?tab=search&s=wp-file-manager
search_url = "https://rohitbera.com/wp-admin/plugin-install.php?tab=search&s=wp-file-manager"
r_search = session.get(search_url)
print(f"Search page status: {r_search.status_code}")

# Find install link for wp-file-manager
install_link_match = re.search(r'href="([^"]*update\.php\?action=install-plugin[^"]*slug=wp-file-manager[^"]*)"', r_search.text)
if not install_link_match:
    install_link_match = re.search(r'href="([^"]*update\.php\?action=install-plugin[^"]*)"', r_search.text)

if install_link_match:
    raw_url = install_link_match.group(1).replace('&amp;', '&')
    print("Found direct install link:", raw_url)
    r_inst = session.get(raw_url)
    print(f"Install status: {r_inst.status_code}")
    print("Result snippet:", r_inst.text[:400])

    # Check activation link in response
    act_match = re.search(r'href="([^"]*plugins\.php\?action=activate[^"]*)"', r_inst.text)
    if act_match:
        act_raw = act_match.group(1).replace('&amp;', '&')
        print("Found activate link:", act_raw)
        r_act = session.get(act_raw)
        print(f"Activation status: {r_act.status_code}")
else:
    print("Could not find install link in search results HTML.")

# Check plugins page again
r_plugins = session.get("https://rohitbera.com/wp-admin/plugins.php")
if "wp-file-manager" in r_plugins.text or "file-manager" in r_plugins.text:
    print("🎉 SUCCESS! WP File Manager installed!")
else:
    print("Plugin list check: not yet active.")
