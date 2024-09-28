exports.pi = 3.14
exports.print =function (){
return this.pi;
}

obj = {
    pi : 3.14,
    print : function(){
        console.log("moduleDemo");
    }
}

module.exports = obj;