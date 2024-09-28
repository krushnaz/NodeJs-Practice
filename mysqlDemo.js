const mysql = require('mysql');
// console.log(mysql);
const conObj = {
    host:'localhost',
    user:'root',
    pass:'',
    database:'test'
}
const con = mysql.createConnection(conObj);
con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected with Mysql');
    }
})
// let sqlQuery = "Create table employee(empId int(10), empName varchar(30),empSal int(30),empEmail varchar(30));";
// let sqlQuery = "insert into employee(empId,empName,empSal,empEmail) values(1,'krushna',200000,'krishnazarekar@gmail.com');"
// con.query(sqlQuery,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//         console.log("data inserted sucessfully...!");
//     }
// })

let sqlQuery = "select * from employee";
con.query(sqlQuery,(err,result,fields)=>{
    if(err) throw err;

    // console.log(fields);
    // console.log(result);

    var i = 0;
    while(i < result.length){
        console.log(result[i].empId +" "+ result[i].empName +" "+ result[i].empSal+" "+result[i].empEmail);
        i++;
    }

    result.forEach(element => {
        console.log(element.empId);
        console.log(element.empName);
        console.log(element.empSal);
        console.log(element.empEmail);
    });
})

let 