const WebSocket = require('ws');

const port = 31012;

const wsService = new WebSocket.Server({ port }, () => {
  console.log(`웹 소켓이 ${port}에서 구동 중`)
});


//클라이언트가 "ws://localhost:31012"로 연결을 시도하여 연결했을때 실행
wsService.on("connection", socket => {
  console.log(`소켓 연결`);
  //클라이언트가 연결을 종료했을때 실행
  socket.on("close", () => {
    console.log(`소켓 연결 해제`);
  });
  //클라이언트가 메시지를 보냈을때 실행
  socket.on("message", msg => {
    console.log(`msg : ${msg}`);
    socket.send(msg.toString());
  });
});