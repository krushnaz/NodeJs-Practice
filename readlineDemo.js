const readline = require('readline-sync')
// console.log(readline);
// console.log("enter num1 :");
// let a = Number(readline.question());
// console.log("A : "+a);

// write a node js program to take the input from the user and print the data with number

// console.log("enter the range :");
// let a = Number(readline.question());
// for(let i = 1; i <= a; i++){
//     console.log(i);
// }

// let arr = [];
// for(let i = 1; i <= a; i++){
//     arr += i +" ";
// }
// console.log(arr);


console.log("enter length of array :");
let len = Number(readline.question())
let arr = [];
let i = 0;
while(i < len){
    console.log("Enter element :")
    let ele = Number(readline.question());
    arr.push(ele);
    i++;
}

console.log(arr);




