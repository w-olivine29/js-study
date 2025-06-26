let arr = ["lime", "blueberry", "grape", "banana"];

// 문자열 기본정렬(사전 순, 오름차순)
arr.sort();
console.log(arr); //[ 'banana', 'blueberry', 'grape', 'lime' ]

// compare 함수  - a기준으로 반환 (-1은 앞, 1은 뒤)
arr.sort((a, b) => {
	return a > b ? -1 : a < b ? 1 : 0; //내림차순 (a가 크면 앞으로 온다)
});
console.log(arr);

// 숫자정렬================================================
let nums = [1, 5, 7, 0, 3, 10, 2, 2];

const descComparator = (a, b) => {
	return a > b ? -1 : a < b ? 1 : 0;
};

//내림차순
nums.sort(descComparator);
console.log(nums); //[10, 7, 5, 3, 2, 2, 1, 0]

//오름차순 [함정카드 발동]  ====================
nums.sort(); //기본정렬(오름차순) 예상
console.log(nums); //0, 1, 10, 2, 2, 3, 5, 7 => ??????

// Js의 기본 sort()는 숫자가 아닌 문자열로 변환 후 사전식 정렬
// 문자열 외 타입 정렬 시 compare 함수 필수
//=========================================

const ascCompare = (a, b) => {
	return a - b;
};

const descCompare = (a, b) => {
	return b - a;
};

nums.sort(ascCompare);
console.log(nums);

nums.sort(descCompare);
console.log(nums);
