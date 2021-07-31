const http = require('http');
const EventEmitter = require('events');


const customEmitter = new EventEmitter();
//Webserver
const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('Welcome');
    console.log('hehehhe');
})
server.listen(5000);


customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} ${id}`);
});

customEmitter.emit('response','steven',12);