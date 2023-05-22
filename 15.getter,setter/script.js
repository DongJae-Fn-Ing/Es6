/* getter,setter */

var 사람 = {
  name: "Kim",
  age: 30,
  nextAge() {
    return this.age + 1;
  },
  /* 왜 굳이 이렇게 함수를 만들어 오브젝트 데이터를 다룰까? 데이터의 무결성을 위해 */
  /* 1.object 자료가 복잡할 때 다루기 편함 */
  /* 2.object 자료 수정시 실수를 방지할 수 있고 편리하다. */
  /* 3.데이터 수정시 미리 검사 가능 */
  setAge(num) {
    return (this.age = num);
  },
};

console.log("넥스트", 사람.nextAge());
console.log("셋", 사람.setAge(20));

/* es5부터는 쉽게 변경 가능하게 문법 생김 */

var 사람2 = {
  name: "Kim",
  age: 30,
  get nextAge() {
    /* get 데이터를 꺼내 쓸 때*/
    /* 전문용어로 getter */
    return this.age + 1;
  },
  /* 왜 굳이 이렇게 함수를 만들어 오브젝트 데이터를 다룰까? */
  /* 1.object 자료가 복잡할 때 다루기 편함 */
  /* 2.object 자료 수정시 실수를 방지할 수 있고 편리하다. */
  /* 3.데이터 수정시 미리 검사 가능 */
  set setAge(num) {
    /* set 이런식으로 데이터를 변경할 때*/
    /* 전문용어로 setter */
    return (this.age = parseInt(num));
  },
};
사람2.setAge = "20";
/* 이런식으로 데이터를 삽입 */

console.log("넥스트2", 사람2.nextAge);
console.log("셋2", 사람2);

/* get 함수들 (getter)들의 주의점 */
/* - retrun문이 무조건 있어야함 */

/* set 함수들 (setter)들의 주의점 */
/* 파라미터가 무조건 있어야 한다. */

/* class에서 가능 */

class 사람A {
  constructor() {
    this.name = "Park";
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(나이) {
    this.age = 나이;
  }
  /* 여기에다 getter setter를 만들면 됩니다. */
}

var 사람3 = new 사람A();
