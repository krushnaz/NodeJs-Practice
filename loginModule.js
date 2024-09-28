const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
// app.use(express.static(''))

app.get('/',(req,res) => {
res.sendFile(__dirname+'/loginForm.html')
})

app.post('/login',(req,res)=>{
    const{username,password} = req.body;

    if (username =='admin' && password == '12345'){
        res.send("login sucessful")
    }else{
        res.send("Login failed")
    }
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on  : http://localhost:${port}/`)
})