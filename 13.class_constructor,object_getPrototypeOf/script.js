/* class_constructor, object_getPrototypeOf */

class 부모 {
  constructor(/* 파라미터 넣는 자리 */) {
    this.name = "kim";
    this.sayHi = function () {
      console.log("안녕");
    };

    /* constructor() 안 여기에 함수가 추가되면 자식들이 값을 직접 가지고 */
  }
  sayHi2() {
    console.log("안녕2");
  }
  /* 여기에 가지면 부모의 prototype 즉 유전자에 들어가 자식들에가 상속이 된다 */
}
/* es6에서 콘스트럭터 만드는 */

var 자식 = new 부모();

console.log(자식);
자식.sayHi();

/* class에 함수를 추가하고 싶으면
constructor에 추가를 하던가
class 함수에 추가를 하던가


class 함수에 추가를 하면 부모.prototype에 추가됩니다.
*/

자식.__proto__;
/* 뭐가 나오지 */
/* 부모의 prototype */
console.log("부모의 프로토", 자식.__proto__);

/* Object.getPrototypeOf = 부모의 prototype 을 출력해주세요*/
Object.getPrototypeOf(자식);
console.log("Object.getPrototypeOf =", Object.getPrototypeOf(자식));

/* 객체 지향 문법을 왜 쓰니? */
/* object를 여러개 찍어 내고 싶을 때 */
