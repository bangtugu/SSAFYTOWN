- 물체 필수 요소 : Mesh, Material, Collider, RigidBody

- 물리효과를 받기 위한 컴포넌트

    - RigidBody는 중력의 영향을 받게 됨

- Mass 수치가 높을수록 충돌이 무거워짐

- Use Gravitiy로 중력 받는지를 결정

- Is Kinematic은 외부 물리 효과를 무시 (움직이는 함정 만들 때 유용)

    - 충돌은 보이는 것이 아닌 Collider에 따르고 없으면 통과됨

    - Material은 오브젝트의 표면 재질을 결정하는 컴포넌트

- 재질 편집은 새로 Material 생성해서 적용해야 가능

- Metalic은 금속 재질 수치

- Smoothness는 빛 반사 수치

- Texture는 재질에 들어가는 이미지로 Albedo 왼쪽 네모안에 끌어다 넣을 수 있음

- Tiling은 텍스쳐 반복 타일 개수 (소수점으로 주면 소수만큼 텍스쳐가 잘려서 들어감)

- Emission은 텍스쳐 발광(밝기) 조절 (빛이 물리적으로 나오는건 아님)

    - Physics Material은 탄성과 마찰을 다루는 물리적인 재질

- Bounciness는 탄성력으로 높을수록 많이 튀어오름

- Bounciness Combine은 다음 탄성을 계산하는 방식 (합산은 최대로)

- Friction Combine은 다음 마찰력을 계산하는 방식 (합산은 최소로)
