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