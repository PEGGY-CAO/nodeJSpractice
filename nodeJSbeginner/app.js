/**
 * https://www.youtube.com/watch?v=TlB_eWDSMt4&t=1767s
 * Follow the YouTube tutorial to learn node js
 */

function sayHello(name) {
    console.log('Hello' + name);
}
sayHello('Peggy');

console.log(); //console is a global object
var message = '';
// global.setTimeout(() => {
    
// }, timeout);

/**
 * In node, there's no objects called window, there's "global" instead
 * in browser, window is usually prefix before setTimeout() and other function
 * eg. window.setInterval() //call function repeatly after a time interval
 * 
 * We should avoid defining variables and functions in the global scope
 * Instead use module for encapsulation (object-oriented idea)
 * 
 * In node, every file is a module
 * console.log(module) is used to check the information.
 * Module {
 *      id: '.',
 *      exports: {},
 *      parent: null,
 *      filename: 'path of this file'
 *      loaded: false, //a boolean
 *      children: []
 *      paths:
 *       [ 'pathhhhhh',
 *          'pathhhh',
 *          'pathhh',
 *      
 *          ]}
 */

//require is specially a Node function for loading other js module. 
//  ./ is used for js module in same folder, .js extension can be saved cuz node assumes it's js file and add extension automatically
//  ../ is used for parent folder
//  returns the object that is exported from the target module
var Logger = require('./logger');
const newLogger = new Logger();
newLogger.log('message');
//register a listener, it can receive the object sent by emitter, use arrow function syntax in this case
newLogger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
newLogger.log('message');
//console.log(logger);

//the key word const is used for declaring a constant variable
//eg.
//const example = logger;
//example = 1;
//example.log('Hey there');

//node does not excecute directly, it wraps code inside each module in a function instead
//so called module wrapper function
//function(exports, require, module, __filename, __dirname)

//node has built in modules: path, os, fs, etc
//each time you want to load a module:
const path = require('path');
const os = require('os');
const fs = require('fs');
//var files = fs.readdirSync('./');

//always prefer to use Asynchronous methods
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

//convention of class - begin with Capital
const EventEmitter = require('events');
//const emitter = new EventEmitter();

//two most used methods: emit and on

//pass in an object with properties like id and url as event argument
//emitter.emit('messageLogged',  { id: 1, url: 'http://' }); //make a noise, raise event

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

    //the Express framework is used to handle various routes 
});

// this is so low level we use the formal instead
// server.on('connection', (socket) => {
//     console.log('new connection...');
// });

server.listen(3000);
console.log('listening on port 3000...');


 