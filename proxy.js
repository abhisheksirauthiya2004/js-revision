const p1 = {
    fname:"Piyush",
    lname: "Garg",
    age:18,
};

const p1Proxy = new Proxy(p1,{
    get(target, prop){
        if(prop in target){
            // return target[prop];
            return Reflect.get(target, prop);
        }
        else{
            return false;
        }
    },
    set(target, prop, value){
        if(!(prop in target)){
            throw new Error(`${prop} does not exists`);
        }
        switch(prop){
            case 'fname':
            case 'lname':
                if(typeof value !== 'string'){
                    throw new Error(`${prop} must be string`); 
                }
                break;
            case 'age':
                if(typeof value !== 'number'){
                    throw new Error(`${prop} must be number`); 
                }
                if(value <=0){
                    throw new Error(`${prop} must be >0`); 
                }
        }
        Reflect.set(target, prop, value);
        // target[prop] = value;
    },
})

p1Proxy.fname = "Ahishek"
p1Proxy.age = 100;
console.log(p1Proxy);