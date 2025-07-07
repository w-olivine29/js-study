// 경로에서 파일확장자까지 적지 않으면 text/html 로 응답됨 (엄격한 MIME 유형 검사)
import { requestList } from "./components/api.js";
import PokemonList from "./components/PokemonList.js";

// 일단 detail 페이지 고려하지 않고 구현
export default function App($app) {
	this.state = {
		monsterType: "",
		searchWord: "",
		monsters: [],
		currentPage: "", //list or detail
	};

	const pokemonList = new PokemonList({
		$app,
		initialState: this.state.monsters,
	});

	// 전체 state, 컴포넌트들의 state 변경
	this.setState = (newState) => {
		this.state = newState;
		pokemonList.setState(this.state.monsters);
	};

	const init = async () => {
		const response = await requestList(
			this.state.monsterType,
			this.state.searchWord
		);

		this.setState({
			...this.state,
			monsters: response.data,
		});
	};

	// 처음 접속 시 실행
	init();
}
