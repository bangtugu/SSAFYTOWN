```
public class MyBall : MonoBehaviour
{
    Rigidbody rigid;
    
    void Start () {
        
    	rigid = GetComponent<Rigidbody>(); //자신의 <>타입 컴포넌트를 가져옴
        rigid.velocity = Vector3.right; //현재 이동속도
        //Vec의 방향과 크기로 힘을 줌
        rigid.AddForce(Vector3.Up * 50, ForceMode.Impulse); //힘을 주는 방식(가속, 무게 반영)으로 캐릭터 점프에 자주 쓰이며, Mass 무게 값이 클수록 움직이는데 더 많은 힘이 필요
    }
    
    void FixedUpdate () {
        rigid.velocity = new Vector3(2, 4, 3); //RigidBody 관련은 FixedUpdate에
        //#1.속력 바꾸기
        rigid.velocity = Vector3.forward;

        //#2.힘을 가하기
        //Edit > Project Settings > Input에서 ("")안의 이름 확인 가능
        if(Input.GetButtonDown("Jump")) {
            //AddForce의 힘 방향으로 계속 속도 velocity가 증가
			rigid.AddForce(Vector3.Up * 25, ForceMode.Impulse);
            Debug.Log(rigid.velocity);
        }
        
        //RigidBody를 사용한 이동은 보다 자연스러움
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("vertical");
        Vector3 vec = new Vector3(h, 0, v);
        
       	rigid.AddForce(vec, ForceMode.Impulse); //공을 움직이는 게임에 사용하면 좋음
        
        //#3.회전력
        rigid.AddTorque(Vector3, back); //Vec방향을 축으로 회전력 생김(이동방향 주의)
    }
    
    private void OnTriggerStay(Collider other) //콜라이더가 계속 충돌하고 있을 때 호출
    {
        if(other.name == "Cube")
            rigid.AddForce(Vector3.up * 2, ForceMode.Impulse);
    }
    
    //실제 물리적인 충돌로 발생하는 이벤트
    void OnCollisionEnter(Collision collision) { }
    void OnCollisionStay(Collision collision) { }
    void OnCollisionExit(Collision collision) { }
    
    //콜라이더 충돌로 발생하는 이벤트
    void OnTriggerEnter(Collision other) { }
    void OnTriggerStay(Collision other) { }
    void OnTriggerExit(Collision other) { }
    
    public void Jump()
    {
        rigid.AddForce(Vector3.up * 20, ForceMode.Impulse);
    }
}
```
```
public class OtherBall : MonoBehaviour
{
	MeshRenderer mesh; 오브젝트의 재질 접근은 MeshRenderer를 통해서
	Material mat;
	
    void Start ()
	{
		mesh = GetComponent<MeshRenderer>();
		mat = mesh.material;
    }
 	//CollisionEnter : 물리적 충돌이 시작할 때 호출되는 함수
	private void OnCollisionEnter(Collision collision) //충돌 정보 클래스
    {	
        if(collision.gameObject.name == "My Ball")
            //Color: 기본 색상 클래스, Color32: 255 색상 클래스
            mat.color = new Color(0, 0, 0);
    }
    
    private void OnCollisionStay(Collision collision)
    {
        
    }
    
    //CollisionExit : 물리적 충돌이 끝났을 때 호출되는 함수
    private void OnCollisionExit(Collision collision)
    {
        if(collision.gameObject.name == "My Ball")
            mat.color = new Color(1, 1, 1);
    }
    
}
```
투명은 Rendering Mode에서 Transparent 고르고 color에서 A 조절

Box Collider에서 Is Trigger 체크
