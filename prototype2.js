let fname = "piyush garg";

let x = 10;
// console.log(fname.__proto__);
// console.log(fname.at(2));

const p1 = {
    xp1: "i am inside p1",
}

const p2 = {
    xp2: "i am inside p2",
    __proto__:p1,
}

const p3 = {
    xp3: "i am inside p3",
    __proto__:p2
}

let a = p3.xp1;
// console.log(a);

class Student{
    constructor(){

    }

    getName(){
        return " i am inside get name";
    }
}

const s1 = new Student();
// s1.__proto__ = Student;

// const s2 = {__proto__:Student.prototype};

console.log(s1.getName());