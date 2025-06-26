//아래와 같은 배열에서, 칼로리가 500 이상인 음식의 이름을 출력해주세요.
//반복문과 조건문을 사용하세요!

//시도1: for of문 사용 -> 새로운 배열에 push
let foods = [
	{ name: "Burger", calories: 800 },
	{ name: "Apple", calories: 52 },
	{ name: "Pizza", calories: 550 },
	{ name: "Salad", calories: 150 },
];

let targetFoodNames = [];

for (let food of foods) {
	if (food.calories >= 500) {
		targetFoodNames.push(food.name);
	}
}

console.log(targetFoodNames);
