## 타입스크립트 기본 타입

타입스크립트의 기본 타입이란 변수나 함수를 정의할 때 사용하는 기본 타입들을 의미한다.
기본 타입은 크게 다음 12가지가 있다.

- string
- number
- boolean
- object
- array
- tuple
- enum
- null
- undefined
- any
- void
- never

> : 를 이용하여 자바스크립트 코드에 타입을 정의하는 방식을 타입 표기(Type Annotation)라고 한다.

## 문자열(string)

```ts
let str: string = "hello";
```

## 숫자(number)

```ts
let num: number = 777;
```

## 진위(boolean)

```ts
let isToday: boolean = false;
```

## 객체(object)

```ts
let user: object = { name: "dong myeong", age: 30 };

//다만, 객체 타입은 위와 같이 정의하는 것보다 아래와 같이 인터페이스나 타입 별칭을 쓰는 것이 더 좋다.

type User = {
  name: string;
  age: number;
};

let user: User = { name: "dong myeong", age: 30 };
```

## 배열(array)

```ts
let arr: number[] = [1, 2, 3];

// or 아래와 같이 제네릭을 사용.

let arr: Array<number> = [1, 2, 3];
```

## 튜플(tuple)

튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미한다.

```ts
let arr: [string, number] = ["hi", 10];
// 만약 정의하지 않은 타입, 인덱스로 접근할 경우 오류가 발생.

arr[1].concat("!"); // Error, 'number' does not have 'concat'
arr[5] = "hello"; // Error, Property '5' does not exist on type '[string, number]'.
```

## 이넘(enum)

이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미한다.

```ts
enum Animal {
  Dog,
  Cat,
  Rabbit,
}

let dog: Animal = Animal.Dog;
console.log(dog); // 0
```

이넘은 또한 인덱스 번호로도 접근이 가능하다.

### 숫자 열거형 (Numeric enums)

```ts
enum Animal {
  Dog = 1,
  Cat,
  Rabbit,
}

let dog: string = Animal[1];
console.log(dog); // Dog
```

위 코드에서 Dog가 1 로 초기화된 숫자 열거형을 선언했다. 그 지점부터 뒤따르는 animal 들은 자동으로 증가된 값을 갖는다. 즉 Animal.Dog 은 1, Cat 은 2, Rabbit 은 3을 값으로 가지게 된다.

### 문자열 열거형 (String enums)

```ts
enum Animal {
  Dog = "DOG",
  Cat = "CAT",
  Rabbit = "RABBIT",
}

let Dog: Animal = Animal.Dog;
console.log(Dog); // DOG
```

문자열 열거형은 유사한 개념이지만 설명된 것과 같이 런타임에서 열거형의 동작이 약간 다르다. 문자열 열거형에서 각 멤버들은 문자열 리터럴 또는 다른 문자열 열거형의 멤버로 상수 초기화 해야 한다.

## any

any 타입은 모든 타입에 사용할 수 있는 타입이다. 특정 데이터의 타입을 잘 모르거나 자바스크립트 프로젝트에 타입스크립트를 점진적으로 적용할 때 보통 사용된다. 단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 있다.

```ts
let str: any = "hi";
let num: any = 10;
let arr: any = ["a", 2, true];
```

❗any 타입을 많이 사용하면 사용할수록 타입스크립트의 장점이 사라지기 때문에, 꼭 필요할 때만 주의해서 사용해야 한다.

## void

반환 값이 없는 함수의 반환 타입이다. 아래와 같이 return이 없거나 return이 있더라도 반환하는 값이 없으면 함수의 반환 타입을 void로 지정한다.

```ts
function printSomething(): void {
  console.log("반환값이 없습니다.");
}

function returnNothing(): void {
  return;
}
```

## never

never 타입은 절대 발생하지 않는 값을 의미하는 타입이다. 예를 들어, 함수가 반복문이나 에러 핸들링으로 인해 함수의 끝에 절대 도달하지 않는 경우에 never 타입을 사용할 수 있다.

```ts
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function loop(): never {
  while (true) {
    // ..
  }
}

function neverEnd(): never {
  throw new Error("unexpected");
}
```
