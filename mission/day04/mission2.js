//미션2. 생성자 함수
//동물의 종류와 소리를 인자로 받아 객체를 생성하는 Animal 생성자 함수를 작성해주세요
//makeSound 메서드를 추가하여 동물이 내는 소리를 출력하는 기능을 구현하세요.

function Animal(species, sound) {
	this.species = species;
	this.sound = sound;
	this.makeSound = () => {
		return `${species}가 ${sound} 소리를 냅니다.`;
	};
}

const dog = new Animal("개", "멍멍");
console.log(dog.makeSound());

const cat = new Animal("고양이", "야옹");
console.log(cat.makeSound());
