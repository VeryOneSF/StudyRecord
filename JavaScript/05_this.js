// =============================
// this 바인딩
// =============================

// [개념 정리]
// this = 함수를 호출한 주체
//
// 1. 일반 함수 → this는 호출할 때 결정
//    obj.getName()     → this = obj
//    fn()              → this = undefined (strict) / 전역 (non-strict)
//
// 2. 화살표 함수 → this는 선언된 위치에서 결정 (호출과 무관)
//    객체 안에서 선언된 화살표 함수 → this = 전역 (객체는 스코프 없음)
//    함수 안에서 선언된 화살표 함수 → this = 바깥 함수의 this
//
// 3. 화살표 함수로 this 고정하는 패턴 (콜백에서 자주 사용)
//    setTimeout(() => { this.xxx }, 1000) → 바깥 this 그대로 사용


// Q1. 아래 코드의 출력 결과를 예측해보세요
const obj = {
    name: "철수",
    getName: function() {
        return this.name;
    }
};

console.log(obj.getName());       // 철수 

const fn = obj.getName;
console.log(fn());                //  undefined

// Q2. 아래 코드의 출력 결과를 예측해보세요
const obj2 = {
    name: "영희",
    getName: () => {
        return this.name;
    }
};

console.log(obj2.getName());      // undefined

// Q3. 코딩 문제
// 아래 timer 객체의 start()를 실행하면
// 1초 뒤에 "철수 시작!" 이 출력되어야 합니다
// this가 올바르게 동작하도록 고쳐보세요

const timer = {
    name: "철수",
    start: function() {
        setTimeout(() => { // 화살표 함수로 변경(화살표 함수는 렉시컬 스코프를 따르기 때문)
            console.log(this.name + " 시작!");
        }, 1000);
    }
};

timer.start(); 
