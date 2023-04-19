/* 사람이라는 오브젝트가 하나 있습니다. 

이 오브젝트에 sayHi라는 함수를 (메소드를) 하나 추가하고 싶습니다. */

var 사람 = {
  name: "손흥민",
  sayHi: () => {
    console.log("안녕 나는 " + this.name);
  },
};

사람.sayHi(); //안녕 나는 손흥민

/* 그런데 이 오브젝트에 전부더하기() 라는 함수를 하나 만들어서 사용하고 싶습니다.
위처럼 자료.전부더하기()라고 쓰면 자료.data 안에 있는 모든 숫자를 더해서 콘솔창에 출력해주어야합니다.  */

/* 조건) 위에있는 자료라는 object 중괄호 {} 내에 코드 작성 금지 */

var 자료 = {
  data: [1, 2, 3, 4, 5],
  전부더하기: () => {
    /* 자료.data 배열의 총합을 더해서 보여줘라 */
    let sum = 0;
    for (let i = 0; i < 자료.data.length; i++) {
      sum += 자료.data[i];
    }
    console.log(sum);
  },
};

자료.전부더하기();

/* 버튼을 클릭하면 지금 누른 버튼에 담긴 글자를 출력하는 기능을 만들고 싶어서 이렇게 코드를 짰습니다.  */

/* document.getElementByClassName('btn').addEventListener('click', function(){
  console.log(this.innerHTML)
}); */

let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});
