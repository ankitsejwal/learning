const EventEmitter = require('events');

const url = "http://google.com.au";

class Logger extends EventEmitter{
    log(message){
        // send http request
        console.log(message);

    // raise an event
    this.emit('messageLogged', {id:1, url: "url"});
    }
}

module.exports = Logger;