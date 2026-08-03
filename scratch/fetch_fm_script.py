import requests
import re

url = "https://rohitbera.com/wp-content/plugins/wp-file-manager/js/fm_script.js?ver=8.0.4"
r = requests.get(url)
print(f"fm_script.js Status: {r.status_code}")
print("Length:", len(r.text))

# Search for connector or ajaxurl in script
print("Script contents preview:\n")
print(r.text[:1000])

# Find ajax actions in fm_script.js
actions = re.findall(r'action\s*:\s*["\']([^"\']+)["\']', r.text)
print("\nActions found in fm_script.js:", set(actions))
