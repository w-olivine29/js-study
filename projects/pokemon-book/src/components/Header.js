export default function Header({
	$app,
	currentPage,
	moveMainPage,
	searchMonster,
}) {
	this.state = currentPage;
	this.moveMainPage = moveMainPage;
	this.searchMonster = searchMonster;

	this.$target = document.createElement("div");
	this.$target.className = "header";

	$app.appendChild(this.$target);

	//[[포켓볼 이미지] [헤더내용(타이틀)]][[검색창] [버튼 이미지]]]
	this.template = () => {
		// 사용하는 컴포넌트 기준이 아닌 index.html 기준 경로 사용해야함
		const titleImgUrl = "/images/pokeball.png";
		const buttonImgUrl = "/images/search.png";
		let temp = `<div class ="header-content"> <img src="${titleImgUrl}" width =50px></img> 포켓몬 도감 </div>
         ${
						this.state !== "detail" &&
						`<div class ="search">
                            <input type= "text" placeholder ="포켓몬을 검색하세요">
							
                            <button>
                            <img src="${buttonImgUrl}"></img>
                            </button>
							
                        </div>`
					}  
        `;
		return temp;
	};

	this.render = () => {
		this.$target.innerHTML = this.template(); //DOM에 추가

		// 메인페이지 이동 이벤트
		this.$target
			.querySelector("div.header-content")
			.addEventListener("click", () => {
				moveMainPage();
			});
		// 상세 페이지가 아닐때만 해당 요소 가져와서 이벤트 추가
		this.state !== "detail" &&
			this.$target.querySelector("button").addEventListener("click", () => {
				const $input = this.$target.querySelector(".header .search input"); //클래스 선택자

				console.log($input.value);
				this.searchMonster($input.value);
			});
	};

	this.setState = (newState) => {
		this.state = newState;
	};

	this.render();
}
