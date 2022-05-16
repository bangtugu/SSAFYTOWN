using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NetworkManager : MonoBehaviour
{
    //�̱���
    private static NetworkManager _instance;
    public static NetworkManager Instance
    {
        get => _instance;
        set => _instance = value;
    }

    private int socketId = 0; //���� ���� id

    [SerializeField]
    private Player playerPrefab; //�÷��̾� ������

    public object lockObj = new object(); //lock�� ���� object ����

    //�����͸� �޾��� ������
    private TransformVO connectVO = null;
    private List<TransformVO> refreshList = null;

    private bool isConnectRefresh = false;
    private bool isUserRefresh = false;

    private Dictionary<int, Player> playerList = new Dictionary<int, Player>(); //���� ������ ������� �� ��ųʸ�

    private void Awake()
    {
        Instance = this;
    }

    //�µ����͵��� �����ϰ� ó������� �� ���� ���ݴϴ�.
    public static void ConnectUser(TransformVO vo)
    {
        lock (Instance.lockObj)
        {
            Instance.connectVO = vo;
            Instance.isConnectRefresh = true;
        }
    }

    //�µ����͵��� �����ϰ� ó������� �� ���� ���ݴϴ�.
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
        socketId = connectVO.socketId; //socketId �������ְ�

        Player p = Instantiate(playerPrefab, transform); // �ڽ��� �÷��̾ �������ݴϴ�.
        p.InitPlayer(connectVO, false); //�ʱ�ȭ ���ݴϴ�.
    }
    private void UserRefresh()
    {
        foreach (TransformVO vo in refreshList)
        {
            if (vo.socketId != socketId) //���� �ٸ� �����̶��
            {
                Player p = null;

                if (playerList.TryGetValue(vo.socketId, out p))
                {
                    p.SetTransform(vo.position); //������ ��ġ�� �־��ֱ�
                }
                else
                {
                    p = MakeRemotePlayer(vo); //remote�÷��̾� ����
                }
            }
            else
            {
                //�� �������� ���
            }
        }
    }

    public Player MakeRemotePlayer(TransformVO vo) //�ٸ� ����� ���������� �������ֱ� ���� �Լ�
    {
        Player rpc = Instantiate(playerPrefab, transform); //�÷��̾� ����

        rpc.InitPlayer(vo, true); //�ʱ�ȭ
        rpc.SetTransform(vo.position); //target ����

        playerList.Add(vo.socketId, rpc); //playerList�� �߰����ش�.
        return rpc;
    }
}