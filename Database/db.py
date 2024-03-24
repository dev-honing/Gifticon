# Database/db.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pymysql.cursors
from dotenv import load_dotenv
import os

app = FastAPI()

# CORS 설정
origins = [
    "http://localhost:3000", # Next App
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# .env 파일로부터 환경 변수 로드
load_dotenv()

# .env 파일에서 데이터베이스 연결 정보 읽기
DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_DATABASE = os.getenv("DB_DATABASE")

# MariaDB 연결 설정
connection = pymysql.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_DATABASE,
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
