```
// 1. 위치 벡터
// 2. 방향 벡터
struct MyVector
{
    public float x;
    public float y;
    public float z;
    
    // 피타고라스 정리
    public float magnitude { get { return Mathf.Sqrt(x*x + y*y + z*z); } }
    public MyVector normalized
    { get { return new MyVector(x/magnitude, y/magnitude, z/magnitude); } }
    
    public MyVector(float x, float y, float z) 
    { this.x = x; this.y = y; this.z = z; }
    
    public static MyVector operator +(MyVector a, MyVector b)
    {
        return new MyVector(a.x + b.x, a.y + b.y, a.z + b.z);
    }
    
     public static MyVector operator -(MyVector a, MyVector b)
    {
        return new MyVector(a.x - b.x, a.y - b.y, a.z - b.z);
    }
    
    public static MyVector operator *(MyVector a, float d)
    {
        return new MyVector(a.x * d, a.y * d, a.z * d);
    }
}

public class PlayerController : MonoBehaviour
{
    [SerializeField] //객체지향적 관점에서 외부에 노출할 필요없으므로 public 대신 사용
    float speed = 10.0f;
    //public GameObject _obj; 외부에서 뽑아오지 않고 툴로 연결 가능
    
 	void Start()
    {
        //MyVector pos = new MyVector(0.0f, 10.0f, 0.0f);
        //pos += new MyVector(0.0f, 2.0f, 0.0f);
        
        MyVector to = new MyVector(10.0f, 0.0f, 0.0f);
        MyVector from = new MyVector(5.0f, 0.0f, 0.0f);
        MyVector dir = to - from; //(5.0f, 0.0f, 0.0f)
        
        dir = dir.normalized; //(1.0f, 0.0f, 0.0f)
        
        MyVector newPos = from + dir * _speed;
        
        //방향 벡터
        	// 1. 거리(크기) 5 magnitude
        	// 2. 실제 방향 ->
    }
    
    // GameObject (Player)
    	// Transform
    	// PlayerController (*)
    
    void Update()
    {
        //Local -> World
        //TransformDirection
        
        //World -> Local
        //InverseTransformDirection
        //transform.position += new Vector3(1.0f, 1.0f, 1.0f);
        
		if (Input.GetKey(KeyCode.W))
            //transform.position += new Vector3(0.0f, 0.0f, 1.0f)
            //transform.position += transform.TransformDirection(
            transform.Translate(Vector3.forward * Time.deltaTime * _speed);
        if (Input.GetKey(KeyCode.S))
            transform.Translate(Vector3.back * Time.deltaTime * _speed);
        if (Input.GetKey(KeyCode.A))
            //transform.position -= new Vector3(1.0f, 0.0f, 0.0f)
            //transform.position += transform.TransformDirection(
            transform.Translate(Vector3.left * Time.deltaTime * _speed);
        if (Input.GetKey(KeyCode.D))
            transform.Translate(Vector3.right * Time.deltaTime * _speed);
    }
}
