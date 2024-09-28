var fs = require('fs')
var fileName = "xyz.txt";
var content = "this is first file operation";

fs.writeFile(fileName,content,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("file save");
    }
});
fs.appendFile(fileName," Now i am appending this data",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("append content sucessfully");
    }
})

fs.readFile(fileName,'utf8',(err,data) =>{
if(err){
    console.log("error occur");
}else{
    console.log(data);
}
})