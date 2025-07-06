// 웹페이지의 핵심 기능들이 작성되어 있는 파일
// tab bar 모듈과  content 모듈을 가져와서 관리

import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

//index.html body태그 내 최상단 div 요소를 받아옴
export default function App($app) {
	// 초기 상태 값
	this.state = {
		currentTab: "all",
		photos: [],
	};

	// TabBar 컴포넌트
	const tabBar = new TabBar({
		$app,
		intialState: "",

		// 화살표함수는 선언된 위치의 상위 스코프 -> App의 this
		// 클릭되면 App의 state를 다시 세팅 -> 각 컴포넌트 state 다시 세팅
		onClick: async (name) => {
			this.setState({
				...this.state,
				currentTab: name,
				photos: await request(name == "all" ? "" : name),
			});
		},
	});

	// Content 컴포넌트
	const content = new Content({ $app, initialState: [] });

	// 호출되면 App의 state를 다시 세팅 -> 각 컴포넌트 state 다시 세팅, 재랜더링
	this.setState = (newState) => {
		this.state = newState;
		tabBar.setState(this.state.currentTab);
		content.setState(this.state.photos);
	};

	const init = async () => {
		try {
			const initialPhotos = await request();
			this.setState({
				...this.state,
				photos: initialPhotos,
			});
		} catch (err) {
			console.log(err);
		}
	};

	init();
}
