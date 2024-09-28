const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
  }

  greet(name) {
    this.emit('greeting', `Hello, ${name}!`);
  }
}

const emitter = new MyCustomEmitter();

emitter.on('greeting', (message) => {
  console.log(message);
});

emitter.greet('krushna');  // Output: Hello, World!
