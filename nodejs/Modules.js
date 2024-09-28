const { hostname } = require('os');
const { normalize } = require('path');
var url = require('url')
// console.log(url);
// var adr = "http://localhost:8080/default.htm?no1=45&no2=60";
//URL Format contains :
// http : protocol
// localhost : hostname
// 8080 : port number 
// default.htm : filename
// no1 & no2 : query

// var q = url.parse(adr,true)
// console.log(q);
// console.log(q.protocol);
// console.log(q.host);
// console.log(q.search);
// console.log(q.href);

// var qdata = q.query;
// a = parseInt(qdata.no1);
// b = parseInt(qdata.no2);

// console.log("Addition : ",a+b)


// write a node js program to handdle the query data of an url print the username and password given in the query

// var adr = "http://localhost:8080/login.htm?username=krushnaz&password=12345";
// var q = url.parse(adr,true);

// var qdata = q.query;

// username = qdata.username;
// password = qdata.password;

// console.log(username)
// console.log(password)