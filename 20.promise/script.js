/*promise */
/* 코드 디자인 패턴 */

var 프로미스 = new Promise(function (
  성공 /* resolve 보통은 성공 이렇게 작명 */,
  실패 /* reject 보통은 실패 이렇게 작명 */
) {
  /* 아래처럼 함수를 실행해하면 */
  /* 성공(); 성공판정내림 */
  /* 실패(); 실패판정내림 */
});
/* promise는 성공/실패 판정 기계 */

프로미스
  .then(function () {
    /* 프로미스가 성공일 경우 첫번째로 코드를 실행해주세요 */
  })
  .then(function () {
    /* 첫번째가 성공일 경우 실행할 두번째 코드를 실행해주세요 */
  })
  .catch(function () {
    /* 실패시 여기 실행해주세요 */
  });

/* .finally도 있다. 성공이든 실패든 다 끝내고 실행 */

var 프로미스2 = new Promise(function (성공, 실패) {
  var 어려운연산 = 1 + 1;
  성공(/* 여기에 파라미터를 넣으면 */ 어려운연산);
});

프로미스2
  .then(function (결과) {
    /* 여기까지 성공에서 넣었던 파라미터가 전달이 된다. */
    console.log("성공했어요!", "성공결과:::", 결과);
  })
  .catch(function () {
    console.log("실패했어요..");
  });

/* Promise를 쓰는 이유 */
/* 1. 콜백 대신 예쁜 코드 */
/* 2. 성공/실패의 경우에 맞춰 각각 다른 코드 실행 가능 */

var 프로미스3 = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공();
  }, 1000);
});

프로미스3
  .then(function () {
    console.log("예시3 성공");
  })
  .catch(function () {
    console.log("예시3 실패");
  });

/* Promise 3가지 상태 */
/* 1. 성공하면 Promise 상태가 <resolved> */
/* 2. 성공 실패 판정을 안한 상태면 Promise 상태가 <pending> */
/* 3. 실패하면 Promise 상태가<rejected> */

/*   Promise 오해 */
/* 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아님 */
/* 그냥 콜백함수 디자인의 대체품임 */


/* Promise 적용된 곳들 */
/* 제이쿼리 에이잭스 jQuery.ajax() */
/* 자바스크립트 fetch() */
/* fetch()를 사용하면 그 자리에 Promise를 리턴함 */ 
/* fetch().then().catch() */