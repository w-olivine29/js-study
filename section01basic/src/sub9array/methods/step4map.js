// map 사용 전 =================================
let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = new Array(arr.length); // 실습 겸 길이를 정해서 생성해보았음

for (let i = 0; i < arr.length; i++) {
	newArr.push(arr[i] * 10);
}
console.log(newArr); //[ <7 empty items>, 10, 20, 30, 40, 50, 60, 70 ]
// 빈 슬롯을 그냥 둔 채 배열 끝에 추가 반복한 상황
// 의도대로 만들려면, 인덱스로 직접 접근하거나 splice로 빈슬롯 값을 수정

newArr = new Array(arr.length);
for (let i = 0; i < arr.length; i++) {
	newArr.splice(i, 1, arr[i] * 10);
}
console.log(newArr); //[ 10, 20, 30, 40, 50, 60, 70 ]

// map ======================================
//map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

newArr = arr.map((element) => {
	return element * 10;
});
// 위 같은 경우는 return문과 {} 생략 가능
console.log(newArr);
