var 변수이름 = "저장할 값";
/* 자료를 임시 저장하는 공간 */

let 이름 = "kim";
const asd = "kim";

/* 선언, 할당, 범위 */

var 변수이름 = "저장할 값";
var 변수이름 = "저장할 값2";
/* 재선언 */

/* var는 재선언, 재할당, 범위 function 가능 */

/* let과 const는 재선언 불가능 */

let name = "이름";
name = "안녕";
/* let 재할당은 가능 */

/* const 재할당 재선언은 불가능 */

/* 객체를 변수에 사용해서 사용할 때 */
const 사람 = { 이름: "kim" };
/* 변수 안에 담은 객체의 값을 재할당 하는 경우 const라도 오류가 안남 */
/* 변수 안의 값을 변경한거지 변수를 재할당 한 것 이 아님 */
/* 만약에 수정 불가능한 객체를 만들고 싶은 경우 */
/* object.freeze(객체명); 이거써라*/

/* 변수의 범위 */

function 함수() {
  var 이름 = "kim";
  /* 함수 안에서만 사용 */
  /* 함수 밖에서 못 찾음 */
  이름;
}

/* let ,const의 변수 범위는 {} */

/* 변수 hoisting */

var 나이 = 30;

/* 실질적으로
var 나이 이 부분을 선언한 부분 맨위로 */
/* 선언한 부분에 할당을 해준다
나이 = 30; */
/* 함수도 마찬가지 */

var 나이 = 20,
  성별 = "남";

/* 전역변수 모든 곳에서 쓸 수 있는 함수 */

function 함수() {
  console.log(나이);
}

함수();

window.이름 = "kim";

for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

var 버튼들 = document.querySelectorAll("button");
var 모달창들 = document.querySelectorAll("div");

for (let i = 0; i < 3; i++) {
  버튼들[i].addEventListener("click", function () {
    모달창들[i].style.display = "block";
  });
}


/* 선언만 호이스팅 */