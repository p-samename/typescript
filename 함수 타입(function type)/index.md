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
