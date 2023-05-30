/* stack,queue */

/* 웹브라우저 동작원리 */
/* 웹브라우저 동작원리 왜 알아야함?
우리가 짠 자바스크립트는 크롬(브라우저)이 실행을 해줌 */

/* 자바스크립트는 보통 프로그래밍 언어랑 동작하는 방식이 다르다 */

/* 웹 브라우저 */
/* 자바스크립트등 코드를 짠 거 실행해주는 엔진 */
/* 우리가 쓴 코드를 stack이라는 곳에 한줄 한줄 저장 */
/* stack은 하나 밖에 없음 그래서 single threaded 언어라고 하기도함 그래서 병렬 처리 못함*/
/* stack 옆에 heap이란 공간에 변수 저장 */

/* 평소 코드는 한번에 바로 실행 
그러나 setTimeout같은 함수는 바로 실행 불가능함 그래서 대기실로 보내놓고 실행함
종류: ajax 요청코드, 이벤트 리스너, setTimeout */
/* 위에 바로 실행 불가능한 함수들을 대기실에 보내는데 그 이후 다시 stack으로 보내려면 */
/* queue라는 공간을 들렀다가감 즉 대기가 끝난 코드들은 queue라는 공간을 통해서 감 */

/* 그런데 stack에서 바로 처리하면 좋을 텐데 왜 대기실을 만들었음?  */
/* stack은 워낙 처리할 것이 많아서 */

/* 그런데 queue에서 stack으로 넘아갈 때 조건이 있음 
조건이 무엇이냐 stack 텅 비었을 때 */

/* 그런데 여기서 문제
setTimeout을 0초로 하면  코드들이 순차적으로 실행? no!
대기실 들르고 queue를 찍고 와서 그 뒤에 실행
*/

/* 자바스크립트로 어려운 수학 계산 시키는 거 비추 */
/* 그리고 for반복문 1억번 대량으로 돌리는 거 하지마 */
/* 와이? stack에서 코드 처리중인데 이벤트가 발생하면 실행안함 */
/* 왜 stack 비어야 queue가 있는 것을 사용 */

/* 결론 
1.stack을 바쁘게 하지 말것
2.queue도 바쁘게 하지 말것 */

/* 자바스크립트는 동기적 vs 비동기적? */
/* 자바스크립트는 원래 동기적으로 처리됩니다. 즉 원래 한번에 한줄 순서대로 실행을 함 */
/* 그러나 가끔 비동기적인 처리도 가능 setTimeout, 이벤트리스너, ajax함수 같은 거 사용하면 즉 위에서 한줄로 처리하는 것이 아니라 빨리 되는 거 먼저 실행을 하기도 함*/

/* + stack을 안 바쁘게 하는 법 */
/* Web worker를 이용합니다.

다른 자바스크립트 파일을 이용해서 
그 파일에서 힘든 연산을 시키고 그게 완료가 되면 값을 가져오라고 명령이 가능합니다.
이미 만들어진 Worker라는 클래스를 사용하면 됩니다. */

/* (메인 js 파일) */
var myWorker = new Worker("worker.js");

w.onmessage = function (e) {
  console.log(e.data); //이러면 1 나올듯
};

/* (worker.js 파일) */

var i = 0;
postMessage(i + 1); //postMessage라는 특별한 함수가 있음

/* 이런 식으로 셋팅해놓으면
worker.js에서 작업이 완료될 시 postMessage() 이렇게 실행하면
다른 파일로 완료된 결과값을 전달해줄 수 있습니다. 
이러면 Stack이 바빠지지 않습니다 */