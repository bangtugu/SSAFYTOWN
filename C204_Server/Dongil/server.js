const WebSocket = require('ws');
const Vector3 = require('./Vector3.js'); //만들어둔 벡터2의 모듈을 받아옵니다.

//port를 선언해주고
const port = 31012;

let socketIdx = 1;

let userList = {}; //유저들
let connectedSocket = {}; //연결된 소켓들

//서버를 연결하고,이 port를 열고 대기하겠다는 뜻입니다.
const wsService = new WebSocket.Server({ port }, () => {
  console.log(`웹 소켓이 ${port}에서 구동중`);
});

//클라이언트가 "ws://localhost:31012"로 연결을 시도하여 연결했을때 실행
wsService.on("connection", socket => {
  socket.id = socketIdx++; //소켓에 id추가
  console.log(`소켓 연결`);
  connectedSocket[socket.id] = socket; // connectedSocket에 연결 소켓을 추가해줍니다.
  userList[socket.id] = connectUser(socket);

  //클라이언트가 연결을 종료했을때 실행
  socket.on("close", () => {
    console.log(`소켓 연결 해제`);
    // wsService.emit("disconnect", socket.id);
    //나갈때 목록에서 지워주기

    delete connectedSocket[socket.id];
    delete userList[socket.id];
  });

  //클라이언트가 메시지를 보냈을때 실행
  socket.on("message", msg => {
    const data = JSON.parse(msg); //json을 한번 파싱해서 dataVO의 형태로 바꿉니다.

    if (socket.readyState !== WebSocket.OPEN) return; //만약 해당 socket이 open상태가 아니라면 return 합니다.

    if (data.type == "TRANSFORM") { //온 데이터 타입이 TRANSFORM이라면
      let transformVO = JSON.parse(data.payload); //payload를 파싱하여 transformVO의 형태로 바꿉니다.

      if (userList[transformVO.socketId] !== undefined) { //userList에 있다면
        userList[transformVO.socketId].position = transformVO.position; //해당 user의 포지션을 클라이언트에서온 position으로 변경해줍니다.
        userList[transformVO.socketId].rotation = transformVO.rotation;
        userList[transformVO.socketId].animation = transformVO.animation;
        userList[transformVO.socketId].scenename = transformVO.scenename;
        userList[transformVO.socketId].characternumber = transformVO.characternumber;
        userList[transformVO.socketId].username = transformVO.username;
      }
      return;
    }
  });
});

//원래 따로 빼주는게 좋습니다.
function connectUser(socket) {
  //transformVO의 형태로 데이터를 만들어줍니다.
  let sendData = {
    socketId: socket.id,
    position: Vector3.zero,
    // rotation: 0,
    // characternumber: 0,
    // userid: '',
    // scenenumber: 0,
  };
  //해당 소켓의 클라이언트에게 connect란 메시지를 보냅니다.
  socket.send(JSON.stringify({ type: "CONNECT", payload: JSON.stringify(sendData) }));

  return sendData;
}

// function disconnectUser(socket) {
//   let sendData = {
//     socketId: socket.id,
//   };
//   console.log("함수는 들어오는데..");
//   socket.send(JSON.stringify({ type: "DISCONNECT", payload: JSON.stringify(sendData) }));
// }

//100ms마다 클라이언트 전부에게 유저들의 정보를 보내줍니다.
setInterval(() => {
  let dataList = Object.values(userList); //value만 뽑아서 dataList를 만든다
  //접속한 모든 클라이언트 소켓이 여기 들어가 있다.
  wsService.clients.forEach(soc => {
    soc.send(JSON.stringify({ type: "REFRESH", payload: JSON.stringify({ dataList }) }));
  });
}, 100);