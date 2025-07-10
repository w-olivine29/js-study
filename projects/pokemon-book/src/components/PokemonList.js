import { TYPE_MAPPING } from "./typeMapping.js";

export default function PokemonList({
	$app,
	initialState,
	handleMonsterType,
	handleClickItem,
}) {
	this.state = initialState;
	this.handleMonsterType = handleMonsterType;
	this.handleClickItem = handleClickItem;

	this.$target = document.createElement("div");
	this.$target.className = "pokemon-list";
	$app.appendChild(this.$target);

	// [[이미지][(정보) [번호][이름][타입]]]
	this.template = () => {
		//console.log(this.state);

		// 가장 바깥 div는 조건에 상관없이 생성
		let template = `<div class= "pokemon-list">`;
		if (this.state) {
			this.state.forEach((element) => {
				// 타입이 여러 값이기 때문에 전체 템플릿에 넣기 전 미리 작업
				let typeTemplate = "";
				element.type.forEach((type) => {
					// 타입 색상(styles.css 참고), 타입의 한글이름 적용
					typeTemplate += `<div id="${type}" style="background-color: var(--${type});">${TYPE_MAPPING[type]}</div>`;
				});

				template += `<div class="pokemon-wrapper">
                    <div class="img-wrapper">
                        <img src="${element.img}" alt="${element.name} 이미지"></img>
                    </div>
                    <div class="pokemon-info">
                        <div class="index">No.${element.id}</div>
                        <div class="name">${element.name}</div>
                        <div class="type">${typeTemplate}</div> 
                    </div>
                </div>`;
			});
		}
		template += "</div>"; // if문에 돌입못하더라도 div 닫을 수 있게 if문 밖에 위치
		return template;
	};

	this.render = () => {
		this.$target.innerHTML = this.template();
		// 타입 내의 div
		const $types = this.$target.querySelectorAll(".type div"); //
		$types.forEach((element) => {
			element.addEventListener("click", (event) => {
				const type = event.target.id;
				this.handleMonsterType(type);
			});
		});

		const $pokemonWrappers = this.$target.querySelectorAll(".pokemon-wrapper");

		$pokemonWrappers.forEach((element) => {
			const $imgWrapper = element.querySelector(".img-wrapper");

			const $monsterIdx = element.querySelector(".index");

			$imgWrapper.addEventListener("click", () => {
				this.handleClickItem($monsterIdx.innerText.split(".")[1]);
			});
		});
	};

	// // state 변경 시 재랜더링
	// this.setState = (newState) => {
	// 	this.state = newState;
	// 	this.render();
	// };

	this.render(); //처음 생성될 때 랜더링
}
