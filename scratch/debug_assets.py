import requests
import re
from urllib.parse import urljoin

base_url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r_index = requests.get(base_url, headers=headers)
print(f"index.html Status: {r_index.status_code}")

css_matches = re.findall(r'href="([^"]*\.css)"', r_index.text)
js_matches = re.findall(r'src="([^"]*\.js)"', r_index.text)

print("CSS matches:", css_matches)
print("JS matches:", js_matches)

for css in css_matches:
    css_url = urljoin(base_url, css)
    r_css = requests.get(css_url, headers=headers)
    print(f"CSS {css_url} -> Status: {r_css.status_code} | Size: {len(r_css.content)}")

for js in js_matches:
    js_url = urljoin(base_url, js)
    r_js = requests.get(js_url, headers=headers)
    print(f"JS {js_url} -> Status: {r_js.status_code} | Size: {len(r_js.content)}")

    # Check images referenced in JS
    images_in_js = re.findall(r'/images/original/[a-zA-Z0-9_\-\.]+', r_js.text)
    print(f"Found {len(images_in_js)} image paths in JS.")
    if images_in_js:
        test_img = urljoin(base_url, images_in_js[0].lstrip('/'))
        r_img = requests.get(test_img, headers=headers)
        print(f"Test image {test_img} -> Status: {r_img.status_code}")
