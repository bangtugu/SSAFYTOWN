using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public bool isRemote; //내가 조종하는 캐릭터일시 false 
    public int socketId; //이 캐릭터의 socketId;

    private float speed = 5f;

    private float lerpSpeed = 4f;

    private float h;
    private float v;

    private Vector3 dir;

    private Vector2 targetPos; //내가 조종하는 캐릭터가 아닐경우 서버에서 오는 position 정보를 넣어준다

    private WaitForSeconds ws = new WaitForSeconds(1 / 5); //200ms주기로 데이터 보내기

    private void Start()
    {

    }

    private void Update()
    {
        if (isRemote) //내가 조종하는 캐릭터가 아니라면 그 캐릭터의 position을 부드럽게 이동시켜준다.
        {
            transform.position = Vector3.Lerp(transform.position, targetPos, lerpSpeed * Time.deltaTime);
        }
        else
        {
            if (Input.GetAxisRaw("Horizontal") != 0 || Input.GetAxisRaw("Vertical") != 0) //wasd, 방향키를 눌렀을 시
            {
                //값을 받아와서
                h = Input.GetAxisRaw("Horizontal");
                v = Input.GetAxisRaw("Vertical");

                //어디로 이동해야하는지 방향만 받는다.
                dir = new Vector3(h, v, 0).normalized;
                //그 방향으로 이동해준다.
                Move(dir);
            }
        }
    }

    public void InitPlayer(TransformVO vo, bool isRemote) //플레이어 생성시 해줘야 할것들
    {
        this.socketId = vo.socketId;
        this.isRemote = isRemote;

        transform.position = vo.position;

        if (!isRemote)
        {
            StartCoroutine(SendData()); //만약 내가 조종하는 캐릭터라면 서버에 데이터를 보내준다.
        }
    }

    IEnumerator SendData()
    {
        while (true)
        {
            TransformVO vo = new TransformVO();  //나의 position에 대한 정보를 넣는다.
            vo.socketId = socketId;
            vo.position = transform.position;

            DataVO dataVO = new DataVO("TRANSFORM", JsonUtility.ToJson(vo));  //TRANSFORM이라는 타입, 위에 만든 vo를 json화 하여 dataVO를 만들어준다.

            SocketClient.SendDataToSocket(JsonUtility.ToJson(dataVO)); //그걸 한번 더 json화 시켜 서버에 보낸다.

            yield return null;
        }
    }

    public void Move(Vector3 dir)
    {
        if (isRemote) return; //원래는 playerinput, playermove, 현재 스크립트 등으로 나누어 input과 move스크립트 enable을 끄거나 키는 방식이 좋습니다.
        transform.Translate(dir * speed * Time.deltaTime); //그 방향으로 이동시켜준다.
    }

    public void SetTransform(Vector2 pos) //내가 조종하는 캐릭터가 아닐경우 서버에서 오는 position을 target에 저장해줘야한다.
    {
        if (isRemote)
        {
            targetPos = pos;
        }
    }
}
