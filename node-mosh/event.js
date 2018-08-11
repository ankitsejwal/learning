const EventEmitter = require('events');
const event = new EventEmitter();

event.on('messageLogged', function(){
    console.log('message caught...');
})
event.emit('messageLogged');