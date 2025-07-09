// 경로에서 파일확장자까지 적지 않으면 text/html 로 응답됨 (엄격한 MIME 유형 검사)
import { requestList } from "./components/api.js";
import PokemonList from "./components/PokemonList.js";
import Header from "./components/Header.js";

// 일단 detail 페이지 고려하지 않고 구현
export default function App($app) {
	this.state = {
		monsterType: "",
		searchWord: "",
		monsters: [],
		currentPage: "list", //list or detail
	};

	const header = new Header({
		$app,
		currentPage: this.state.currentPage,
		moveMainPage: async () => {
			history.pushState(null, null, "/");

			const monsters = await requestList();

			this.setState({
				...this.state,
				monsterType: "",
				searchWord: "",
				currentPage: "list",
				monsters: monsters,
			});
		},

		searchMonster: async (searchWord) => {
			let pageUrl = "/";

			// 현재 타입 필터링 중이라면, 같이 포함해서 요청
			if (this.state.monsterType && this.state.monsterType !== "all") {
				pageUrl += `${this.state.monsterType}`;
			}
			pageUrl += `?search=${searchWord}`;

			history.pushState(null, null, pageUrl);

			const monsters = await requestList(this.state.monsterType, searchWord);

			this.setState({
				...this.state,
				monsterType: "",
				searchWord: "",
				currentPage: "list",
				monsters: monsters,
			});
		},
	});

	const pokemonList = new PokemonList({
		$app,
		initialState: this.state.monsters,
		handleMonsterType: async (monsterType) => {
			const pageUrl = `/${monsterType}`;
			history.pushState(null, null, pageUrl);

			//새로 불러와야함
			const monsters = await requestList(monsterType, this.searchWord);

			// state 업데이트
			this.setState({
				...this.state,
				monsterType: monsterType,
				monsters: monsters,
			});
		},
	});

	// 전체 state, 컴포넌트들의 state 변경
	this.setState = (newState) => {
		this.state = newState;
		pokemonList.setState(this.state.monsters);
		header.setState(this.state.currentPage);
	};

	const init = async () => {
		const response = await requestList(
			this.state.monsterType,
			this.state.searchWord
		);

		this.setState({
			...this.state,
			monsters: response,
		});
	};

	// 처음 접속 시 실행
	init();
}
