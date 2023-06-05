/* map,set */

/* map 자료형 
오브젝트랑 똑같이 key, value를 저장한다. */

var person = new Map();
person.set("name", "kim");
person.set([1, 2, 3], "www");
person.set("age", 20);
/* 이거 콘솔 창에 찍어보면 */
/* : 대신 =>가 있다 */
/* 맵자료형은 자료간의 연관성을 표현하기 위해 씁니다 */
/* 자료형의 이름은 아무거나 넣을 수 있다. */

/* 자료 출력법 */
person.get("age");
/* 자료 삭제법 */
person.delete("age");
/* 자료 세는법 */
/* person.size */

//Map자료 반복문 돌리기
for (var key of person.keys()) {
  console.log(key);
}

//자료를 직접 집어넣고 싶으면

var person = new Map([
  ["age", 20],
  ["name", "Kim"],
]);

/* set 자료형 */
/* set 자료형 이란? 중복자료를 허용하지 않는 array 비슷한 것 */
/* 중복값을 제거함 */

var 출석부2 = new Set(["john", "tom", "andy", "tom"]);
console.log(출석부2);

/* set.add(); */
/* 값을 추가 가능 */
/* set.delete(); */
/* 값을 제거 */
/* set.has(); */
/* 값을 찾음 */
/* set.size(); */
/* 값의 길이 */

var 출석부 = ["john", "tom", "andy", "tom"];
var 출석부3 = new Set(출석부);
출석부 = [...출석부3];

/* 이런 패턴으로 많이 합니다.
위의 예제는 출석부라는 Array자료형을 Set으로 바꿨다가 다시 바로 Array로 바꾸는 예제입니다.
그럼 이제 출석부에 있던 중복자료들이 자동으로 제거가 됩니다. 
편리하죠? */
