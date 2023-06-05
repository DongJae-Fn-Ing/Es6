/*async, await */
/* Promise 문법을 더 깔끔하게 만드는 es8문법 */

async function 더하기() {
  /* return 1 + 1; */
  /* 여기에 리턴을 붙이면 */

  var 프로미스 = new Promise((성공, 실패) => {
    var 힘든연산 = 1 + 1;
    성공(100);
  });

  try {
    /* 이걸 해보고 에러가나면  */
    var 결과 = await 프로미스;
    console.log(결과);
  } catch {
    /* 얘를 실행해주세요 */
    console.log("실패");
  }
  /*   var 결과 = await 프로미스;
  console.log(결과); */
  /* 위 주석이랑 똑같은 코드 */
}

더하기();

/* 프로미스를 만드는 대신 함수 앞에 에이싱크를 붙인다 */
/* 그러면 위 함수에 프로미스 오브젝트가 남는다. */

/* 더하기().then((결과) => {
  console.log("에이싱크 성공!!!", "이렇게 결과를 받는다>>", 결과);
}); */

/* 단점 성공만 측정가능 */
/* 그러면 실패를 체크하려면? */
/* await를 사용 */
/* await은 프로미스가 해결할 때 까지 기다려줌 */
/* async function 안에서는 then 대신 await 사용 가능 */
/* await은 실패시 에러나고 멈춥니다 */
/* 자바스크립트 실패를 다루는 구문 try catch*/

/* 버튼을 누르면 성공 판정하는 Promise 만들기 성공시 성공했어요 출력 */

async function good() {
  var 프로미스 = new Promise((성공, 실패) => {
    성공();
  });
  try {
    await 프로미스;
    console.log("성공했어요");
  } catch {
    console.log("실패했어요!");
  }
}

let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", () => {
  good();
});
