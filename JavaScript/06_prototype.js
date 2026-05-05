// =============================
// 프로토타입 (Prototype)
// =============================

// [개념 정리]
// 모든 JS 객체는 __proto__ 라는 숨겨진 링크를 가지고 있음
// 이 링크가 부모 객체(프로토타입)를 가리킴
//
// dog.speak() 를 찾는 순서 (프로토타입 체인)
//   1. dog 객체 안에 speak 있나? → 없음
//   2. dog.__proto__ (Animal.prototype) 에 speak 있나? → 있음! 실행
//   3. 거기도 없으면 → Object.prototype 까지 올라감
//   4. 끝까지 없으면 → undefined
//
// hasOwnProperty → 프로토타입 체인 무시하고 "내가 직접 갖고 있냐"만 확인
//   this.name = name  → dog가 직접 갖고 있음 → true
//   prototype.speak   → dog가 직접 갖고 있지 않음 (프로토타입에 있음) → false
//
// class 문법은 프로토타입의 포장지
//   class Cat { speak() {} }  →  Cat.prototype.speak = function() {} 와 동일
//   그래서 cat.hasOwnProperty("speak") = false (cat이 직접 갖고 있지 않음)
//
// new   = 인스턴스를 클래스에 연결 (dog → Animal.prototype)
// extends = 클래스를 다른 클래스에 연결 (Dog.prototype → Animal.prototype)
// super = 부모 클래스를 직접 호출할 때 사용


// =============================
// 기초 문제
// =============================

// Q1. 아래 코드의 출력 결과를 예측해보세요
function Animal(name) {
    this.name = name; // dog가 직접 갖는 속성
}

Animal.prototype.speak = function() { // dog가 직접 갖지 않고 프로토타입에 있음
    return this.name + " 말함";
}

const dog = new Animal("강아지");
console.log(dog.speak());                  // 강아지 말함
console.log(dog.hasOwnProperty("name"));   // true  → dog가 직접 갖고 있음
console.log(dog.hasOwnProperty("speak"));  // false → Animal.prototype에 있음

// Q2. 아래 코드의 출력 결과를 예측해보세요
class Cat {
    constructor(name) {
        this.name = name; // cat이 직접 갖는 속성
    }
    speak() { // Cat.prototype.speak 에 저장됨 (cat이 직접 갖지 않음)
        return this.name + " 야옹";
    }
}

const cat = new Cat("고양이");
console.log(cat.speak());                  // 고양이 야옹
console.log(cat.hasOwnProperty("name"));   // true  → cat이 직접 갖고 있음
console.log(cat.hasOwnProperty("speak"));  // false → Cat.prototype에 있음

// Q3. 코딩 문제 - Animal을 상속받는 Dog 클래스
// extends → Dog.prototype.__proto__ = Animal.prototype 으로 연결
// 즉 dog에서 못 찾으면 → Dog.prototype → Animal.prototype 순으로 올라감
class Dog extends Animal {
    bark() {
        return this.name + " 멍멍!"
    }
}


// =============================
// 심화 문제
// =============================

// Q4. 아래 코드의 출력 결과를 예측해보세요
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return "안녕 나는 " + this.name;
}

const p = new Person("철수");
console.log(p.greet());                        // 안녕 나는 철수
console.log(p.hasOwnProperty("name"));         // true
console.log(p.hasOwnProperty("greet"));        // false
console.log(p.__proto__ === Person.prototype); // true


// Q5. 프로토타입 체인 순서 문제
// c.hello() 를 찾는 순서를 생각해보세요
class A {
    hello() { return "A"; }
}
class B extends A {
    hello() { return "B"; }
}
class C extends B {}

const c = new C();
console.log(c.hello()); // B


// Q6. super 키워드
// super = 부모 클래스를 직접 호출
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return this.name + " 말함";
    }
}

class Dog2 extends Animal2 {
    speak() {
        return super.speak() + " + 멍멍"; 
    }
}

const dog2 = new Dog2("강아지");
console.log(dog2.speak()); // 강아지 말함 멍멍


// Q7. 코딩 문제
// Shape 클래스를 만들고 Circle, Rectangle이 상속받게 해보세요
//
// Circle    → 반지름(radius)을 받아서 넓이 반환 (π * r * r, π = 3.14)
// Rectangle → 가로(width), 세로(height)를 받아서 넓이 반환


// 여기에 작성하세요
class Shape  {
    getArea(n) {
        throw new Error("getArea를 구현해야 한다.")
    }
}

// constructor의 역할: 인스턴스 생성 시에 받은 값을 this에 저장하는 것
// super의 역할
// 1. 부모 constructor 호출 (constructor 안에서만)
// 2. 부모 메서드 호출 => super.메서드
class Circle extends Shape {
    constructor(radius) {  
        super()
        this.radius = radius
    }

    getArea () {
        return this.radius * this.radius * 3.14
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width, this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

const circle = new Circle(5);
console.log(circle.getArea());     // 78.5

const rect = new Rectangle(4, 6);
console.log(rect.getArea());       // 24