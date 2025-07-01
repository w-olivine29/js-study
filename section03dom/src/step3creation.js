// createElement: 새로운 노드요소 생성 가능

let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";

$type.textContent = "cheese";
console.log($type);

//별도의 텍스트 노드 생성
let $typeText = document.createTextNode("치즈");

console.log($typeText);

// 위 요소들은 아직 브라우저 화면에는 보이지 않음 (아직 DOM 트리에 추가되지 않음)

//===============================================================================
// appenChild(부모 노드에 새로 추가할 자식 노드)
// 부모노드를 작성 한 다음, 부모노드에 appenChild를 작성

// DOM 트리에 있는 요소를 가져온다 (부모가 될 노드)
let $animalInfo = document.querySelector("div.animal-info");

// $type 에 들어있는 요소를 DOM 트리에 추가 ($animalInfo 의 자식 노드가 된다)
$animalInfo.appendChild($type);

// $typeText 요소는 DOM 트리에 추가된 $type 요소의 자식노드가 된다.
$type.appendChild($typeText);
