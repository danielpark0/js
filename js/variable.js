//변수 선언은 let 사용 (유효범위 구분 위해)
//상수 선언은 const 사용 (값 변경 없이 read Only로 사용)
var x; 
x = 6;
const constVariable = 10;
let globalVariable = 5;
{
    let localVariable = 5;
    var y = 5;
    console.log("localVariable", localVariable);
    console.log("globalVariable", globalVariable);
    console.log("var x", x);
    console.log("var x", x);
    console.log("const", constVariable);
}
//constVariable = 100; 상수는 값 할당 안됨
//console.log("localVarialbe", localVariable; 지역변수로 선언되어있음
console.log("globalVariable", globalVariable);
console.log("var x", x);
console.log("var y", y);
document.getElementById("data").innerHTML = "<h3>variable x= "+x+"</h3>";

//2.DataType - primitive(int, float, char, boolean), Reference(Class,Array)
let intV = 10;
let floatV = 10.5;
let stringV = "10";
let booleanV = true;
console.log("data type")
