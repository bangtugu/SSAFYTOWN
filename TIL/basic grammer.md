// 프로그래밍 마침표는 ;
// 코드 수정 후에는 save 잊지 말기
// 대본 스크립트를 드래그해서 인스펙터 창에 넣기


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// 선언 > 초기화 > 호출(사용)
public class NewBehaviourScript : MonoBehaviour //유니티 게임 오브젝트 클래스
{
	int health = 30; //함수 바깥에 선언되면 전역변수
    
    void Start ()
    {
        Debug.Log("Hello Unity!"); //콘솔창에 메시지 출력

        //1.변수
        int level = 5; //정수형 데이터
        float strength = 15.5f; //숫자형 데이터
        string playerName = "검사"; //문자열 데이터
        bool isFullLevel = false; //논리형 데이터

        Debug.Log("용사의 이름은?");
        Debug.Log(playerName);
        Debug.Log("용사의 레벨은?");
        Debug.Log(level);
        Debug.Log("용사의 힘은?");
        Debug.Log(strength);
        Debug.Log("용사는 만렙인가?");
        Debug.Log(isFullLevel);

        //2.그룹형 변수
        string[] monsters = {"슬라임", "사막뱀", "악마"};
        int[] monsterLevel = new int[3];
        monsterLevel[0] = 1;
        monsterLevel[1] = 6;
        monsterLevel[2] = 20;

        Debug.Log("맵에 존재하는 몬스터");
        Debug.Log(monsters[0]);
        Debug.Log(monsters[1]);
        Debug.Log(monsters[2]);

        Debug.Log("맵에 존재하는 몬스터의 레벨");
        Debug.Log(monsterLevel[0]);
        Debug.Log(monsterLevel[1]);
        Debug.Log(monsterLevel[2]);

        List<string> items = new List<string>();
        items.Add("생명물약30");
        items.Add("마나물약30");

        items.RemoveAt(0);

        Debug.Log("가지고 있는 아이템");
        Debug.Log(items[0]);
        Debug.Log(items[1]); //크기를 벗어난 탐색은 오류를 발생

        //3.연산자
        int exp = 1500;

        exp = 1500 + 320;
        exp = exp - 10;
        level = exp / 300;
        strength = level * 3.1f;

        Debug.Log("용사의 총 경험치는?");
        Debug.Log(exp);
        Debug.Log("용사의 레벨은?");
        Debug.Log(level);
        Debug.Log("용사의 힘은?");
        Debug.Log(strength);

        int nextExp = 300 - (exp % 300);
        Debug.Log("다음 레벨까지 남은 경험치는?");
        Debug.Log(nextExp);

        string title = "전설의";
         Debug.Log("용사의 이름은?");
        Debug.Log(title + " " + playerName);

        int fullLevel = 99;
        isFullLevel = level == fullLevel;
        Debug.Log("용사는 만렙입니까?" + isFullLevel);

        bool isEndTutorial = level > 10;
        Debug.Log("튜토리얼이 끝난 용사입니까?" + isEndTutorial);

        int health = 30; //함수 안에서 선언되면 지역변수
        int mana = 15;
        //bool isBadCondition = health <= 50 && mana <= 20; //and연산자
        bool isBadCondition = health <= 50 || mana <= 20; //or연산자
        Debug.Log("용사의 상태가 나쁩니까?" + isBadCondition);

        string condition = isBadCondition ? "나쁨" : "좋음";

        //4.키워드
        //int float string bool new List //변수이름이가 값으로 사용불가

        //5.조건문
        if (condition == "나쁨") {
            Debug.Log("플레이어 상태가 나쁘니 아이템을 사용하세요.");
        }
        else {
            Debug.Log("플레이어 상태가 좋습니다.");
        }
        if (isBadCondition && items[0] == "생명물약30") {
            items.RemoveAt(0);
            health += 30;
            Debug.Log("생명포션30을 사용하였습니다.");
        }
        else if (isBadCondition && items[0] == "마나물약30") {
            items.RemoveAt(0);
            mana += 30;
            Debug.Log("마나포션30을 사용하였습니다.");
        }
        //변수의 값에 따라 로직 실행
        swith (monster[1]) {
            case "슬라임":
            case "사막뱀":
                Debug.Log("소형몬스터 출현!");
                break;
            case "악마":
                Debug.Log("중형몬스터 출현!");
                break;
            case "골렘":
                Debug.Log("대형몬스터 출현!");
                break;
            //모든 케이스 통과한 후 실행
            default:
                monsterAlarm = "??? 몬스터 출현!";
                break;
        }

        //6.반복문
        while (health > 0) {
            health--;
            if (health > 0)
                Debug.Log("독 데미지를 입었습니다." + health);
            else
                Debug.Log("사망하였습니다.");
            if (health == 10) {
                Debug.Log("해독제를 사용합니다.");
                break;
            }
        }

        for (int count=0 ; count<10 ; count++) {
            health++;
            Debug.Log("붕대로 치료 중..." + health);
        }

        //그룹형변수길이 .Length(배열) .Count(리스트)
        for (int index = 0 ; index < monsters.Length ; index++) {
            Debug.Log("이 지역에 있는 몬스터" + monsters[index]);
        }

        //for의 그룹형변수 탐색 특화
        foreach (string monster in monsters) {
            Debug.Log("이 지역에 있는 몬스터 : " + monster);
        }
        
        //7.함수 (메소드)
        health = Heal(health); //함수의 매개변수는 실제 넣을 변수이름과 같을 필요 없음
        Heal();
        
        for (int index=0; index < monsters.Length; index++) {
            Debug.Log("용사는 " + monsters[index] + "에게"
                      + Battle(monsterLevel[index]));
        }
        
        //8.클래스: 하나의 사물(오브젝트)와 대응하는 로직
        Player player = new Player(); //인스턴스: 정의된 클래스를 변수 초기화로 실체화
        player.id = 0;
        player.name = "법사";
        player.title = "현명한";
        player.strength = 2.4f;
        player.weapon = "나무 지팡이";
        Debug.Log(player.Talk());
        Debug.Log(player.HasWeapon());
        
        player.LevelUp();
        Debug.Log(player.name + "의 레벨은 " + player.level + " 입니다.");
        Debug.Log(player.move());
    }
    
    //health = Heal(health);에 해당
    int Heal(int currentHealth)
    {
        currentHealth += 10;
        Debug.Log("힐을 받았습니다. " + currentHealth);
        return currentHealth;
    }
    //Heal();에 해당
    void Heal() //반환 데이터가 없는 함수 타입
    {
     	health += 10;
        Debug.Log("힐을 받았습니다. " + health);
    }
    string Battle(int monsterLevel)
    {
        string result;
        if (level >= monsterLevel)
            result = "이겼습니다.";
      	else
            result = "졌습니다.";
        
        return result;
    }
}

//public은 외부 클래스에 공개로 설정하는 접근자로 멤버변수가 생김
public class Actor {
    //앞에 public 안 쓴다면 private(외부 클래스에 비공개로 설정)가 생략된 것
    public int id;
    public string name;
    public string title;
    public string weapon;
    public float strength;
    public int level;
    
    public string Talk()
    {
        return "대화를 걸었습니다.";
    }
    public string HasWeapon()
    {
        return weapon;
    }
    public void LevelUp()
    {
        level = level + 1;
    }
}

public class Player : Actor {
    
    public string move()
    {
        return "플레이어는 움직입니다.";
    }
}
