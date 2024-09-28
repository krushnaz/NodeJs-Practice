// pi = require('./moduleDemo')
// console.log(pi);
// pi.print()
// console.log(pi.print());
// obj.print()
// console.log(obj);

// write a program to create a user define module or local module to perform arthimatic operation 
// addition 
// substration
// multi 
// div 
// and call this user difine module to perform arthematic operation

// arth_op = require('./ArthematicModule')
// // console.log(arth_op);
// console.log("Addtion : "+arth_op.addtion(10,20));
// console.log("Substraction : "+arth_op.substraction(10,20));
// console.log("Multiplication : "+arth_op.multiplication(10,20));
// console.log("Division : "+arth_op.division(10,20));

obj = require('./modules/moduleObj')
console.log(obj);
obj.printInfo()