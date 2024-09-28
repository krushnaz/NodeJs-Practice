// var server = require('http')
// // console.log(server);
// server.createServer((request,response) =>{
//     response.writeHead(200,{'content-type' : 'application/JSON'});
//     str = JSON.stringify({name:'krushna',email : 'krushna@gmail.com', mobile : '1234567890'})
//     response.write(str);
//     response.end('hello node js');
// }).listen(3000);

// var server = require('http')
// // console.log(server);
// server.createServer((request,response) =>{
//     response.writeHead(200,{'content-type' : 'text/html'})
//     response.write("<h1>hello node js server</h1>")
//     response.end("response end")
// }).listen(3000);

var http = require('http')
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
   
    if(req.url === '/'){
        res.write("<h1>Important Links</h1>")
        res.write("<h3><a href='/welcome'>Welcome </a></h3>")
        res.write("<h3><a href='/contact'>Contact </a></h3>")
        res.write("<h3><a href='/about'>About </a></h3>")
        res.end("response end")
    }
    else if (req.url == '/data') {
        res.write("<h1>Hello world</h1>")
        res.end("response end")

    } else if (req.url == '/welcome') {
        res.write("<h1>welcome Page</h1>")
        res.end("response end")

    }else if (req.url == '/contact') {
        res.write("<h1>Contact page</h1>")
        res.end("response end")

    }else if (req.url == '/about') {
        res.write("<h1>Contact page</h1>")
        res.end("response end")
    }else if (req.url == '*') {
        res.write("<h1> Page not found</h1>")
        res.end("response end")
    }
}).listen(3000);

// write a node js program to create a server and display the following pages 
// 1) home pages
// 2)Director Message 
// 3) time table 
// 4) faculty details
// 5) contact Us