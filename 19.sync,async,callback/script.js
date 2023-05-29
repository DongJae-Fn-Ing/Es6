/* 19.sync,async,callback */

/* 자바스크립트는 동기식 처리 synchronous(싱크로노즈) */
/* 동기식 처리랑 위에서 아래로 실행 */
/* 한번에 한줄식 실행 */
/* 병렬 처리가 가능하다? ㄴㄴ */

/* 싱크  */
console.log(1);
console.log(2);
console.log(3);

/* 싱크로노즈와 반대되는 개념도 있다. asynchronous(에이 싱크로노즈) 비동기식처리*/

/* 에이싱크*/
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
console.log(3);

/* 여기서 setTimeout 자바스크립트가 비동기식 처리를 도와주는 함수 */
/* addEventListener ajax 같은 것이 비동기식 처리 작업 */
/* 엄밀히 따지면 자바스크립트를 실행하는 브라우저 덕분에 가능
= 오래 걸리는 작업이 있으면 제껴두고 다른 것 부터 처리하는 방식 */

/* 자바스크립트 특징중 하나가 web api 덕분에 오래 걸리는 작업이 있으면
블로킹 없이 제껴두고 다른 것 부터 처리하는 비동식 처리 가능 */

/* setTimeout(function () {
  console.log(2);
}, 1000); */
/* 여기서 자바스크립트 비동기식 처리를 하려골 할 때 콜백 함수 안에 집어 넣고 실행을 합니다 */
/* 콜백함수는 순차적으로 실행하는 함수 
그냥 함수 안에 들어가는 함수
*/

function 첫째함수(구멍) {
  console.log("첫째");
  구멍();
}
function 둘째함수() {
  console.log("둘째");
}

첫째함수(둘째함수);

/* 콜백함수는 디자인 패턴입니다. */

/* 콜백함수의 문제점 */
/* 첫째함수(function () {
  둘째함수(function () {
    셋째함수(function () {});
  });
}); */
/* 이런식으로 계속 중첩적으로 사용이 문제임 */
/* 그래서 나온게 Promise 패턴 */

/* 첫째함수()
  .then(function () {})
  .then(function () {});
이런식으로 작성하는 게 Promise */
