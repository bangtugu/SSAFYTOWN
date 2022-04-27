using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConnectHandler : MonoBehaviour, IMsgHandler
{
    public void HandleMsg(string payload)
    {
        Debug.Log("test");
        TransformVO vo = JsonUtility.FromJson<TransformVO>(payload); //json으로 온 데이터를 TransformVO의 형태로 받아준다
        NetworkManager.ConnectUser(vo); //NetworkManager에 있는 ConnectUser를 실행시켜줍니다
    }
}