// Storage/app.js

// Express 서버 제작을 위한 패키지
const express = require("express");
const app = express();

// S3 연결 설정을 위한 패키지
const dotenv = require("dotenv");
const AWS = require("aws-sdk");

// 환경변수 로드
dotenv.config({ path: "../.env" });

// AWS S3 설정
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

app.get("/", (req, res) => {
  res.send("Express 서버 제작 확인");
});

// 이미지 업로드 라우트
app.get("/upload", (req, res) => { // fixme: POST 요청으로 변경
  res.send("이미지 업로드 라우트 확인");
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`서버 ON: http://localhost:${PORT}`);
});