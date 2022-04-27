using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RefreshHandler : MonoBehaviour, IMsgHandler
{
    public void HandleMsg(string payload)
    {
        TransformListVO vo = JsonUtility.FromJson<TransformListVO>(payload); //json으로 온 데이터를 TransformListVO의 형태로 받아준다
        NetworkManager.RefreshUser(vo.dataList); //NetworkManager에 있는 RefreshUSer를 실행시켜줍니다
    }
}