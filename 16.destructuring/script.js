/* destructuring */

var arr = [1, 2, 3, 4, 5];

var aA = arr[0];
var bB = arr[1];
/* 보통은 이런식으로 */

var [a, b, c] = [1, 2, 3];
/* 이렇게 모양만 맞춰서 변수를 선언하면 선언이 됩니다. */
console.log("테스트1:::", a);
console.log("테스트2:::", b);
console.debug("테스트3:::", c);

/* 만약에 서로 안맞으면? */
/* var [a1, b1, c1] = [1, 2]; */
/* 이런식으로 */
var [a1, b1, c1 = 10] = [1, 2];
/* 이런식으로 할당 가능 */
console.log("디폴트:::", c1);

/* 아예 지정 안한 건 undefined */

/* Array 뿐만 아니라 Object도 destructuring 가능 */

var obj = { name: "kuku", age: 20 };

/* 보통은 */
/* var name = obj.name;
var age = obj.age; */

var { name, age } = { name: "kuku", age: 20 };
/* 이런식으로 destructuring*/
/* 주의! 변수명을 key명과 동일하게 사용해야함 */

var { name2: 이름, age2 = 20 } = { name2: "kuku" };
/* 오브젝트도 디폴트 파라미터 가능 */
/* 이름 변경도 가능 name2 처럼 */

var { name3: 이름 = "kuku" } = {};
/* 이름 변경에 디폴트도 가능 */

/* -------------- */
/* 반대로 변수들을 object에 집어넣고 싶은 경우 */

var name4 = "kim";
var age4 = 20;

/* var obj4 = { name4: name4, age4: age4 };
그러나 축약이 가능하다 */
/* 키값과 변수명이 같을 경우 아래처럼*/
var obj4 = { name4, age4 };

/* 함수 파라미터에 똑같이 사용 가능 */

var obj5 = { name: "kuku", age: 20 };

function 함수({ name, age }) {
  console.log("파라미터1:::", name);
  console.log("파라미터2:::", age);
}

함수({ name: "kuku", age: 20 });

/* 파라미터는 변수를 선언하는 거랑 같음 */

function 함수2([name, age]) {
  console.log("파라미터3:::", name);
  console.log("파라미터4:::", age);
}

함수2([1, 2]);

/* 문제1 */
var [number, address] = [30, "seoul"];
var { address: a, number = 20 } = { address, number };

/* a와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까요?  */
/* 내답 a= seoul, address= seoul, number = 30 */

/* 문제2 */
let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

/* 2. 여기서 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다. */

let [키, 몸무게, 상의사이즈, 하의사이즈] = [
  신체정보.body.height,
  신체정보.body.weight,
  신체정보.size[0],
  신체정보.size[1],
];
let {
  body: { height, weight },
  size: [상의, 하의],
} = 신체정보;
console.log("2번답:::", 키, 몸무게, 상의사이즈, 하의사이즈);
