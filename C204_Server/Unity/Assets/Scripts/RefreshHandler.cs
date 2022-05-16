using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RefreshHandler : MonoBehaviour, IMsgHandler
{
    public void HandleMsg(string payload)
    {
        TransformListVO vo = JsonUtility.FromJson<TransformListVO>(payload); //json���� �� �����͸� TransformListVO�� ���·� �޾��ش�
        NetworkManager.RefreshUser(vo.dataList); //NetworkManager�� �ִ� RefreshUSer�� ��������ݴϴ�
    }
}