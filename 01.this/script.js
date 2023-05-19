/* 1. */
console.log(this);

/* 디스를 하나만 쓰면 window를 호출한다 */

function kdj() {
  console.log("this의 두번째 출력:::", this);
}
kdj();

/* 그냥 쓰거나 일반 함수 안에서 쓰면 {window} */
/* 콘솔에서 찍히는 window 객체 안에 값들은 윈도우 기본함수 */
/* 결국 윈도우는 window는 모든 전역변수, 함수, DOM을 보관하고 관리하는 전역객체입니다. */

/* 2. */
/* 객체 안에 함수를 삽입 가능하다 */

var kdj2 = {
  data: "kim",
  kdjFun: function () {
    console.log("안녕");
    console.log(this);
  },
  data2: {
    dataSub: {
      kdjFun2: () => {
        console.log(this);
      },
    },
  },
};

kdj2.kdjFun();
kdj2.data2.dataSub.kdjFun2();

/* 오브젝트 안에서 this를 사용하면 오브젝트 내 함수안에서 쓰면 그 함수를 가지고 있는 오브젝트 뜻함*/

/* arrow function 화살표 함수를 쓰면 this 값을 함수 밖에 있던 거 그대로 사용*/

/* 즉 함수나 변수를 전역공안에서 만들면 {window}에 보관 */

/* 3. */

/* constructor(오브젝트 생성 기계)  안에서 쓰면 새로 생성되는 오브젝트를 듯함*/

function sample3() {
  this.name = "kim";
  /* 이걸 뜻한다 새로 생성되는 오브젝트 즉 인스턴스(instance) */
}

let sampleTest = new sample3();
console.log(sampleTest);

/* 4. 이벤트 리스너*/
let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", function (e) {
  /* 여기 안에서 디스를 쓰면 */
  /* this; === e.currentTarget; */
  console.log(this);
  console.log(e.currentTarget);
  /* 즉 위에 두 요소는 지금 이벤트가 일어나는 요소를 뜻함 */

  /* case01 */

  let arrayTest = ["a", "b", "c"];
  arrayTest.forEach(function (a) {
    console.log(":::case", a);
    /* 여기서 즉 일반 함수 안에서 this를 쓰면? */
    console.log(":::window", this);
    /* 그냥 일반 함수 안에서 this를 사용하면 window가 나온다 */
  });
});

/* case 2 */
/* 오브젝트 내에 콜백함수 안에서 this를 쓴다면? */
let object3 = {
  names: ["kar", "na", "da"],
  event: function () {
    /* 이런식으로 객체 안에 함수 넣을 수 있다는 거 복습 */
    console.log(":::오브젝트 출력", this);
    object3.names.forEach(function (a) {
      console.log(":::object3.names", a);
      console.log(":::object3.names2", this);
      /* 여기서 this는 window 출력 */
      /* 왜 근본없는 일반 함수니깐 */
    });
  },
  /* case3 arrow 안의 this */
  event2: function () {
    console.log(":::오브젝트 출력 arrow", this);
    object3.names.forEach((a) => {
      console.log(":::object3.names arrow", a);
      console.log(":::object3.names2 arrow", this);
      /* arrow function의 특징은 내부의 this 값을 변하게 하지 않음*/
      /* arrow function 안의 this는 위에 있는 외부 디스값을 끌어다 쓰세요 라고 생각을 해라 즉 외부 this 값 재사용가능 */
      /* 그래서 여기서 this는 오브젝트다 */
    });
  },
};
object3.event();
object3.event2();
