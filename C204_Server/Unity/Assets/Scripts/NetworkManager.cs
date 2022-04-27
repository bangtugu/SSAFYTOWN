using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NetworkManager : MonoBehaviour
{
    //싱글톤
    private static NetworkManager _instance;
    public static NetworkManager Instance
    {
        get => _instance;
        set => _instance = value;
    }

    private int socketId = 0; //현재 나의 id

    [SerializeField]
    private Player playerPrefab; //플레이어 프리팹

    public object lockObj = new object(); //lock을 위한 object 변수

    //데이터를 받아줄 변수들
    private TransformVO connectVO = null;
    private List<TransformVO> refreshList = null;

    private bool isConnectRefresh = false;
    private bool isUserRefresh = false;

    private Dictionary<int, Player> playerList = new Dictionary<int, Player>(); //나를 제외한 사람들이 들어갈 딕셔너리

    private void Awake()
    {
        Instance = this;
    }

    //온데이터들을 저장하고 처리해줘야 할 일을 해줍니다.
    public static void ConnectUser(TransformVO vo)
    {
        lock (Instance.lockObj)
        {
            Instance.connectVO = vo;
            Instance.isConnectRefresh = true;
        }
    }

    //온데이터들을 저장하고 처리해줘야 할 일을 해줍니다.
    public static void RefreshUser(List<TransformVO> list)
    {
        lock (Instance.lockObj)
        {
            Instance.refreshList = list;
            Instance.isUserRefresh = true;
        }
    }

    private void Update()
    {
        if (isConnectRefresh)
        {
            UserConnect();
            isConnectRefresh = false;
        }
        if (isUserRefresh)
        {
            UserRefresh();
            isUserRefresh = false;
        }
    }

    private void UserConnect()
    {
        socketId = connectVO.socketId; //socketId 세팅해주고

        Player p = Instantiate(playerPrefab, transform); // 자신의 플레이어를 생성해줍니다.
        p.InitPlayer(connectVO, false); //초기화 해줍니다.
    }
    private void UserRefresh()
    {
        foreach (TransformVO vo in refreshList)
        {
            if (vo.socketId != socketId) //나와 다른 소켓이라면
            {
                Player p = null;

                if (playerList.TryGetValue(vo.socketId, out p))
                {
                    p.SetTransform(vo.position); //있으면 위치만 넣어주기
                }
                else
                {
                    p = MakeRemotePlayer(vo); //remote플레이어 생성
                }
            }
            else
            {
                //내 데이터일 경우
            }
        }
    }

    public Player MakeRemotePlayer(TransformVO vo) //다른 사람이 연결했을때 생성해주기 위한 함수
    {
        Player rpc = Instantiate(playerPrefab, transform); //플레이어 생성

        rpc.InitPlayer(vo, true); //초기화
        rpc.SetTransform(vo.position); //target 설정

        playerList.Add(vo.socketId, rpc); //playerList에 추가해준다.
        return rpc;
    }
}