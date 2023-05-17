/* 문자
123 */

var aaa = 1234;

/* 그냥 문자와 숫자는 Primitive data type */
/* Primitive data type들은 변수에 값이 그대로 저장 */

var arr = [1, 2, 3];
var obj = { name: "kar" };
/* Array, object는 변수에 값이 저장이 안됩니다.
reference가 변수에 저장이 됩니다.
이것을 reference data type 라고 합니다
*/

/* var obj = { name: "kar" };
이것을 해석을 하자면 name: "kar"가 저쪽에 있습니다라고
표시하는 화살표이다.
*/

/* Primitive data type 특징 */
var 이름1 = "김";
var 이름2 = 이름1;
console.log(이름2);
/* 여기서는 바뀌진 않는다 */
이름1 = "박";

/* reference data type 특징 */
var 이름a = { name: "김" };
var 이름b = 이름a;
이름a.name = "박";
console.log(이름b);
/* 여기서는 바뀐다 */

/* reference data type는 저장되있는 곳을 표시하는 화살표에 저장이 된 것 이므로 */
/* var 이름a = { name: "김" }을 해석하자면
var 이름a = name: "김"이 저기 저장되어 있음 */

/* 그래서 배열(array)와 객체(object)는 함부로 복사해서 쓰면 큰일난다 */
/* + {}을 할당할 때 마다 새로운 화살표가 생긴다고 생각을 해라 */

var 이름c = { name: "김" };
var 이름d = { name: "김" };

이름c == 이름d;
console.log("무슨뜻", 이름c == 이름d);
/* 오브젝트가 저장이 된 것이 아니라 화살표가 저장이 된 것이기 때문에 이게 같은 자료를 가르키는 화살표?
아닙니다 */

var 이름e = { name: "김" };

function 변경(obj) {
  /* obj.name = "박"; */
  /* 이런식으로 객체의 값을 직접 지정해주면 바뀌고 */
  obj = { name: "박" };
  /* 재할당은 값이 수정 불가다 */

  /* 파라미터는 변수의 생성과 할당과 같다 */
  /* 즉 var obj = 들어가는 값 */
  /*   obj = { name: "박" }는 즉 obj라는 변수 안에
  name: "박"을 가리키는 화살표를 할당 해준 것 
  {} 새로운 객체를 생성
  */
}

변경(이름e);
console.log(이름e);
