/* rest 파라미터 */

function 함수2(...파라미터들) {
  /* 스프레이트 오퍼레이터 같은 ...을 파라미터 옆에 작성하면 rest 파리미터임 */
  console.log(파라미터들);
  /* 즉 파라미터들을 어레이로 감싸 */
}

함수2(0, 1, 2, 3, 4, 5);

function 함수3(a, b, ...파라미터들) {
  /* 스프레이트 오퍼레이터 같은 ...을 파라미터 옆에 작성하면 rest 파리미터임 */
  console.log(파라미터들);
  /* 즉 파라미터들을 어레이로 감싸 */
}
함수3(0, 1, 2, 3, 4, 5);
/* arguments와 차이점은 모든 파라미터를 []로 감싸주지만 */
/* rest parameter는 ... 자리에 오는 파라미터를 배열로 감싸줌 */

function 함수4(...파라미터들) {
  for (var i = 0; i < 파라미터들.length; i++) {
    console.log("rest parameter:::", 파라미터들[i]);
  }
}

함수4(0, 1, 2, 3, 4, 5);

/* rest parameter주의점 
1. 가장 뒤에 써야 한다.
2. 두번이상 사용 금지
*/

/* 문제풀이 */

var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log("내답:::김,밥,1,2,3", c);
/* 내답 [김밥,1,2,3] */

var a2 = [1, 2, 3];
var b2 = ["you", "are"];
var c2 = function (a, b) {
  console.log([[...a], ...[...b]][1]);
  console.log("2번 답::: you");
};
c2(a2, b2);

function 함수a(a = 5, b = a * 2) {
  console.log(a + b);
  console.log("9");
  return 10;
}
함수a(3);

function 함수b(a = 5, b = a * 2) {
  console.log(a + b);
  console.log("내답::: 15");
}
함수b(undefined, undefined);

function 어레이() {
  console.log("답", arguments);
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);

var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];

function big(a) {
  console.log("제일큰거?", Math.max(...a));
}

/* 함수를 선언할 땐 ...은 rest 파라미터
함수를 사용할 땐 ...은 spread 연산자 입니다.  */

big(numbers);

function 정렬([...a]) {
  console.log("답", a.sort());
}

정렬("bear");

function 글자세기([...a]) {
  var test = {};
  a.forEach((e) => {
    test[e] = (test[e] || 0) + 1;
  });

  console.log(test);
}

글자세기("aacbbb");
