// Storage/app.js

const express = require("express");
const app = express();

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