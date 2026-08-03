import requests

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

username = "rohitkumarbera2006@gmail.com"
password = "Rohit@2006"

wp_sites = [
    "https://rohitbera.com/",
    "https://rohitbera.com/clientwebsite/",
    "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
]

for base in wp_sites:
    login_url = base + "wp-login.php"
    admin_url = base + "wp-admin/"
    print(f"\nTesting login at: {login_url}")
    try:
        r_get = session.get(login_url, timeout=10)
        print(f"GET status: {r_get.status_code}")
        if r_get.status_code == 200:
            login_data = {
                'log': username,
                'pwd': password,
                'wp-submit': 'Log In',
                'redirect_to': admin_url,
                'testcookie': '1'
            }
            resp = session.post(login_url, data=login_data, timeout=10)
            print(f"POST status: {resp.status_code} | Final URL: {resp.url}")
            if "wp-admin" in resp.url or "logged_in" in str(session.cookies):
                print(f"🎉 SUCCESS! Logged into {base}!")
            else:
                print(f"Login failed at {base}")
    except Exception as e:
        print(f"Error testing {login_url}: {e}")
