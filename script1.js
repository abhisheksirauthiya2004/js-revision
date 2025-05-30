console.log("global execution context starts");

var globalVariable = "I am a global variable";


console.log(globalVariable);
globalFunction();

console.log("global execution context ends")


function globalFunction(){
    console.log("Inside global Function");
}
