// =============================
// 클로저 (Closure)
// =============================

// Q1. 아래 코드의 출력 결과를 예측해보세요
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Q2. 코딩 문제
// makeMultiplier(n) 함수를 만들어보세요

// 아래처럼 동작해야 합니다
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15

// 여기에 작성하세요
// n을 받아서 "n을 곱하는 함수"를 반환해야 해요
function makeMultiplier(n) {
    return function(num) {
        return num * n 
    }
}