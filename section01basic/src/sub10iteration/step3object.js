let person = {
	name: "사람1",
	age: 30,
	height: 163,
};

//객체의 키들을 배열 형태로 반환
let keys = Object.keys(person);
console.log(keys); //[ 'name', 'age', 'height' ]

//프로퍼티 순환

// key 순환
for (let i = 0; i < keys.length; i++) {
	let key = keys[i];
	console.log(`key: ${key}, value: ${person[key]}`);
}

// value 순환
let values = Object.values(person);
values.forEach(function (value) {
	console.log(value);
});

// entry(key:value) 순환
let entries = Object.entries(person);

for (let i = 0; i < entries.length; i++) {
	console.log(`key: ${entries[i][0]}, value: ${entries[i][1]}`);
}

console.log();

entries.forEach((entry) => {
	console.log(`key: ${entry[0]}, value: ${entry[1]}`);
});
