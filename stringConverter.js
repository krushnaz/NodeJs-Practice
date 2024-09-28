const readline = require("readline-sync")
console.log("Student Details \n Name : Krushna Zarekar \n Roll No : 23260 \n Division : B");
function convertStringToCase(){
    const userInput = readline.question("Enter a String :")
    const convertType = readline.question("Enter 'U' for Upercase and 'L' for Lowercase :")

    let convertedString;
    if(convertType == 'U'){
        convertedString = userInput.toUpperCase();
    }else if(convertType == 'L'){
        convertedString = userInput.toLowerCase();
    }else{
        console.log("Invalid Input. please enter 'U' or 'L' only.");
        return;
    }
        console.log(`Converted String : ${convertedString}`);
}
convertStringToCase();