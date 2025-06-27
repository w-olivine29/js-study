const doll = {
	type: "cat",
	price: 15000,
};

const cheeseCat = {
	type: "cat",
	price: 15000,
	color: "yellow",
};

const grayCat = {
	type: "cat",
	price: 15000,
	color: "gray",
};

console.log("============================================");
//spread 적용

const cheeseDoll = {
	...doll,
	color: "yellow",
};

const grayDoll = {
	...doll,
	color: "gray",
};

console.log(cheeseDoll); //{ type: 'cat', price: 15000, color: 'yellow' }
console.log(grayDoll); //{ type: 'cat', price: 15000, color: 'gray' }
