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
print("Page length:", len(r_fm.text))

# Search for elFinder initialization options
elfinder_matches = re.findall(r'(\b\w*elfinder\w*\b|\b\w*connector\w*\b|\b\w*nonce\w*\b)', r_fm.text, re.IGNORECASE)
print("Found keywords count:", len(elfinder_matches))

# Print javascript blocks
script_blocks = re.findall(r'<script[^>]*>(.*?)</script>', r_fm.text, re.DOTALL)
print(f"Found {len(script_blocks)} script blocks.")

for i, block in enumerate(script_blocks):
    if "elfinder" in block.lower() or "file_manager" in block.lower() or "ajaxurl" in block.lower():
        print(f"--- Script Block {i+1} ---")
        print(block[:600])
        print("------------------------\n")
