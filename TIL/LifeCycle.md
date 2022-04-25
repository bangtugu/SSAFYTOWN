- edit > Project Settings > Input : Input Manager에서 Button 설정 가능 (추가나 기존변경도 가능)

```
public class LifeCycle : MonoBehaviour
{
    //초기화
    void Awake() //게임 오브젝트 생성할 때 최초 실행
    {
        Debug.Log("플레이어 데이터가 준비되었습니다.");
    }
    
    void Start() //업데이트 시작 직전 최초 실행
    {
        Debug.Log("사냥 장비를 챙겼습니다.");
    }
    
    //활성화
    void OnEnable() //게임 오브젝트가 활성화되었을 때
    {
        Debug.Log("플레이어가 로그인했습니다.");
    }
    
    //물리
    void FixedUpdate() //물리 연산 업데이트 (고정된 실행 주기로 CPU를 많이 사용)
    {
        Debug.Log("이동~");
    }
    
    //게임로직
    void Update() //게임 로직 업데이트 (환경에 따라 실행 주기가 떨어질 수 있음)
    {
        if (Input.anyKeyDown) //아무 입력을 최초로 받을 때 true
            Debug.Log("플레이어가 아무 키를 눌렀습니다.");
        
        if (Input.anyKey) //아무 입력을 받으면 true
            Debug.Log("플레이어가 아무 키를 누르고 있습니다.");
        
        //키보드 버튼 입력을 받으면 true
        if (Input.GetKeyDown(KeyCode.Return)) //Return이 엔터, Escape가 이에스씨
            Debug.Log("아이템을 구입하였습니다.");

        if (Input.GetKey(KeyCode.LeftArrow))
            Debug.Log("왼쪽으로 이동 중");
        
        if (Input.GetKeyUp(KeyCode.RightArrow))
            Debug.Log("오른쪽 이동을 멈추었습니다.");
        
        //마우스 버튼 입력을 받으면 true
        if (Input.GetMouseButtonDown(0)) //왼쪽버튼0 오른쪽버튼1
            Debug.Log("미사일 발사!");
        
        if (Input.GetMouseButton(0))
            Debug.Log("미사일 모으는 중...");
        
        if (Input.GetMouseButtonUp(0))
            Debug.Log("슈퍼 미사일 발사!!");
        
        //Input 버튼 입력을 받으면 true
        if (Input.GetButtonDown("Jump"))
            Debug.Log("점프!");
        
        if (Input.GetButton("Jump"))
            Debug.Log("점프 모으는 중...");
        
        if (Input.GetButtonUp("Jump"))
            Debug.Log("슈퍼 점프!!");
        
        if (Input.GetButton("Horizontal")) {
            Debug.Log("횡 이동 중..."
                      //수평, 수직 버튼 입력을 받으면 float
                      + Input.GetAxis("Horizontal")
                      //오브젝트는 변수 transform을 항상 가지고 있음
                      + Input.GetAxisRaw("Horizontal"))
                
		if (Input.GetButton("Vertical")) {
            Debug.Log("종 이동 중..."
                      + Input.GetAxisRaw("Vertical"));
        }
            
        Vector3 vec = new Vector3(
        	Input.GetAxisRaw("Horizontal"),
	        Input.GetaxisRaw("Vertial") * Time.deltaTime); //이전 프레임 완료까지 걸린 시간으로 값은 프레임이 적으면 크고, 프레임이 많으면 작음
            //Translate: 벡터에 곱하기, Vector 함수: 시간 매개변수에 곱하기
        
        Debug.Log("몬스터 사냥!!");
    }
    
    void LateUpdate() //모든 업데이트 끝난 후
    {
        Debug.Log("경험치 획득.");
    }
    
	//비활성화
    void OnDisable() //게임 오브젝트가 비활성화되었을 때
    {
        Debug.Log("플레이어가 로그아웃했습니다.");
    }
    
    //해체
    void OnDestroy() //게임 오브젝트가 삭제될 때
    {
        Debug.Log("플레이어 데이터를 해제하였습니다.");
    }
    
}
