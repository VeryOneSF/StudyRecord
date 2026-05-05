// =============================
// 함수 (Function)
// =============================

// Q1. 아래 코드의 출력 결과를 예측해보세요
console.log(add(2, 3));

function add(a, b) {
    return a + b;
}

// Q2. 아래 코드는 에러가 날까요? 결과를 예측해보세요
console.log(multiply(2, 3));

const multiply = function(a, b) {
    return a * b;
}


// [답변]
// 1. 5 = 함수 호이스팅으로 정상적으로 실행 가능
// 2. ReferenceError => 함수가 변수에 선언된 형태로 호이스팅할 때 변수만 호이스팅이 되기 때문에 함수를 호출하면 에러 발생