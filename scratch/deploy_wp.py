import requests
import json
import os

wp_url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/"
login_url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/wp-login.php"
admin_url = "https://rohitbera.com/clientwebsite/sagarkinaretajpur/wp-admin/"

username = "rohitkumarbera2006@gmail.com"
password = "Rohit@2006"

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

print(f"1. Attempting login to {login_url} with updated password...")

login_data = {
    'log': username,
    'pwd': password,
    'wp-submit': 'Log In',
    'redirect_to': admin_url,
    'testcookie': '1'
}

# Set initial test cookie
try:
    session.get(login_url)
except Exception as e:
    print(f"GET login_url error: {e}")

try:
    resp = session.post(login_url, data=login_data)
    print(f"Login Response Status: {resp.status_code}")
    print(f"Final URL: {resp.url}")
    print(f"Cookies: {session.cookies.get_dict()}")
    if resp.status_code == 200:
        print("Response body snippet:")
        print(resp.text[:300])
except Exception as e:
    print(f"POST login_url error: {e}")

# Check FTP connection to rohitbera.com with user credentials
import ftplib
print("\n2. Testing FTP connection to rohitbera.com...")
ftp_hosts = ["rohitbera.com", "ftp.rohitbera.com"]
for fh in ftp_hosts:
    try:
        ftp = ftplib.FTP(fh, timeout=10)
        res = ftp.login(username, password)
        print(f"FTP SUCCESS on {fh}! Response: {res}")
        print("FTP Directory list:", ftp.nlst())
        ftp.quit()
        break
    except Exception as e:
        print(f"FTP failed on {fh}: {e}")
