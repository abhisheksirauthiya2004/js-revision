console.log("start of script 3");

setTimeout(() =>{
    console.log("this is the form the task Queue (setTimeout)");
},0);

Promise.resolve().then(() =>{
    console.log("This is from the miicrostack queue(promise)");
})

console.log("end of script");