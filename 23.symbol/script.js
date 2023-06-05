/* symbol */
/* 알고만 있어라 */

var 심볼 = Symbol("설명");
/* 어따씀 */
/* 오브젝트의 키값으로 사용 */

var weight = Symbol("내 시크릿 몸무게");
var tall = Symbol("내키");

var person = { name: "kim" };
/* var person = { name: "kim", [tall]: 173 }; 이것도 가능 */
person.weight = 100;
/* es6부터는 키 작명에 Symbol를 넣을 수 있다 */
person[weight] = 200;
person[tall] = 173;
/* 심볼 자료형은 반복문에서 출력이 불가함 */

/* 비밀스런 데이터를 저장하고 싶으면 */
/* 몸무게를 숨기고 싶으면 */


/* 특징 */
/* 심볼에 설명을 담는데 설명이 같아도 같은 심볼이 아님 */
/* 전역 변수 같은 전역 심볼? */
/* 심볼을 만들 때 */
var a = Symbol.for('설명!');
/* Symbol.for */ 
/* 같은 설명을 가진 것이 위에 있으면
기존 심볼을 복붙해줌 */


/* Symbol 자료형 특징3. 기본 내장 Symbol들

 

Array, Object 자료형을 만들 때 몰래 붙어있는 기본 Symbol 들도 있습니다. 

예를 들면 모든 array 자료형은 [Symbol.iterator]라는 이름을 가진 심볼이 안에 있습니다.

궁금하면 아무 array나 만들고 한번 저걸 출력해보십시오. 

(Symbol을 출력하고 싶으면 오브젝트[심볼명] 이렇게 하시면 됩니다) */