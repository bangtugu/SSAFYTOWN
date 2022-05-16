using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConnectHandler : MonoBehaviour, IMsgHandler
{
    public void HandleMsg(string payload)
    {
        Debug.Log("test");
        TransformVO vo = JsonUtility.FromJson<TransformVO>(payload); //json���� �� �����͸� TransformVO�� ���·� �޾��ش�
        NetworkManager.ConnectUser(vo); //NetworkManager�� �ִ� ConnectUser�� ��������ݴϴ�
    }
}