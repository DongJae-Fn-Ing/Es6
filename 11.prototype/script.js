/* prototype
자바스크립트만 있는 개념 */

/* 전 시간에 만들었던 constructor만들면 자동으로 prototype을 만들어준다. */

/* prototype 즉 유전자 */
/* prototype에 값을 추가하면 모든 값을 물려 받을 수 있다 */

function Student(a, b) {
  this.name = a;
  this.age = b;
  this.sayHi2 = function () {
    console.log("안녕하세요" + this.name + "입니다");
  };
}

var 학생2 = new Student("가", 28);

Student.prototype.gender = "남";
/* 이런식으로 키와 프로퍼티를 부여하고 상속을 구현할 수 있다. */

console.log("프로토타입:::", Student.prototype);
console.log("학생2:::", 학생2.gender);

/* prototype의 원리 */

/* 학생2.gender 출력을 한다면 */
/* 학생2가 직접 gender 가지고 있는가 */
/* 만약에 없으면 */
/* 학생2의 부모 유전자를 검사 학생의 부모에게 gender 가지고 있니?*/
/* 그러면 실행 */

/* 내장함수는 왜 실행이 되는가? */

학생2.toString();
/* 학생2가 toString() 유전자를 가지고 있는가? */
/* 없으면 그 부모가 toString() 유전자를 가지고 있는가? */
/* 없으면 그 부모의 부모가 toString() 유전자를 가지고 있는가? */
/* 결국 부모 위에 부모 등등 중에 내장함수 값이 있어서 실행이 되는 거임 */

/* 예 */
/* 아래 변수에 배열을 선언하는 것이랑 */
var arr = [1, 2, 3];

/* 이거랑 같다 */
/* 실제 컴퓨터가 배열을 만드는 방식 */
var arr = new Array(1, 2, 3);
arr.sort();
/* 이런식으로 쓸 수 있는 이유는 arr의 부모에 sort를 가지고 있기 때문 */
/* arr에 sort가 있어? 없어*/
/* arr 부모에 sort가 있어?*/

console.log("arr 부모에 내장함수::", Array.prototype);
/* 이런식으로 보면 안에 내장함수가 들어있다 */

/* 객체도 마찬가지 */
var obj = { name: "kar" };
var obj = new Object();
