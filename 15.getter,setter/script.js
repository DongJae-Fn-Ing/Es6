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

/* 문제 풀이 */

/* 아래 오브젝트를 만드는 class 만들어라 */
/* var 강아지1 = { type : '말티즈', color : 'white' };
var 강아지2 = { type : '진돗개', color : 'brown' };  */

class 강아지 {
  constructor(a, b) {
    this.type = a;
    this.color = b;
  }
  한살먹기() {
    /* 여기서는 에러 */
    if (this.age === undefined) {
      throw Error("에러임");
    } else {
      return this.age;
    }
  }
}

var 강아지1 = new 강아지("말티즈", "white");
var 강아지2 = new 강아지("진돗개", "brown");

console.log("1번답-1:::", 강아지1);
console.log("2번답-2:::", 강아지2);

/* 2번 문제 강아지 값을 상속 받아서 고양이를 만들고 싶다 */
/* var 고양이1 = { type : '코숏', color : 'white', age : 5 };
var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 };  */

class 고양이 extends 강아지 {
  constructor(a, b, c) {
    super(a, b);
    this.age = c;
  }
  한살먹기() {
    return super.한살먹기() + 1;
  }
}

var 고양이1 = new 고양이("코숏", "white", 5);
var 고양이2 = new 고양이("러시안블루", "brown", 2);

console.log("2번답-1:::", 고양이1);
console.log("2번답-2:::", 고양이2);

/* 고양이와 강아지 object들에 기능을 하나 추가*/

고양이2.한살먹기();

/* 3번 문제 추가 고민  강아지에서 오류가 안뜸 */

class Unit {
  constructor() {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return this.공격력 + this.체력;
  }
  set heal(power) {
    this.체력 = this.체력 + power;
  }
}

/* 인스턴스는 class로부터 새로생성되는 오브젝트 */
var 마린 = new Unit();
마린.heal = 50;
console.log("4번답-1:::", 마린.battlePoint);
console.log("4번답-2:::", 마린);

var data = {
  odd: [],
  even: [],
  get 정렬() {
    return [...this.odd, ...this.even].sort();
  },
  set 저장(a) {
    var number = [...a];
    var numberArr = number.map(Number);
    return (
      this.odd.push(numberArr.filter((num) => num % 2 === 0)),
      this.even.push(numberArr.filter((num) => num % 2 === 1)),
      this.정렬
    );
  },
};
data.저장 = "54123";
console.log("5번답::", data);
/* 나중에 다시 풀기 */