function 더하기(a, b) {
  console.log("더하기1:::", a + b);
}

더하기(1, 2);
/* 자바스크립트 특징 */
/* 파라미터가 두개가 들어가는 함수에 하나의 파라미터만 들어가도 오류가 안남 */

function 더하기2(a, b = 10) {
  console.log("더하기2 디폴트 파라미터:::", a + b);
}

더하기2(1);

/* default_parameter */
/* function 더하기(a, b = 10)
b 자리에 아무 것도 안 넣으면 이런식으로 기본 파라미터 값을 만들 수 있다 
*/

/* 수학 연산도 가능 */
function 더하기3(a, b = a * 2) {
  console.log("더하기3 연산 파라미터:::", a + b);
}

더하기3(1);

/* 함수 가능 */

function 임시함수() {
  return 10;
}

임시함수();

function 더하기4(a, b = 임시함수()) {
  console.log("더하기4 함수 파라미터:::", a + b);
}

더하기4(1);
/* 이럴 경우 파라미터 안넣었을 경우 발동 */

/* 함수 알규먼트 arguments */

function 함수(a, b, c) {
  console.log("알규먼트라 불러요:::", a, b, c);
  /* 예는 arguments 라 부름 */

  console.log("파라미터를 한번에 다룰 때는 arguments::: ", arguments);
  /* arguments를 사용하여 파라미터를 부르면 파라미터를 array로 감싸줌 */
}

함수(1, 2, 3);

function 함수2(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log("arguments 하나씩 출력:::", arguments[i]);
  }
}

함수2(1, 2, 3);
