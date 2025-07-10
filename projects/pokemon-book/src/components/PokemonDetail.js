import { TYPE_MAPPING } from "./typeMapping.js";

export default function PokemonDetail({ $app, initialState }) {
	this.state = initialState;

	this.$target = document.createElement("div");
	this.$target.className = "pokemon-detail";

	$app.appendChild(this.$target);

	this.template = () => {
		let typeTemplate = "";
		let monsterType = this.state.type;
		monsterType.forEach((element) => {
			// 타입 색상(styles.css 참고), 타입의 한글이름 적용
			typeTemplate += `<div style="background-color: var(--${element});">${TYPE_MAPPING[element]}</div>`;
		});

		let template = `<div class="detail-wrapper">
            <div class="left-wrapper">
                <img src="${this.state.img}"></img>
            </div>
            <div class="right-wrapper">
                <div class="pokemon-info">
                    <div class="index">No.${this.state.id}</div>
                    <div class="name">${this.state.name}</div>                 
                    <div class="type">${typeTemplate}</div>
                    <div class="description">${this.state.description}</div>
                </div>
                <div class="detail-info">
                    <div>
                        <div class="label">키</div>
                        <div class="info">${this.state.height}m</div>
                    </div>
                    <div>
                        <div class="label">분류</div>
                        <div class="info">${this.state.info}</div>
                    </div>
                    <div>
                        <div class="label">몸무게</div>
                        <div class="info">${this.state.weight}kg</div>
                    </div>
                </div>
            </div>
        </div>`;

		return template;
	};

	this.render = () => {
		this.$target.innerHTML = this.template();
	};
	this.render();
}
