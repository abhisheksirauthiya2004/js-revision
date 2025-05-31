// in js eveerything is object 
const p1 = {
    fname: "piyush",
    lname:"garg",
    getFullname(){
        return `${this.fname} ${this.lname}`;
    },
};

// const p2 = {
//     fname: "john",
//     lname:"doe",
//     getFullname(){
//         return `${this.fname} ${this.lname}`;
//     },
// };

// console.log(p1.getFullname());

// const p2 = Object.create(p1);

// console.log("p1 is", p1);
// console.log("p2 is", p2);
// console.log("p2 is", p2.fname);

const p2 = {
    __proto__:p1,
};

console.log("p1 is", p1.fname);
p2.__proto__.fname = "hack";

console.log("p1 after is", p1.fname);