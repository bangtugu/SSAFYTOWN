const WebSocket = require('ws') 
const wss= new WebSocket.Server({ port: 8000 },()=>{ 
    console.log('서버 시작') 
}) 

wss.on('connection', function connection(ws) { 
    console.log('접속');
    ws.on('message', (data) => { 
        console.log('받은 데이터 : %o', data) 
        ws.send(data); 
    })
        
    ws.on('close', function close() {
        console.log('접속해제');
    })
})


wss.on('listening',()=>{ 
    console.log('리스닝 ...') 
})

// const socketIO = require('socket.io')(5000);

// console.log('Server Start : port 5000');

// socketIO.on('connection', function(socket) {
//     console.log('Player Connected');

//     socketIO.emit('PlayerConnected');

//     socketIO.on('disconnect', function() {
//         console.log('A player disconnected');
//     })
// })


// var express = require('express');
// var app = express();
// var http = require('http'); 
// var server = http.createServer(app);
// var { Server } = require("socket.io");
// var io = new Server(server);
// var ip = require('ip');

// // const socketIO = require('socket.io')(5000);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // DNS domain name system
// // www.ssafytown.ssafy.io
// const host = ip.address()
// console.log(host)

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//         console.log('message: ' + msg);
//     });
    
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// server.listen(7777, () => {
//     console.log('listening on *:7777');
// });


// const server = http.createServer(function(request,response){ 

//     response.writeHead(200,{'Content-Type':'text/html'});
//     console.log('접속');
//     response.end('Hello node.js!!');

// });

// server.listen(8080, function(){ 
//     console.log('Server is running...');
// });


// socketIO.on('connection', function(socket) {
//     console.log('Player Connected');

//     socketIO.emit('PlayerConnected');

//     socketIO.on('disconnect', function() {
//         console.log('A player disconnected')
//     })
// })