// 인덱스 접근 ================================================
let arr = [1, "js", null];

console.log(arr[0]); //1
console.log(arr[1]); //js
console.log(arr[2]); //null

let fruits = ["살구", "대추", "사과"];

// [마지막 위치] - 추가 & 삭제 ===========================================================
fruits.push("대추야자"); // 마지막 위치에 추가
console.log(fruits); //[ '살구', '대추', '사과', '대추야자' ]

fruits.pop(); // 마지막 요소 삭제
console.log(fruits); //[ '살구', '대추', '사과' ]

// [첫번째 요소] - 추가 & 삭제 =============================================================
fruits.unshift("대추야자"); // 첫번째 위치에 추가
console.log(fruits); //[ '대추야자', '살구', '대추', '사과' ]

fruits.shift(); //첫번째 요소 삭제
console.log(fruits); //[ '살구', '대추', '사과' ]

// [특정위치]  ===============================================================
let animals = ["호랑이", "눈표범", "마눌고양이"];
animals = ["호랑이", "치타", "마눌고양이"]; //animals 변수에 새로운 배열로 재할당 (const로 선언했다면 재할당 불가)

//특정인덱스의  요소 수정
animals[2] = "삵";
console.log(animals); //[ '호랑이', '치타', '삵' ]

// splice(startIdx, deleteCnt, ...addItems ) ======================
console.log("\n==== splice() ====");
console.log(animals);

//마지막 위치 추가
animals.splice(animals.length, 0, "고양이");
console.log('animals.splice(animals.length, 0, "고양이") =>' + animals); // 호랑이,치타,삵,고양이

//마지막 위치 삭제
animals.splice(animals.length - 1, 1);
console.log("animals.splice(animals.length- 1, 1) => " + animals); // 호랑이,치타,삵

//수정
animals.splice(1, 2, "스라소니");
console.log('animals.splice(1, 2, "스라소니") =>' + animals); //호랑이,스라소니
