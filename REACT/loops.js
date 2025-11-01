for(let i=0;i<5;i++){
    console.log(i);
}

let arr=[10,20,30,40,50];
for(let num of arr){
    console.log(num);
}

let i=3;
while(i<10){
    console.log(i);
    i=i+1;
}

do{
    console.log(i);
    i--;
}while(i>1);

let arr1=[10,20,30,40,50];
let newarr=arr.map(neww=>neww+10);
console.log(newarr);
function change(i){
    return i+1;
}
let a=arr.map(change);
console.log(a);
let new2=arr.map(function(neww){
    return neww*20;
})

console.log(new2);
let arr2=[10,20,30,40,50];
let filteredarr=arr2.filter(num=>num+20);
console.log(filteredarr);

let redarr=arr2.reduce((sum,current)=>sum+current,100);
console.log(redarr);