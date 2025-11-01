function sayhello(){
    console.log("Hello!");
}
function add(num1,num2){
    return num1+num2;
}
sayhello()
let sum = add(2,4);
console.log(sum);
let mm= function(a,b){
    return a+b;
}
console.log(mm(3,4));

let m1=(a,b)=>{
    return a+b;
}

console.log(m1("Vraj",5));

let obj={
    namee:"Vraj",
    Surname:"Patel",
    age:20,
    fun : ()=>{
        return "Hello";
    }
}
let obj1={
    namee:"deep",
    Surname:"Hirapra",
    age:21,
    fun : ()=>{
        return "Hello";
    }
}
console.log(obj.namee)
console.log(obj.age)
console.log(obj.fun)
let arr=[obj,obj1]
console.log(arr[0].namee)
obj.fun()

let {nameee}=obj1;
console.log(nameee)
