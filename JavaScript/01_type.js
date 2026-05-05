// =============================
// 타입 (typeof)
// =============================

// Q. 아래 결과를 예측해보세요
console.log(typeof null);         // "object" ← JS 버그, null인데 object로 잘못 분류됨
console.log(typeof undefined);    // "undefined"
console.log(typeof []);           // "object"
console.log(typeof {});           // "object"
console.log(typeof function(){}); // "function"

// null, 배열은 typeof로 구분 불가 
Array.isArray([]);  // true  ← 배열 확인
null === null;      // true  ← null 확인


