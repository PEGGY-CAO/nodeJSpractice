//imitate a login function 
//send an HTTP request to the url

//convention of class - begin with Capital
const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';//just for imagine

class Logger extends EventEmitter {
    //when define a fuction in a class, we don't need the keyword: function
    log(message) {
        //send an HTTP request
        console.log(message);
    
        //pass in an object with properties like id and url as event argument
        this.emit('messageLogged',  { id: 1, url: 'http://' }); //make a noise, raise event
    }
}



//In order to access url and log() in external js module like app.js
// In this case, an object is exported.
//ßmodule.exports.log = log;
module.exports = Logger;

//It can also export a single function
//eg. module.exports = log;
//module.exports.endPoint = url;