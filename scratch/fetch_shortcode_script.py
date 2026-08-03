import requests
import re

url = "https://rohitbera.com/wp-content/plugins/wp-content/plugins/wp-file-manager/js/file_manager_free_shortcode_admin.js"
if "wp-content/plugins/wp-content/plugins" in url:
    url = "https://rohitbera.com/wp-content/plugins/wp-file-manager/js/file_manager_free_shortcode_admin.js"

r = requests.get(url)
print(f"Status: {r.status_code}")
print("Content:\n")
print(r.text)
