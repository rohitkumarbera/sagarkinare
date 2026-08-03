import requests

url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
print("HTML Status:", r.status_code)

js_url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/assets/index-BHsI9Sk9.js"
r_js = requests.get(js_url, headers=headers)
print(f"JS {js_url} -> Status: {r_js.status_code} | Size: {len(r_js.content)} bytes")

css_url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/assets/index-B28LDg5p.css"
r_css = requests.get(css_url, headers=headers)
print(f"CSS {css_url} -> Status: {r_css.status_code} | Size: {len(r_css.content)} bytes")
