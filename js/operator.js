//연산자
//1. 산술 연산자 : +, -, *, /, %
let x = 10;
let y = 20;

console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${y} % ${x} = ${x%y}`);

//2. 대입 연산자 : = 
const z = x+y;
console.log(z);

//3. 비교 연산자 : >, <, >=, <=, ==, !=, ===, !==
console.log(`${x} > ${y} = ${x>y}`);
console.log(`${x} < ${y} = ${x<y}`);
console.log(`${x} >= ${y} = ${x>=y}`);
console.log(`${x} <= ${y} = ${x<=y}`);
console.log(`${x} == ${y} = ${x==y}`);
console.log(`${x} != ${y} = ${x!=y}`);

//4. 논리 연산자 : &&, ||, ^, ~
if((x<y) && x!=0) console.log(`${x} < ${y} and ${x} is not 0`)

//5. 비트 연산자 : &, |, ^, ~, >>, <<
x=4;
console.log(`${x} >> 2 = ${x>>2}`);
console.log(`${x} << 2 = ${x<<2}`);

//6. 삼항 연산자 : 조건 ? 참 : 거짓
x == y ? console.log(`${x} == ${y}`) : console.log(`${x} != ${y}`);


