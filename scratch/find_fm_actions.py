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

session.get(login_url)
session.post(login_url, data={
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
})

r_fm = session.get("https://rohitbera.com/wp-admin/admin.php?page=wp_file_manager")

# Search for any ajax action string inside JS
actions = re.findall(r'action\s*:\s*["\']([^"\']+)["\']', r_fm.text)
print("Found JS action definitions:", set(actions))

# Search for any url string containing connector or backend
urls = re.findall(r'url\s*:\s*["\']([^"\']+)["\']', r_fm.text)
print("Found JS url definitions:", set(urls))

# Find all script src tags
scripts = re.findall(r'src=["\']([^"\']*file-manager[^"\']*)["\']', r_fm.text)
print("File manager script files:", scripts)
