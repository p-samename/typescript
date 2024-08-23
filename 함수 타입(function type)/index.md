## 타입스크립트에서의 함수

TypeScript에서 함수는 JavaScript 함수와 비슷하지만, 함수의 매개변수와 반환값에 대해 타입을 지정할 수 있는 특징이 있다. 타입을 지정함으로써 코드의 안정성과 가독성이 향상된다.

### 함수 선언과 타입 지정

1 . 기본 함수 선언

TypeScript에서는 함수의 매개변수와 반환값에 타입을 지정할 수 있다.

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message = greet("dong myeong");
console.log(message); // Hello, dong myeong!
```

- name: string: name 매개변수는 string 타입이어야 한다는 것을 지정한다.
- : string: 함수가 string 타입의 값을 반환한다는 것을 지정한다.

2 . 매개변수의 기본값 지정

TypeScript에서는 매개변수에 기본값을 지정할 수 있다.

```ts
function greet(name: string = "User"): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // 출력: Hello, User!
console.log(greet("dong myeong")); // 출력: Hello, dong myeong!
```

- 이 함수는 name이 주어지지 않았을 때 기본값으로 "User"를 사용한다.

3 . 선택적 매개변수(Optional Parameters)

선택적 매개변수는 전달되지 않을 수도 있는 매개변수를 의미한다. 선택적 매개변수는 타입 뒤에 ?를 붙여서 표시한다.

```ts
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, User!";
  }
}

console.log(greet()); // 출력: Hello, User!
console.log(greet("dong myeong")); // 출력: Hello, dong myeong!
```

- name?: string: name 매개변수는 옵셔널로 사용할 수 있으며, 전달되지 않을 수도 있다.

4 . 익명 함수와 화살표 함수

TypeScript에서도 익명 함수와 화살표 함수를 사용할 수 있다. 타입은 동일하게 지정이 가능하다.

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(3, 5)); // 출력: 8
```

- 이 예시에서 a: number, b: number는 함수의 매개변수 타입을 지정하며, : number는 함수가 number 타입의 값을 반환한다고 지정한다.

5 . 가변 인자(Rest Parameters)

가변 인자를 사용하여 함수가 여러 개의 인자를 받을 수 있도록 할 수 있다.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 출력: 6
console.log(sum(10, 20, 30, 40)); // 출력: 100
```

- ...numbers: number[]: 이 함수는 여러 개의 number 타입 인자를 받아서, 이를 배열로 처리한다.
- breduce 메서드를 사용해 배열의 모든 값을 더한 후 반환한다.

### 함수 타입을 인터페이스나 타입으로 정의

함수의 타입을 정의하여 재사용할 수 있다. 인터페이스나 타입 별칭을 사용해 함수 타입을 정의할 수 있다.

```ts
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => a / b;

console.log(multiply(4, 5)); // 출력: 20
console.log(divide(10, 2)); // 출력: 5
```

- type MathOperation = (a: number, b: number) => number: MathOperation이라는 타입을 정의하여, 두 개의 number를 받아 number를 반환하는 함수임을 명시한다.
- 이 타입을 사용해 multiply와 divide 함수를 정의한다.
