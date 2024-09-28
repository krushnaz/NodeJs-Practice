const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('loginForm.html',(err,data) =>{
        if(err){
            res.writeHead(404);
            res.write('file not found');

        }
        else{
            res.write(data);
        }

        res.end(); 
    });
});

server.listen(3000,'127.0.0.1',() =>{
    console.log('Server is running on http://127.0.0.1:3000');
})