// function add(a,b){
//     console.log(a + b);
// }

// add(10,20)


// arr = ['SIMCA','SIOM','SITS','SIOP']
// arr.forEach(function(arr){
//     console.log(arr)
// },
// console.log("call back demo!")
// );


// arr = ['SIMCA','SIOM','SITS','SIOP']
// arr.forEach((arr) => {
//     console.log(arr)
// },
// );

// write a node js program and create callback function to sort a array element
arr = [2,3,1,5,4]

arr.sort((a,b) => {
    return a - b;
})

console.log(arr);


