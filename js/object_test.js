//class : object 생성을 위한 template
//object : class type으로 생성된 객체

//1. class 선언(ECMA6 - class)
// class 클래스이름 {
//     변수;
//     생성자;
//     메소드;
// }
class Person{
    _name="";
    _age=0;

    constructor(name, age){
        _name = name;
        _age = age;
    }

    print(){
        console.log(`이름 : ${_name} 나이 : ${_age}`);
    }
    //computed
    get birthYear(){
        return 2021-this._age+1;
    }
    //action
    set birthYear(year){
        this._age = 2021-year+1;
    }
}

let p = new Person("daniel",3);
//p.birthYear(2003)//not a function Type Error
p.birthYear = 2003;
console.log(`${p.name}님 ${p.birthYear}년 출생`)
p.print();


//2. function 객체로 선언
function Student(name, age, major){
    this._name = name;
    this._age = age;
    this._major = major;
    this.print = function(){
        console.log(`이름 : ${this._name} 나이 : ${this._age} 전공 : ${this._major}`);
    }
}
let s = new Student("daniel", 3, "computer");
s.print();

//3. JSON(JavaScript Object Notation)
let e = {name : 'daniel', age : 3, department: 'backend'};
console.log(e);