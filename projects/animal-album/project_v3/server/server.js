const express = require("express"); //node.js의 프레임워크인 express 모듈 불러오기

const path = require("path"); // 파일 시스템의 경로를 다루기 위해 사용되는 path 모듈 불러오기
const app = express(); // express 모듈을 호출한 결과 값을 할당 (express 애플리케이션 객체 생성)
const PORT = 3000; //서버가 계속 해서 듣고 있을 포트 번호 설정

/* 
우리가 필요한 서버는 어떠한 요청을 받던 항상 index.html 파일을 반환해주는 서버
항상 index.html 파일을 반환해야 새로고침을 해도 index.html 에 의해 index.js 파일이 실행 -> app.js 실행
*/

/* 
미들웨어
    Express 와 같은 웹 프레임워크에서 요청과 응답,  
    request, response 객체를 수정 및 종료하고 request를 보내는 기능을 할 수 있도록 도와주는 함수

    작성한 여러 개의 파일들에 서버가 접근할 수 있도록 상위 폴더로 지정

dirname
    현재 파일의 경로
 */

// 애플리케이션에 미들웨어 추가 (정적파일을 제공하는 미들웨어)
//app.use(express.static(__dirname + '/..'));
// 플랫폼마다 경로 구분자가 다르기때문에 더 안전한 방식으로 변경
// 앱 객체를 사용하고 use라는 메서드를 사용해서 해당 서버가 탐색기에 있는 폴더에 접근 할 수 있도록 경로 작성
//sendfile(): 어떤 경로로 요청이 오던지 항상 동일하게 index.html 파일을 응답으로 반환해주는 코드
app.use(express.static(path.join(__dirname, "..")));

//================================================================================================
//TypeError: Missing parameter name at 2: https://git.new/pathToRegexpError
// "/*", "/*/", ".*/" 등 모두 에러 발생 ("/" 는 에러발생은 아니지만, 의도한대로 동작x)

// app.get("/.*/", (req, res) => {
// 	res.sendFile(
// 		path.join(__dirname, "..", "index.html"), // 경로 생성
// 		(err) => {
// 			// sendFile의 콜백 함수
// 			err && console.log("파일 전송 에러:", err);
// 		}
// 	);
// });

//================================================================================================
// 정상 작동

// 정규 표현식 리터럴
// app.get(/.*/, (req, res) => {
// 	res.sendFile(
// 		path.join(__dirname, "..", "index.html"), // 경로 생성
// 		(err) => {
// 			// sendFile의 콜백 함수
// 			err && console.log("파일 전송 에러:", err);
// 		}
// 	);
// });

// https://git.new/pathToRegexpError 에서 나온대로 수정
// "/*path" 로 넣어도 정상작동
app.get("{/*path}", (req, res) => {
	res.sendFile(
		path.join(__dirname, "..", "index.html"), // 경로 생성
		(err) => {
			// sendFile의 콜백 함수
			err && console.log("파일 전송 에러:", err);
		}
	);
});

//================================================================================================

// 지정한 포트번호에서 서버가 항상 요청을 듣고 있을 수 있도록 설정
app.listen(PORT, () => {
	console.log(`START SERVER`); // 서버가 성공적으로 실행될 때 실행되는 코드
	console.log(`서버 실행 - ${PORT} port`);
});

// 서버 실행
//node ./server/server.js
