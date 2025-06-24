console.log("\n[if문]");

let num = 5;

if (num < 10) {
  console.log("num은 10보다 작습니다.");
}

//=============================================
console.log("\n[if-else문]");

num = 10;
if (num < 10) {
  console.log("num은 10보다 작습니다.");
} else {
  console.log("num은 10 크거나 같습니다.");
}

//============================================
console.log("\n[중첩 조건문]");
if (num < 10) {
  console.log("num은 10보다 작습니다.");
} else {
  if (num > 10) {
    console.log("num은 10보다 큽니다.");
  } else {
    console.log("num은 10과 같습니다");
  }
}
// 가독성이 좋지 않다.

//============================================
console.log("\n[else if문]");
if (num < 10) {
  console.log("num은 10보다 작습니다.");
} else if (num > 10) {
  console.log("num은 10보다 큽니다.");
} else {
  console.log("num은 10과 같습니다");
}

//===============================================
console.log("\n[swtich case문]");

let fruit = "apple";

switch (fruit) {
  case "grape":
    console.log("포도입니다.");
    break;

  case "durian":
    console.log("하수구입니다.");
    break;

  case "apple":
    console.log("사과입니다.");
    break;

  default:
    console.log("목록에 없는 과일입니다.");
}
