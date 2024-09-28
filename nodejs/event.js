const event = require('events')
// console.log(event);
// eventEmitter = new event.EventEmitter();
// eventEmitter.on("count",function(count){
//     console.log(count);
// });
// eventEmitter.emit("count","this is my event");


info = {
    id : 100,name : "SIMCA"
}
eventEmitter = new event.EventEmitter();
eventEmitter.on("printInfo",function(data){
    console.log(data.id);
    console.log(data.name);
});
eventEmitter.emit("printInfo",info);

