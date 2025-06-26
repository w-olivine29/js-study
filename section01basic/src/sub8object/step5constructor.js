// 생성자 함수
function Beverage(name, price, type) {
	this.name = name;
	this.price = price;
	this.type = type;
}

//클래스 방식
/* class Beverage {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
} */

let beverage1 = new Beverage("태양의식후비법w", 1500, "tea");
let beverage2 = new Beverage("고구마알밤차", 1500, "tea");

console.log(beverage1);
console.log(beverage2);

//생성자함수로 생성해도 프로퍼티 추가 & 삭제 가능
beverage1.make = "해태";
console.log(beverage1); //Beverage { name: '태양의식후비법w', price: 1500, type: 'tea', make: '해태' }

delete beverage1["make"];
console.log(beverage1); //Beverage { name: '태양의식후비법w', price: 1500, type: 'tea' }
