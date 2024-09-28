// console.log("hello")
// write a node program to print sum of two number
// let a = 10
// let b = 20
// let c = a + b;
// console.log(`the sum of ${a} and ${b} is :${c}`);
// console.log(c);

// write a node js program to print the number 1 to 20 
// for(let i=1; i <= 20;i++){
//     console.log(i);
// }

// write a proram to find maximum number from the given three numbers

// let a = 30;
// let b = 10;
// let c = 20;

// if((a > c) && (a > b)){

//     console.log(a+" is greater");
// }else if(b > c){
//     console.log(b +" is greater");
// }else if(c > b){
//     console.log(c +" is greater");

// }

// arr = [1,2,3,4]
// for (let i=0; i< 4;i++){
//     console.log(arr[i]);
// }

// arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(arr);

// for (let i = 0; i < 3; i++) {
//     for(let j=i;j<3;j++){
//         result = arr[i][j] +" ";
//     }
// }

// write a program to print the sum of lower triangle element 

// arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//     for(let j=0;j<3;j++){
//         if(i > j){
//             sum += arr[i][j]
//         }
//     }
// }
// console.log("the sum of lower elements is : "+sum);

// write a node js program the sum of non diagonal Element

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i !== j && i+j !== arr.length -1) {
            sum += arr[i][j];
        }
    }
}

console.log("The sum of non-diagonal elements is: " + sum);
