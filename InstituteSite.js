// write a node js program to create a server and display the following pages 
// 1) home pages
// 2)Director Message 
// 3) time table 
// 4) faculty details
// 5) contact Us

var http = require('http')
var server = http.createServer((req,res)=> {
    res.writeHead(200,{"content-type" : "text/html"})
    if(req.url ==='/'){
        res.write("<h1>Sinhgad Institute of Management and computer Application</h1>")
        res.write("<h3><a href = '/directorMsg'>Director Message</a></h3>")
        res.write("<h3><a href = '/timeTable'>Check Time Table</a></h3>")
        res.write("<h3><a href = '/facultyDetails'>Faculty Details</a></h3>")
        res.write("<h3><a href = '/contact'>Contact Us</a></h3>")
    }
    else if(req.url === '/directorMsg'){
        res.write("<h1>Message Nothing</h1>")
        res.write("<h3><a href = '/timeTable'>Check Time Table</a></h3>")
        res.write("<h3><a href = '/facultyDetails'>Faculty Details</a></h3>")
        res.write("<h3><a href = '/contact'>Contact Us</a></h3>")
    }
    else if(req.url === '/directorMsg'){
        res.write("<h1>Message Nothing</h1>")
        res.write("<h3><a href = '/timeTable'>Check Time Table</a></h3>")
        res.write("<h3><a href = '/facultyDetails'>Faculty Details</a></h3>")
        res.write("<h3><a href = '/contact'>Contact Us</a></h3>")
    }
})