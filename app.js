// const dateTimeModule = require('./DateAndTime');
// const currentDateTime = dateTimeModule.getCurrentDateTime();
// console.log("Student Details \n Name : Krushna Zarekar \n Roll No : 23260 \n Division : B");
// console.log(`current date and time is : ${currentDateTime}`);

// const queryStringParser = require("./queryStringParser")
// console.log("Student Details \n Name : Krushna Zarekar \n Roll No : 23260 \n Division : B");
// const queryString = "https://example.com/path?name=Krushna&age=22&city=Pune";
// const parseQuery = queryStringParser.parseQueryString(queryString);
// console.log("Parse Query String :",parseQuery);

const express = require('express');
const app = express()
const port = 3000;

app.get('/',(req,res) => {
    res.send('<h1>Welcome to home page </h1><p>Student Details <br> Name : Krushna Zarekar <br> Roll No : 23260 <br> Division : B</p> <a href="/about">About</a> | <a href="/contact">Contact</a>')
})

app.get('/about',(req,res) =>{
    res.send('<h1>About Us</h1><p>Student Details <br> Name : Krushna Zarekar <br> Roll No : 23260 <br> Division : B</p><p>This is the ABOUT page.</p><a href="/">Home</a> | <a href="/contact">Contact</a>');
})

app.get('/contact',(req,res) => {
    res.send('<h1>Contact Us</h1><p>Student Details <br> Name : Krushna Zarekar <br> Roll No : 23260 <br> Division : B</p><p>This is the CONTACT page.</p><a href="/">Home</a> | <a href="/about">About</a>');
})

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
})