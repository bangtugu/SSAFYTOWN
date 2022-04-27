```
const int MOVE_TICK = 30;
int  _sumTick = 0;
int _lastIndex = 0;
public void Update(int deltaTick)
{
    if (_lastIndex >= _points.Count)
    {
        _lastIndex = 0;
        _coints.clear();
        _board.Initialize(_board.Size, this);
        Initialize(1, 1, _board);
    }
    
    // 이동 쿨타임을 체크해서 이동시킨다
    _sumTick += deltaGTick;
    if (_sumTick >= MOVE_TICK)
    {
        _sumTick = 0;
        
        PosY = _points[_lastIndex].Y;
        PosX = _points[_lastINdex].X;
        _lastIndex++;
    }
    
    // 애니메이션 갱신
    // _anim.Update(deltaTick);
    
    // 스킬 쿨타임을 체크해서 스킬 날린다
    // _skill.Update(deltaTick);
    
    // 물리 적용 (중력 등)
    // _chysics.Update(deltaTick);
}

// AnimationComponent _anim = new AnimationComponent();
// SkillComponent _skill = new SkillComponent();
// PhysicsComponent _physics = new PhysicsComponent();
