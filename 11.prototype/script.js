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

/* prototype 특징2 */
/* 함수에만 몰래 생성 */
/* 내 부모의 유전자(prototype)이 궁금할 때  검사하고 싶으면 
~~.__proto__*/

/* __proto__를 이용해 부모님 강제 등록 */

var 부모 = { name: "kar" };
var 자식 = {};
자식.__proto__ = 부모;

console.log("자식 이름:::", 자식.name);

/* constructor, prototype 문제 풀이 */

function Student(a, b) {
  this.name = a;
  this.age = b;
  this.sayHi1 = function () {};
  console.log("안녕 나는 " + this.name + " 이야");
}

var 학생a = new Student("kim", 20);
var 학생b = new Student("park", 21);
var 학생c = new Student("lee", 22);

function Parent() {
  this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log("내 답은 park:::", a.name);
/* 틀림 부모에 주는 거지 내가 가지고 있는 거 먼저 출력 */

function Student2(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
}

Student2.prototype.sayHi = () => {
  console.log("안녕 나는 " + this.name + "이야");
};
var 학생d = new Student2("Kim", 20);

학생d.sayHi();
/* arrow function은 최상단의 객체를. 가르킴 여기서는 윈도우 */

var arr2 = [1, 2, 3];

Array.prototype.remove3 = function () {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === 3) {
      this.splice(i, 1);
      i--;
    }
  }
};

arr2.remove3();

console.log(arr2); //[1,2]
