```
public class PlayerController : MonoBehaviour
{
    [SerializeField]
    float _speed = 10.0f;
    
    //bool _moveToDest = false;
    Vector3 _destPos;

    void Start()
    {
        Managers.Input.KeyAction -= OnKeyboard; //두번 들어가는거 방지
        Managers.Input.KeyAction += OnKeyboard;
        Managers.Input.MouseAction -= OnMouseClicked;
        Managers.Input.MouseAction += OnMouseClicked;
        
        Managers.Resource.Instantiate("UI/UI_Button");
        
        Tank tank1 = new Tank(); // Intance를 만든다
        tank1.speed = 11.0f;
        Tank tank2 = new Tank(); // Intance를 만든다
        tank2.speed = 21.0f;
        Tank tank3 = new Tank(); // Intance를 만든다

    }

    //float _yAngle = 0.0f;
    //float wait_run_ratio = 0;
    
    public enum PlayerState
    {
        Die,
        Moving,
        Idle,
        //Channeling,
        //Jumping,
        //Falling,
    }
    
    PlayerState _state = PlayerState.Idle;
    
    void UpdateDie()
    {
        // 죽었으니 아무것도 못함
    }
    
    void UpdateMoving()
    {
        Vector3 dir = _destPos - transform.position;
        if (dir.magnitude < 0.0001f)
        {
            //_moveToDest = false;
            _state = PlayerState.Idle;
        }
        else
        {
            float moveDist = Mathf.Clamp(_speed * Time.deltaTime,
                                         0, dir.magnitude);
            //float moveDist = _speed * Time.deltaTime;
            //if (moveDist >= dir.magnitude)
            //    moveDist = dir.magnitude;
            //transform.position += dir.normalized * _speed * Time.deltaTime;
            transform.position += dir.normalized * moveDist;
            transform.rotation = Quaternion.Slerp
                (transform.rotation,
                 Quaternion.LookRotation(dir),
                 20 * Time.deltaTime);
            //transform.LookAt(_destPos);
        }

        // 애니메이션
        //wait_run_ratio = Mathf.Lerp(wait_run_ratio, 1, 10.0f * Time.deltaTime);
        Animator anim = GetComponent<Animator>();
        //anim.SetFloat("wait_run_ratio", wait_run_ratio);
        //anim.Play("WAIT_RUN");
        // 현재 게임 상태에 대한 정보를 넘겨준다
        anim.SetFloat("speed", _speed);
        
    }
    
    // 인자를 넣으려면 먼저 사용한게 우선
    void OnRunEvent(string a)
    {
        // 사운드팩?
		Debug.Log("뚜벅 뚜벅~ {a}");
    }
    
    void UpdateIdle()
    {
        // 애니메이션
        //wait_run_ratio = Mathf.Lerp(wait_run_ratio, 0, 10.0f * Time.deltaTime);
        Animator anim = GetComponent<Animator>();
        //anim.SetFloat("wait_run_ratio", wait_run_ratio);
        //anim.Play("WAIT_RUN");
        
        anim.SetFloat("speed", 0);
    }
    
    void Update()
    {
        //_yAngle += Time.deltaTime * 100.0f;
        if (_moveToDest)
        {
            
        }
        
        switch(_state)
        {
            case PlayerState.Die:
                UpdateDie();
                break;
            case PlayerState.Moving:
                UpdateMoving();
                break;
            case PlayerState.Idle:
                UpdateIdle();
                break;
        }
    }

    void OnKeyboard()
    {
        // 절대 회전값
        //transform.eulerAngles = new Vector3(0.0f, _yAngle, 0.0f);

        // +- delta
        //transform.Rotate(new Vector3(0.0f, Time.deltaTime * 100.0f, 0.0f));

        //tranform.rotation = Quaternion.Euler(new Vector3(0.0f, _yAngle, 0.0f));

        if (Input.GetKey(KeyCode.W))
        {
            //transform.rotation = Quaternion.LookRotation(Vector3.forward);
            transform.rotation = Quaternion.Slerp
                (transform.rotation,
                 Quaternion.LookRotation(Vector3.forward),
                 0.2f); //0.0f은 앞에, 1.0f은 뒤에 우선
            transform.position += Vector3.forward * Time.deltaTime * _speed;
        }

        if (Input.GetKey(KeyCode.S))
        {
            transform.rotation = Quaternion.Slerp
                (transform.rotation,
                 Quaternion.LookRotation(Vector3.back),
                 0.2f);
            //transform.Translate(Vector3.forward * Time.deltaTime * _speed);
            transform.position += Vector3.back * Time.deltaTime * _speed;
        }

        if (Input.GetKey(KeyCode.A))
        {
            transform.rotation = Quaternion.Slerp
                (transform.rotation,
                 Quaternion.LookRotation(Vector3.left),
                 0.2f);
            transform.position += Vector3.left * Time.deltaTime * _speed;
        }

        if (Input.GetKey(KeyCode.D))
        {
            transform.rotation = Quaternion.Slerp
                (transform.rotation,
                 Quaternion.LookRotation(Vector3.right),
                 0.2f);
            transform.position += (Vector3.right * Time.deltaTime * _speed;
        }
        
        _moveToDest = false;                           
    }
    
    void OnMouseClicked(Define.MouseEvent evt)
    {
        if (_state == PlayerState.Die)
            return;
        
    	//if (evt != Define.MouseEvent.Click)
        //    return;
        
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        Debug.DrawRay(Camera.main.transform.position,
                          ray.direction * 100.0f, Color.red, 1.0f);
            
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit, 100.0f, LayerMask.GetMask("Wall")))
        {
            _destPos = hit.point;
            //_moveToDest = true;
            _state = PlayerState.Moving;
        }
    }
}
