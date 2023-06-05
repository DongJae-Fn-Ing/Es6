/* for_in,for_of,enumerable,iterable */

/* 반복문은 */
/* 1. 코드를 여러번 실행할 때 */
/* 2.array, object에서 자료를 꺼내쓸 때 */

class 부모 {}
부모.prototype.name = "park";
var 오브젝트2 = new 부모();
var 오브젝트 = { name: "Kim", age: 30 };

for (var key in 오브젝트2) {
  console.log(오브젝트[key]);
}

for (var key in 오브젝트) {
  console.log(오브젝트[key]);
  /* 여기서 key는 오브젝트 안에 key 값을 나타낸다. */
}
/* for in 반복문 특징 */
/* 1.enumerable 한 것만 반복해줍니다.
     자바스크립는 객체를 만들어주면 name이라는 key 값에 name만 포함된 것이 아니다.
*/

Object.getOwnPropertyDescriptor(오브젝트, "name");
/* 이걸 콘솔창에 찍어보면
writable: true, enumerable: true, configurable: true
위에 3가지 속성이 같이 저장된다.
writable 다시 읽을 수 있느냐?
enumerable 셀 수 있는 지 여부? 이게 중요
이게 true 반복문에서 출력해준다.
configurable 모름?
*/
/* 2. 부모의 prototype도 출력 */
/* 3. 내가 직접 가지고 있는 것만 반복을 해주고 싶으면 */
/* 오브젝트.hasOwnProperty(key) 이것을 if 문 안에 넣어서 */
/* 4. object 자료형에만 씁니다 */

var 어레이 = [2, 3, 4, 5];

for (var inner of 어레이) {
  console.log(inner);
  /* inner 여기 변수는 하나 하나의 데이터 */
}

/* for of 반복문은 언제쓰니? */
/* Array, 문자, arguments, NodeList, Map, Set */
/* 얘네 반복 시킬 때 */
/* 특징 */
/* iterable 자료형만 사용 자바스크립트는 비밀스러운 특징을 가지고 있다. */

/* 어레이[Symbol.iterator](); */
/* 이거 콘솔창 찍어봐 */
/* 그니깐 이런것 들을 내포한 것만 for of를 사용할 수 있다 */

/* 참고 NodeList란 무엇인가 */


let 데이터 = [1,2,3,4,5,6,7,8,9] 