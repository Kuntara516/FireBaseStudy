import requests

# กำหนด URL ของ API
url = "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=e562e6a33d52c6c5d4483cb84276891a"

# เรียกใช้งาน API
response = requests.get(url)

# ตรวจสอบสถานะการตอบกลับ
if response.status_code == 200:
    # แปลงข้อมูล JSON เป็น Dictionary
    response_json = response.json()

    # แสดงข้อมูลสภาพอากาศ
    print(response_json["weather"][0]["main"])
    print(response_json["main"]["temp"])
    print(response_json["main"]["humidity"])
    print(response_json["wind"]["speed"])

else:
    print("Error: {}".format(response.status_code))