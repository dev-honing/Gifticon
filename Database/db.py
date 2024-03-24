# Database/db.py

from fastapi import FastAPI
import pymysql.cursors

app = FastAPI()

@app.get("/")
def read_root():
    return {"Greet": "Hello, FastAPI World!"}

# MariaDB 연결 설정
connection = pymysql.connect(
    host='localhost',
    user='root',
    password='1234',
    database='Gifticon',
    cursorclass=pymysql.cursors.DictCursor
)

# 엔드 포인트 설정
# /users
@app.get("/users")
def read_users():
    try:
        with connection.cursor() as cursor:
            # User 테이블 조회
            cursor.execute("SELECT * FROM User")
            users = cursor.fetchall()
        return users
    except Exception as e:
        return {"error": str(e)}

# /gifts
@app.get("/gifts")
def read_gifts():
    try:
        with connection.cursor() as cursor:
            # Gift 테이블 조회
            cursor.execute("SELECT * FROM Gift")
            gifts = cursor.fetchall()
        return gifts
    except Exception as e:
        return {"error": str(e)}
    
# 서버를 7777번 포트로 실행
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=7777)