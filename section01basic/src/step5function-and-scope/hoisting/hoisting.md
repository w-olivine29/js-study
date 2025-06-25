# 호이스팅 - 변수

- 자바스크립트 엔진이 코드를 실행하기 전에 변수와 함수 선언을 메모리에 먼저 등록하는 것
  - 스코프 안에서 변수의 선언문을 최상단으로 끌어올리는 것

---

### 작성한 코드 & 실행결과

```javascript
console.log(coffee); //undefined
var coffee = "espresso";
```

```javascript
console.log(cake); //ReferenceError: Cannot access 'cake' before initialization
let cake = "cheeseCake";
```

---

### 자바스크립트 엔진이 해석한 코드 & 실행결과 원인

#### var

```javascript
var coffee; //변수의 선언문을 스코프의 최상단으로 끌어올림
console.log(coffee); //undefined
coffee = "espresso";
```

- 변수 선언 후 바로 해당 메모리 공간을 할당해준다. (선언 과 동시에 undefined 로 초기화)
- 초기화 된 상태이기때문에 에러발생x
- 값의 할당은 var 변수가 선언된 코드에 도달할때 일어남

---

#### let, const

```javascript
let cake; //변수의 선언문을 스코프의 최상단으로 끌어올림
console.log(cake); //ReferenceError: Cannot access 'cake' before initialization
cake = "cheeseCake";
```

- 변수 선언과 초기화가 다른 시점에 일어난다.
- let, const는 초기화 전까지는 메모리 공간 할당 x

- 변수의 초기화가 완료될때까지 변수의 선언문은 **TDG**(Temporal Dead Zone) 에 있다.

  - TDG: 변수를 사용하는 것을 허용하지 않는 공간이라 보면 된다.
