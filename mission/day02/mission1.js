//미션1. switch case문 작성하기

let animal = prompt("동물이름을 입력하세요");

switch (animal) {
  case "dog":
    console.log("개");
    break;

  case "tiger":
    console.log("호랑이");
    break;

  case "cat":
    console.log("고양이");
    break;

  case "lion":
    console.log("사자");
    break;

  default:
    console.log("목록에 없는 동물");
}
