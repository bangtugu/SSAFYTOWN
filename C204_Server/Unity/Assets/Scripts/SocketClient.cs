using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using WebSocketSharp;

public interface IMsgHandler //서버에서 데이터를 받는 얘들을 위한 인터페이스
{
    public void HandleMsg(string payload); //서버에서 메시지가 오면 실행되는 함수
}

public class SocketClient : MonoBehaviour
{
    public string url = "ws://localhost"; //접속 url
    public int port = 31012; //접속 포트

    private WebSocket webSocket; //웹 소켓 인스턴스

    private Dictionary<string, IMsgHandler> handlerDic; //데이터들을 받아 처리해주는 handler들 딕셔너리

    private Queue<DataVO> packetList = new Queue<DataVO>(); //unity 단일 쓰레드이기 때문에 데이터가 오면 담아두고, update에서 실행되야 하기 때문에 담아두기 위한 큐

    [SerializeField]
    private Transform handlerParent; //handler들을 달아둔 오브젝트

    //간단한 싱글톤
    private static SocketClient _instance = null;
    public static SocketClient Instance
    {
        get => _instance;
        set => _instance = value;
    }

    private void Awake()
    {
        Instance = this;
        handlerDic = new Dictionary<string, IMsgHandler>(); //딕셔너리 초기화
    }

    private void Start()
    {
        IMsgHandler[] handlerList = handlerParent.GetComponents<IMsgHandler>(); //핸들러들을 가져오고

        for (int i = 0; i < handlerList.Length; i++)
        {
            handlerDic.Add(GetTypeString(handlerList[i].GetType().ToString()), handlerList[i]); //해당 타입에 해당하는 스크립트를 넣어준다
        }

        ConnectSocket(url, port);
    }

    //~~Handler의 형식이기때문에 type을 가져오기 위한 함수, 밑에서는 예시로 Transform을 사용하겠습니다 (ex. TransformHandler
    public string GetTypeString(string s)
    {
        List<int> idx = new List<int>();
        s = s.Replace("Handler", ""); //뒤에붙은 handler를 떼줍니다. 그러면 Transform만 남습니다.

        for (int i = 1; i < s.Length; i++) //0번째는 무조건 대문자니 검사를 해주지 않습니다.
        {
            if (s[i].Equals(char.ToUpper(s[i]))) //만약 0번째말고 대문자가 있으면 List에 해당 idx를 추가해줍니다.
            {
                idx.Add(i);
            }
        }

        for (int i = 0; i < idx.Count; i++) //만약 대문자가 있었다면 for문을 돌아요.
        {
            if (i >= 1) //그런데 2번이상 실행이 됐다면
            {
                s = s.Insert(idx[i] + i, " "); //해당 idx + i칸에 공백을 추가해줍니다.
                continue;
            }
            s = s.Insert(idx[i], " "); //한번만 실행이 됐다면 그 자리에 공백을 추가해줍니다.
        }

        string[] strs = s.Split(' '); //공백을 기준으로 나눕니다. (그러면 단어별로 나뉘게 됩니다)
        string returnStr = ""; //리턴할 string 변수를 만들어주고

        for (int i = 0; i < strs.Length; i++) //단어들 수만큼 돌립니다
        {
            returnStr += strs[i]; //나눠둔 단어들을 합칩니다
            if (i + 1 != strs.Length) returnStr += "_"; //반복 중 마지막이 아닌라면 _를 추가해줍니다.
        }


        return returnStr.ToUpper(); //전부 대문자로 바꿔서 return해줍니다.
    }

    //편리하게 쓰기 위한 함수들입니다. 자세한 설명은 하지 않도록 하겠습니다.
    public void SendData(string json)
    {
        webSocket.Send(json);
    }
    //편리하게 쓰기 위한 함수들입니다. 자세한 설명은 하지 않도록 하겠습니다.
    public static void SendDataToSocket(string json)
    {
        Instance.SendData(json);
    }

    private void Update()
    {
        if (webSocket == null) return; //만약 webSocket이 null이라면 밑 코드가 실행되지않게 return 해준다.

        if (packetList.Count > 0) //만약 서버에서 데이터가 와서 packetList에 들어왔다면
        {
            IMsgHandler handler = null; //out으로 받기위한 변수
            DataVO vo = packetList.Dequeue(); //넣어둔 것을 뺍니다.

            if (handlerDic.TryGetValue(vo.type, out handler)) //현재 handlerDic에 vo.type에 해당하는 type의 핸들러가 있다면 
            {
                handler.HandleMsg(vo.payload); //해당 handler의 함수를 실행해줍니다.
            }
            else
            {
                Debug.LogError($"존재하지 않은 프로토콜 요청 {vo.type}");
                Debug.LogError(vo.payload);
            }
        }
    }

    public void ConnectSocket(string ip, int port)
    {
        //인스턴스 초기화 (ws://localhost:31012) <-로 url설정
        webSocket = new WebSocket($"{url}:{port}");
        //위에 초기화 할때 설정해둔 url로 접속을 시도한다.
        webSocket.Connect();

        //서버에서 메시지가 왔을때 실행되는 event다.
        webSocket.OnMessage += (s, e) =>
        {
            DataVO vo = JsonUtility.FromJson<DataVO>(e.Data); //온 데이터를 DataVO의 형식으로 바꾼다.
            packetList.Enqueue(vo); //packetList에 넣어준다.
        };

    }
}