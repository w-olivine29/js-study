// 모듈에서 내보내고자 하는 값이 한 개만 존재할 경우

// 선언문 앞에 default 키워드를 붙일 수도 있다
//주의: default 키워드는 const, let, var 키워드는 사용 불가
function User(name) {
	this.name = name;
}

export default User;
