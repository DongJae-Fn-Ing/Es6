/* es6는 엄밀히 따지면 여기에 있는 모든 내용을 가져오는 게 아니라 */
/* import a from '/library.js';
      가져올거 */

var a = 10;
/* 이거만 쓰면 작동 안하고 */
/* export var a = 10; 실시간으로 export 하고 싶을 때 */

var b = 20;
/* 여러개 */
/* export default a; */
/* 이렇게 써야함  내보낼거 */

var c = 30;

export { a, b };
/* 여러개 */
export default c;
/* 이런식으로 동시에 쓸 수 있다 */
