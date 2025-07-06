const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..")));

// 어떤 경로 요청이 오던지 항상 index.html를 반환
app.get("{/*path}", (req, res) => {
	res.sendFile(
		path.join(__dirname, "..", "index.html"), // 경로 생성
		(err) => {
			// sendFile의 콜백 함수
			err && console.log("파일 전송 에러:", err);
		}
	);
});

// 지정한 포트번호에서 서버가 항상 요청을 듣고 있을 수 있도록 설정
app.listen(PORT, () => {
	console.log(`START SERVER - [Trip wiki]`); // 서버가 성공적으로 실행될 때 실행되는 코드
	console.log(`서버 실행 - ${PORT} port`);
});

// 서버 실행 (터미널 입력)
//node ./server/server.js
