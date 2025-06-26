let colors = ["tomato", "skyblue", "black"];

// 직접 인덱스로 접근하는 것과 같음
console.log(colors.at(1)); //skyblue

// at은 음수 인덱스를 지원 (뒤에서부터 접근할 때 사용)
console.log(colors.at(-1)); //black
console.log(colors.at(-2)); //skyblue
console.log(colors.at(-3)); //tomato
console.log(colors.at(-4)); //undefined
