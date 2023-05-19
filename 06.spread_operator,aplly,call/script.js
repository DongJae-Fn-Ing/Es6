/* ... 이런식으로 쓰면 스프레이드 오퍼레이터 */
/* ...spread_operator 스프레이드 오퍼레이터란 
뭔가 내용물을 빼고 싶을 떄 쓰시면 됩니다.
*/

/* 기능 */
/* 1. array에 붙이면 대괄호를 제거해줍니다 */
/* 2. 문자에 붙이면 펼쳐줍니다. */

var 어레이 = ["hello", "world"];

console.log(...어레이);
/* 이러면 hello world 출력 */

var 문자 = "hello";
console.log(...문자);
/* h e l l o */
/* 문자도 array 처럼 인덱싱이 가능합니다 */
console.log(문자[0]);
console.log(문자[1]);
console.log(문자[2]);
console.log(문자[3]);
console.log(문자[4]);

/* 어디에 쓰면 좋을까? */

var a = [1, 2, 3];
var b = [4, 5];

var c = [...a, ...b];
console.log("array 합치기:::", c);
/* 1. array 합치기/복사 */

var a2 = [1, 2, 3]; /* a2에 있는 값을 */
var b2 = [...a2];
/* b에서 복사하고 싶음 그래서 a를 할당함 
var b2 = a2; 그러나 이런식으로 복사하면 문제가 생김
위처럼 등호로 복사를 하면 값을 공유함 a2랑 b2가
각각 독립적인 값을 갖게 하고 싶으면
위처럼 하면 됩니다.
*/

console.log("array deep copy:::", b2);
/* 2. deep copy*/

/* array랑 object를 복사하려면 할당하지말고 .. */

/* 2. object 합치기/복사 */

var o1 = { a: 1, b: 2 };
var o2 = { ...o1, c: 3 };

console.log("객체 합치기:::", o2);

/* 즉 대괄호 중괄호 합치기 다 가능 */

var o3 = { a: 1, b: 2, c: 3 };
var o4 = { a: 2, ...o3 };
/* 값이 중복될 경우 가장 뒤에 온 값을 따른다 */

console.log("object deep copy:::", o3);

/* 3. 함수 파라미터 넣을 때 */
var sum = [10, 20, 30];

function 더하기(a, b, c) {
  console.log(a + b + c);
}
더하기(1, 2, 3);
더하기(...sum);

/* 옛날 방식 */
더하기.apply(undefined, sum);

/* .apply 어플라이, call 콜*/

/* apply란 */

var person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

person.인사();

var person2 = {
  name: "동재",
};

person.인사.apply(person2, [1,2]);
/* 위에 함수가 aplly() 안에 적용되서 실행이된다 */
/* , 옆에 파라미터 넣을 수 있다 배열 형식으로 */
/* 더하기.apply(undefined, sum); 그래서 이렇게 씀*/


/* call은 aplly랑 같지만 */
person.인사.call(person2, 1,2);
/* call은 배열형식으로 파라미터 못 넣음 */