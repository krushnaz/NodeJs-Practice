const readline = require('readline-sync')

function add (num1,num2){
    return num1 + num2;
}

function sub (num1,num2){
    return num1 - num2;
}

function mul (num1,num2){
    return num1 * num2;
}

function div (num1,num2){
    if(num2 == 0){
        console.log("Error : Cannot divide by zero");
        return;
    }
    return num1 / num2;
}

function calculator(){
    console.log("Select Operation!...");
    console.log("1. Addition");
    console.log("2. Substraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    const num1 = parseFloat(readline.question("Enter first number :"))
    const num2 = parseFloat(readline.question("Enter second number :"))

    const choise = parseInt(readline.question("Enter your choise :"))

    let result;
    switch(choise){
        case 1 :
            result = add(num1, num2);
            break;
        
        case 2 :
            result = sub(num1, num2);
            break;

        case 3 :
            result = mul(num1, num2);
            break;

        case 4 : 
            result = div(num1, num2);
            break;
        
        default :
            console.log("Invalid choise...");
            return
    }
    console.log(`Result : ${result}`);
}
console.log("Student Details \n Name : Krushna Zarekar \n Roll No : 23260 \n Division : B");
calculator();