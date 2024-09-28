// console.log(process);
// a = process.argv[5];
// console.log(a);

// to print multiplication table of a number number acept from CLA

num = process.argv[2]
// for(let i = 1; i <= 10; i++){
//     console.log(num+" x "+i+" = "+num*i)
// }

// i = 1;
// while(i <= 10){
//     console.log(num+" x "+i+" = "+num*i)
//     i++;
// }

index = [1,2,3,4,5,6,7,8,9,10]
// for(i of index){
//     console.log(num+" x "+i+" = "+num*i)
// }

index.forEach( ele => {
    console.log(num+" x "+ele+" = "+num*ele)
})





