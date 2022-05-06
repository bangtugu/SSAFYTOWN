```
public class SceneManagerEx
{
    public BaseScene CurrentScene
    { get { return GameObject.FindObjectOfType<BaseScene>(); } }

    
    public void LoadScene(Define.Scene type)
    {
        CurrentScene.Clear();
        SceneManager.LoadScene(GetSceneName(type));
    }
    
    string GetSceneName(Define.Scene type)
    {
        string name = System.Enum.GetName(typeof(Define.Scene), type);
        return name;
    }
}
```
```
public abstract class BaseScene : MonoBehaviour
{
	public Define.Scene SceneType { get; protected set; } = Define.Scene.Unknown;
	
	void Awake()
	{
		Init();
	}
	
	protected virtual void Init()
	{
		Object obj = GameObject.FindObjectOfType(typeof(EventSystem));
		if (obj == null)
			Managers.Resource.Instantiate("UI/EventSystem").name = "@EventSystem";
	}
	
	public abstract void Clear();
}
```
```
public class GameScene : BaseScene
{
	protected override void Init()
	{
		base.Init();
		
		SceneType = Define.Scene.Game;
		
		Managers.UI.ShowSceneUI<UI_Inven>();
	}
	
	public override void Clear()
    {
        
    }
}
```
```
public class LoginScene : BaseScene
{
    protected override void Init()
	{
		base.Init();
		
		SceneType = Define.Scene.Login;
	}
    
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Q))
        {
            //SceneManager.LoadScene("Game");
            Managers.Scene.LoadScene(Define.Scene.Game);
        }
    }
	
	public override void Clear()
    {
        Debug.Log("LoginScene Clear!");
    }
}
