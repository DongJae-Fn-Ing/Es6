/* constructor 용도 */
/* object를 복사하고 싶을 때 사용 */

var 학생1 = {
  name: "kar",
  age: 28,
  sayHi() {
    console.log(`안녕하세요 ${학생1.name} 입니다`);
    console.log("안녕하세요" + this.name + "입니다");
  },
};

학생1.sayHi();

/* constructor 함수를 작명할 때는 대문자가 관습이다. */
function Student(a, b) {
  this.name = a;
  /* 새로 생성되는 객체의 name값 */
  this.age = b;
  /* 새로 생성되는 객체의 age값 */
  /* 여기서 this는 Student() constructor를 통해 뽑히는 object */
  /* 즉 인스턴스 새로 생성되는 객체 */
  this.sayHi2 = function () {
    console.log("안녕하세요" + this.name + "입니다");
  };
}

var 학생2 = new Student("가", 28);
/* 이러면 이 자리에 object가 뽑힘 */
console.log("학생2:::", 학생2);
학생2.sayHi2();

/* 문제 풀이 */

function ShopSell(a, b) {
  this.name = a;
  this.price = b;
  this.부가세 = function () {
    console.log("물건값:::", this.price * 0.1);
  };
}

var 물건1 = new ShopSell("shirts", 50000);
var 물건2 = new ShopSell("pants", 60000);

console.log("물건1:::", 물건1);
console.log("물건2:::", 물건2);

물건1.부가세();
물건2.부가세();
