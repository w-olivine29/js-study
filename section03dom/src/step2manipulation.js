let $name = document.getElementById("name");

$name.className = "cat-name"; // name -> cat-name

console.log($name);
console.log($name.className);

let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.id = "animal";

console.log($animalInfo);

// classList ==============================================

let $color = document.getElementById("color");
console.log($color.classList);

//클래스 이름을 변경하지 않고 전달한 요소를 기존 클래스 이름에 추가하는 형식
$color.classList.add("dog-color");
console.log($color.classList);

$color.classList.remove("info-item");
console.log($color);

// textContent ==============================================
let $age = document.getElementById("age");
$age.textContent = "5살";

console.log($age);

// style ==============================================

let colorElement = document.getElementById("color");
colorElement.style.color = "tomato"; //텍스트 컬러 변경
colorElement.style.fontSize = "50px";

console.log(colorElement);
