const changePage = (page) => {
	let $content = document.getElementById("content");
	$content.textContent = `현재 보고 있는 페이지는 ${page} 페이지 입니다.`;

	//pushState(data: any, unused: string, url?: string | URL | null): void;
	history.pushState({ page: page }, `Title ${page}`, `/${page}`);
};

document.getElementById("page1").addEventListener("click", () => {
	changePage("page1");
});
document.getElementById("page2").addEventListener("click", () => {
	changePage("page2");
});
document.getElementById("page3").addEventListener("click", () => {
	changePage("page3");
});

// 바닐라 js에서는 자체적 제공 라우팅 기능x -> History api 사용 (브라우저 제공)
const goBack = () => {
	history.back();
};
const goForward = () => {
	history.forward();
};

//popstate
window.addEventListener("popstate", (event) => {
	if (event.state) {
		let $content = document.getElementById("content");
		$content.textContent = `현재 보고 있는 페이지는 ${event.state.page} 페이지 입니다.`;
	}
});

document.getElementById("goBack").addEventListener("click", goBack);
document.getElementById("goForward").addEventListener("click", goForward());
