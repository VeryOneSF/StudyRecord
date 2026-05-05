// =============================
// 스코프 (Scope)
// =============================

// Q1. 아래 코드의 출력 결과를 예측해보세요
let x = 1;

function outer() {
    let x = 2;

    function inner() {
        let x = 3;
        console.log(x);
    }

    inner();        // 3
    console.log(x); // 2
 }

outer();  // 3 2
console.log(x); // 1

// [답변] 3 2 1

// Q2. 아래 코드의 출력 결과를 예측해보세요
for (var i = 0; i < 3; i++) {} 
console.log(i);

for (let j = 0; j < 3; j++) {}
console.log(j);

// [답변] var는 전역으로 동작 : 3/ let은 중괄호 스코프로 동작 (j is not defined)
