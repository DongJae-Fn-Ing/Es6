let arrow = (a) => {
  return a + 10;
};

console.log("Arrow:::", arrow(5));

/*  arrow function을 쓰는 이유
    함수는 그냥 쓰는 문법이 아니다.
   
    1. 코드들을 기능으로 묶고 싶을 때 사용
    2. 입출력 기계를 만들고 싶을 때 사용
    3. 입출력 기계를 만들 때 보기쉬움 즉 직관적임
    4. 파라미터가 1개면 소괄호도 생략가능
    5. 하나의 식 밖에 없으면 중괄호도 생략가능
*/

/* arrow function의 사용 예시 */

/* 1. 배열 */
[1, 2, 3, 4].forEach((a) => {
  console.log("배열에서 Arrow Function:::", a);
});

/* 2. 이벤트 리스너 */

let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", (e) => {
  console.log("Arrow Function e.currentTarget:::", e.currentTarget);
  console.log("Arrow Function event this:::", this);
  /* arrow function 안에서는 상위 디스값을 가져온다 */
});

/* 3. 객체 안에서 */

let object = {
  function: () => {
    console.log("Arrow Function object this:::", this);
  },
};

object.function();
