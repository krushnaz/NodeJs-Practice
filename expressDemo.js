const express = require('express');
// console.log(express);
const app = express();
const PORT = 3000;
app.get('/',(req,res)=> {
    res.send("<h1>Hello Krushna Zarekar</h1>");
})

app.get('/Contact',(req,res) =>{
    res.send("<h1>this is contact page</h1>")
})

app.get('/home',(req,res) =>{
    res.send("<h1>This is home page</h1>")
})

app.get('*',(req,res) =>{
    res.send("<h1>Page Not Found</h1>")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})

