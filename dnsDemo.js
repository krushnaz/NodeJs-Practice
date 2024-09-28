var dns = require('dns');
// console.log(dns)
dns.lookup('127.0.0.1',(err,addresses,family) =>{
   if(err){
    console.log(err);
   }else{
    console.log("addresses : ",addresses);
    console.log("family : ",family);
   }
});