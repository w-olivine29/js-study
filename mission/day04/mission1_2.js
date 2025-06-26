//아래와 같은 배열에서, 칼로리가 500 이상인 음식의 이름을 출력해주세요.
//반복문과 조건문을 사용하세요!

//시도2: for문 사용 x

let foods = [
	{ name: "Burger", calories: 800 },
	{ name: "Apple", calories: 52 },
	{ name: "Pizza", calories: 550 },
	{ name: "Salad", calories: 150 },
];

// 시도2_1: 이름만 필요하니까, filter가 아닌 map을 사용
let targetFoods = foods.map((food) => {
	if (food.calories >= 500) {
		return food.name;
	}
});

for (let foodName of targetFoods) {
	console.log(foodName);
}

/* map 출력 결과 (실패)
	Burger
	undefined
	Pizza
	undefined */

//map은 모든 요소에 대해 무언가 반환 => 조건 불만족 시 undefined 반환

//===================================================================

// 시도2_2: filter + map 조합
let result = foods
	.filter((food) => food.calories >= 500)
	.map((food) => food.name);

console.log(result); //[ 'Burger', 'Pizza' ]
