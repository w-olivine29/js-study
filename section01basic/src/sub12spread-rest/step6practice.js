const print = (a, b, c, d, e) => {
	console.log(a, b, c, d, e);
};

const nums = [1, 2, 3, 4, 5];

// spread 적용 전
print(nums[0], nums[1], nums[2], nums[3], nums[4]); //1 2 3 4 5

//spread 적용
print(...nums); //1 2 3 4 5

//spread 미적용 시
print(nums); //[ 1, 2, 3, 4, 5 ] undefined undefined undefined undefined

console.log("============================================================");
//rest 적용

const print2 = (...nums) => {
	console.log(nums);
};

print2(...nums); //1 2 3 4 5
