/* object_create es5상속 */

/* Object.create(프로토타입오브젝트); */
var 부모 = { name: "kim", age: 50 };

var 자식 = Object.create(부모);
자식.age = 20;
console.log(자식);
console.log(자식.age);

var 손자 = Object.create(자식);

console.log(손자.name);

/* 1. 손자에 age가 있는지 확인하고

2. 없으면 부모 prototype에 있는지 확인하고

3. 거기도 없으면 부모의 부모 prototype에 있는지 확인하고..

그렇게 하나씩 확인해서 젤 가까운 age를 출력시키기 때문입니다.  */
