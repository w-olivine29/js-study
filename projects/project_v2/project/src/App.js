// 웹페이지의 핵심 기능들이 작성되어 있는 파일
// tab bar 모듈과  contetn 모듈을 가져와서 관리

import TabBar from "./components/TabBar";
import Content from "./components/Content";

// 컴포넌트를 생성자 함수를 활용해서 사용하면 편리하게 재사용 가능
export default function App($app) {
	const tabBar = new TabBar();
	const content = new Content();
}
