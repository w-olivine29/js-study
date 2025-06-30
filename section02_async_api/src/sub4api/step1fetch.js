//https://jsonplaceholder.typicode.com

//function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>

//비동기 실행
let response = fetch("https://jsonplaceholder.typicode.com/posts")
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

console.log(response); //가장 먼저 실행
