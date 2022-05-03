```
public class InputManager
{
	public Action KeyAction = null;
    public Action<Define.MouseEvent> MouseAction = null;
    
    bool _pressed = false;
    
	public void OnUpdate()
	{
        if (EventSystem.current.IsPointerOverGameObject()) //UI클릭되면 return
            return;
        
		if (Input.anyKey && KeyAction != null)
			KeyAction.Invoke();
        
        if (MouseAction != null)
        {
            if (Input.GetMouseButton(0))
            {
                MouseAction.Invoke(Define.MouseEvent.Press);
                _pressed = true;
            }
            else
            {
                if(_pressed)
	                MouseAction.Invoke(Define.MouseEvent.Click);
                _pressed = false;
			}
        }
	}
}
