/* extends,super */

/* extends는 class 복사(상속)하는 문법 */ 4;

class 할아버지 {
  constructor(name) {
    this.성 = "kim";
    this.이름 = name;
  }
  sayHi() {
    console.log("안녕 저는 할아버지에요");
  }
}

var 할아버지1 = new 할아버지("만덕");

/* 할아버지 속성을 그대로 받아서 아버지 클래스를 만들고 싶다 */

class 아버지 extends 할아버지 {
  constructor(/* 부모파라미터가 들어와야함 */ name) {
    /* this.나이 = 50; */
    /* 이거 오류남 와이? */
    /* extends를 사용헤서 만든 class는 바로 this 사용못함 */

    /* 사용하고 싶으면 */
    super(/* 부모파라미터가 들어와야함 */ name); // constructor 안에서 super를 쓰면 부모 constructor랑 같음 즉 부모 constructor를 넣어주세요
    this.나이 = 50;
  }
  sayHi() {
    console.log("안녕 저는 아버지에요");
    super.sayHi();
    /* 여기서 super는 부모 프로토타입  즉 부모에게 각인이 된 sayhi를 출력 그래서 할아버지에요 출력*/
  }
}

var 아버지1 = new 아버지("만수");
console.log(아버지1);
/* 그러나 여기에 아버지1.name이 undefined가 뜰 거임 */
/* 와이? new 아버지()에 파라미터 값을 아무것도 안넣어서 */

/* 할아버지를 extends해서 */
아버지1.sayHi();
/* 가능 */
