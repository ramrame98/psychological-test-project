// 0. 'C(ISFJ)',
//   1. 'C++(ESTP)',
//   2. 'C#(ISTP)',
//   3. 'Java(INTP)',
//   4. 'Javascript(ESFJ)',
//   5. 'Typescript(ISTJ)',
//   6. 'Kotlin(ENTJ)',
//   7. 'Assembly(INTJ)',
//   8. 'Go(ENFJ)',
//   9. 'PHP(ISFP)',
//   10. 'Python(ENFP)',
//   11. 'Rust(INFJ)',
//   12. 'Ruby(ESFP)',
//   13. 'Swift(ENTP)',
//   14. 'R(ESTJ)'.
//   15. 'Dart(INFP)'

const qnaList = [
  {
    q: "1. 현생에 적응이 안된 월요일 아침, 사무실 안 내 자리 정돈 상태는?",
    a: [
      {
        answer: "a. 파리도 미끄러지는 나의 책상 후훗!!",
        type: [14, 5, 4, 6, 0],
      },
      {
        answer:
          "b. 내 책상은 아수라백작 왜 저번주는 깨끗했는데 오늘은 드럽지 하아…",
        type: [11, 7, 0, 1],
      },
      {
        answer: "c. 겉만 깨끗하면 되지… 책상에 다 때려박자 히힛",
        type: [15, 13, 8, 2, 1, 4, 3],
      },
      {
        answer: "d. 아 오늘은 해야지... 그렇게 내일이 되었다 키득키득",
        type: [3, 10, 9, 12, 1, 4],
      },
    ],
  },
  {
    q: "2. 퇴근 30분전 콘솔창에서 오류와 마주했을 때",
    a: [
      {
        answer: "a. 노고잉 노쉬발 = 바로 포기하고 물어볼 사람을 찾는다.",
        type: [10, 12, 15, 9, 4, 0],
      },
      {
        answer: "b. 킵고잉 노쉬발 = 검색해서 어떻게든 해결한다.",
        type: [8, 4, 11, 0, 1, 7],
      },
      {
        answer: "c. 노고잉 킵쉬발 = 하… x발 집에 가야되는데 내일 해야겠다.",
        type: [13, 1, 3, 2],
      },
      {
        answer:
          "d. 킵고잉 킵쉬발 = 입으론 한숨을 쉬며 손으론 빠르게 문제 해결중",
        type: [6, 14, 7, 5, 1, 0, 4, 3],
      },
    ],
  },
  {
    q: "3. 입사 한달 차, 직장 동료와 외근을 나갔다가 퇴근 시간 직전.. 배가 엄청 고플 때 내 행동은?",
    a: [
      { answer: "a. 오늘 힘들었는데 치맥 ㄱㄱ ??", type: [1, 10, 2, 12, 3, 4] },
      {
        answer: "b. (상대방이 먼저 제안할때까지) 먼저 제안좀 해라 쫌!!!",
        type: [14, 6, 13, 9, 4, 0, 7],
      },
      {
        answer: "c. 집에 밥 있나??? 없네… Hoxy… 같이 밥 먹고 들어갈까요??",
        type: [8, 7, 1, 0],
      },
      { answer: "d. 부끄부끄… 난 혼밥이 좋아!!!", type: [15, 11, 5, 0, 7, 3] },
    ],
  },
  {
    q: "4. 퇴근 길 예정에도 없는 소나기가 내린다면?",
    a: [
      {
        answer: 'a. 기분도 꿀꿀했는데 비와서 좋다~~" ',
        type: [11, 15, 3, 1, 7],
      },
      {
        answer: 'b. 하… 약속 있어서 풀메하고 왔는데… 빡친다…🤯" ',
        type: [12, 4, 6, 0, 5, 8, 9],
      },
      {
        answer: 'c. 어디 우비 없나?? 비 맞으러 가즈아!!!" ',
        type: [1, 2, 13, 10],
      },
      {
        answer: 'd. 오든지… 말든지… 오늘 뭐 먹지??? (긁적긁적)" ',
        type: [7, 14, 1],
      },
    ],
  },
  {
    q: "5. 일은 산더미… 근데 옆에서 놀고 있는 동료를 본다면?",
    a: [
      {
        answer: "a. 💪💪 내가 오늘 저 놈 패고 퇴사한다!!!! ",
        type: [14, 5, 1, 2, 4],
      },
      {
        answer: "b. 하… 짜증나 퇴근하고 운동이나 가자!!! 에휴…",
        type: [12, 9, 4, 0, 1, 7, 3],
      },
      {
        answer: "c. 저새킈 커피에 침 뱉어서 줘야겠다!! 키득키득",
        type: [6, 7, 8, 11],
      },
      {
        answer: "d. 으아아아악!!! 짜증 폭발!!! 울어버리자😫",
        type: [13, 3, 10, 15, 0],
      },
    ],
  },

  {
    q: "6. 신입사원이 들어왔을때 나의 반응은?",
    a: [
      {
        answer: "a. 신입사원이다!!! 잘 해줘야지!!! 뭐 좋아할까??",
        type: [10, 12, 11, 9, 1, 7, 4],
      },
      { answer: "b. 몰카!!! 몰카하자!!", type: [7, 0, 14, 5, 4] },
      {
        answer: "c. 라떼는 말이야!! 내가 바로 말차라떼!!!",
        type: [6, 8, 11, 4, 1, 0],
      },
      {
        answer: "d. 으아아아!! 내가 이구역의 미친놈이다!!! ",
        type: [13, 3, 15, 2],
      },
    ],
  },
  {
    q: '7. 사장실 틈에서 들려오는 소리 "회사가 무너져간다" 나는 팀원들에게?',
    a: [
      {
        answer: "a. 나는 아무것도 듣지 못하였다 메타",
        type: [5, 9, 7, 2, 0, 4, 3],
      },
      {
        answer: "b. 강제 임금님귀는 당나귀귀 시전!! 참자 참아!!",
        type: [0, 10, 13, 15, 4],
      },
      {
        answer: "c. 헐… 대박 호외요 호외!! 우리 회사 망한데 ㅌㅌ",
        type: [12, 14, 6, 1, 3],
      },
      {
        answer: "d. 요즘 별일 없냐는 말에… 나의 입은 이미 말하고 있다…",
        type: [8, 4, 11, 1, 0],
      },
    ],
  },
  {
    q: "8. 팀원과 눈이 마주쳤을때 나의 반응은?",
    a: [
      {
        answer: "a. 당황하지만 웃으면서 뭐 필요하세요?",
        type: [8, 4, 11, 0, 7, 3],
      },
      {
        answer: "b. 아 👟 나 뭐 잘못했나? 왜 쳐다보지… 일단 피하자",
        type: [3, 2, 15, 9, 0],
      },
      {
        answer: "c. 👉 커피 한잔? 너무 힘들어 수다 ㄱㄱ??",
        type: [10, 12, 1, 13, 4],
      },
      {
        answer: "d. (뭘 꼬라봐!!)표정으로 그만 쳐다보세요!",
        type: [14, 6, 7, 5, 1],
      },
    ],
  },
  {
    q: "9. 월급이 들어왔을때 나의 반응은?",
    a: [
      {
        answer: "a. 내 이름은 김짠돌~!! 저축부터 고고",
        type: [14, 13, 5, 3, 1, 4],
      },
      {
        answer: "b. 내 이름은 루팡!!! 월급을 훔치죠!!!!",
        type: [12, 10, 2, 7, 0, 4],
      },
      {
        answer: "c. 그래 열심히 일 했는데… 하나 정돈 사도 되겠지??",
        type: [4, 6, 9, 15, 1, 0, 7, 3],
      },
      { answer: "d. 월급이 들어왔나??? 긁적 긁적", type: [8, 0, 11] },
    ],
  },
  {
    q: "10. 퇴근시간은 다가오고 상사는 아직 일 하고 있지만 퇴근하라고 할때 나의 반응은?",
    a: [
      { answer: "a. 아...🌺같네 누구 집에 안가나??", type: [14, 13, 4, 7, 1] },
      {
        answer:
          "b. 안녕히계세요 여러분~ 저는 이 세상의 모든 굴레와 속박을 벗어던지고 퇴근합니다~",
        type: [1, 10, 2, 12, 3, 0],
      },
      {
        answer: "c. 야 갈래?? CALL!!!!!!!!!!!!!!!!!!",
        type: [15, 11, 8, 5, 0, 1],
      },
      {
        answer: "d. 나는 아무생각이 없다… 왜냐하면, 아무생각도 없기 때문이다",
        type: [9, 0, 7, 3],
      },
    ],
  },
];

const infoList = [
  {
    name: "C (ISFJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> C 언어는 1972년 켄 톰슨과 데니스 리치가 유닉스 운영체제를 만들기 위해 고안한 프로그래밍 언어이며 </br>" +
      "일반 사용자의 눈에 보이지 않는 컴퓨터 산업의 기반이 되는 곳에서 주로 쓰입니다. </br> " +
      "우리가 지금도 쓰고 있는 Windows, 리눅스, OS X와 iOS, Android, Windows Phone 모바일 운영체제의 핵심 요소인 커널은 C 언어로 만들어져 있습니다. </br> " +
      "또한 하드웨어의 호환성이 뛰어나 하드웨어를 제어할 수 있고 코드가 복잡하지 않아 상대적으로 유지보수가 쉽습니다. </br> " +
      "하지만 단점은 저수준 언어로서 배우는게 어려우며 컴파일러가 확인되지 않은 에러가 발생하여 오류 찾기가 어렵습니다.",
    book: "<span class='title_white'>책 추천:</span> c언어의 정석",
    lecture: "<span class='title_white'>강의 추천:</span> 29살의 C언어 with 거니 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Swift",
  },
  {
    name: "C++ (ESTP)",
    detail:
      "<span class='title_white'>언어 소개:</span> C++는 AT&T 벨 연구소의 비야네 스트롭스트룹이 C언어 기반으로 1983년 발표하여 발전한 프로그래밍 언어이다. </br>" +
      "기존의 C언어에 여러 가지 기능을 추가하여 만든 프로그래밍 언어이며 절차지향인 C언어와는 다리게 C++은 객체지향 언어입니다. </br>" +
      "그래서 절차지향의 단점은 보완하여 다중 상속, 템플릿, 연산자 오버로드, 예외처리인 특징을 가지고 있으며 시스템, 사무용, 게임 프로그램에 사용되고  있다.",
    book: "<span class='title_white'>책 추천:</span> 윤성우의 열혈 C++ 프로그래밍",
    lecture:
      "<span class='title_white'>강의 추천:</span> [하루 10분|C++] 누구나 쉽게 배우는 C++ 프로그래밍 입문 (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Go",
  },
  {
    name: "C# (ISTP)",
    detail:
      "<span class='title_white'>언어 소개:</span> C#은 마이크로소프트에서 개발된 객체 지향 프로그래밍 언어로서 Java 나 C++와비슷한 면들을 많이 가지고 있다.</br> " +
      "C#을 이야기 하면 자연스럽게 .NET Framework을 함께 이야기 해야할 정도로 C#은 .NET Framework을 이용하여 프로그래밍하는 대표적인 언어이다. </br>" +
      "C#은 윈도우 프로그래밍, 웹 프로그래밍, 게임 및 모바일 프로그래밍 등 모든 영역에서 사용되는 범용 프로그래밍 언어이다",
    book: "<span class='title_white'>책 추천:</span> C# 교과서",
    lecture: "<span class='title_white'>강의 추천:</span> Do it! C# 프로그래밍 입문 (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Kotlin",
  },
  {
    name: "Java (INTP)",
    detail:
      "<span class='title_white'>언어 소개:</span> 썬 마이크로시스템즈에서 1995년에 개발한 객체 지향 프로그래밍 언어. 창시자는 제임스 고슬링이다. </br> " +
      "Java의 가장 큰 특징은 플랫폼에 독립적인 언어라는 점이다. </br>" +
      "소스 코드를 기계어로 직접 컴파일하여 링크하는 C/C++의 컴파일러와 달리 자바 컴파일러는 바이트코드인 클래스 파일(.class)을 생성하고, </br>" +
      "이 파일의 바이트코드를 읽은 뒤 기계어로 바꾸어 실행하는 것은 자바 가상 머신이다.",
    book: "<span class='title_white'>책 추천:</span> Java의 정석",
    lecture: "<span class='title_white'>강의 추천:</span> [자바의정석-기초편] (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Python",
  },
  {
    name: "Javascript (ESFJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> 자바스크립트(JavaScript)는 객체(object) 기반의 스크립트 언어입니다. </br>" +
      "HTML로는 웹의 내용을 작성하고, CSS로는 웹을 디자인하며, 자바스크립트로는 웹의 동작을 구현할 수 있습니다. </br>" +
      "자바스크립트는 주로 웹 브라우저에서 사용되나, Node.js와 같은 프레임워크를 사용하면 서버 측 프로그래밍에서도 사용할 수 있습니다. </br>" +
      "현재 컴퓨터나 스마트폰 등에 포함된 대부분의 웹 브라우저에는 자바스크립트 인터프리터가 내장되어 있습니다.",
    book: "<span class='title_white'>책 소개:</span> Do it! 자바스크립트 입문",
    lecture:
      "<span class='title_white'>강의 소개:</span> 자바스크립트 기초 강의 (ES5+): 같이 노트를 작성하며 배워요 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Rust",
  },
  {
    name: "Typescript (ISTJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> 마이크로소프트에서 구현한 JavaScript의 슈퍼셋(Superset) 프로그래밍 언어. 확장자로는 .ts를 사용하며, 컴파일의 결과물로 JavaScript 코드를 출력한다. 최종적으로 런타임에서는 이렇게 출력된 JavaScript 코드를 구동시키게 된다. </br>\n" +
      "TypeScript라는 이름답게 정적 타입을 명시할 수 있다는 것이 순수한 자바스크립트와의 가장 큰 차이점이다.</br> \n" +
      "덕분에 개발 도구(IDE나 컴파일러 등)에게 개발자가 의도한 변수나 함수 등의 목적을 더욱 명확하게 전달할 수 있고, 그렇게 전달된 정보를 기반으로 코드 자동 완성이나 잘못된 변수/함수 사용에 대한 에러 알림 같은 풍부한 피드백을 받을 수 있게 되므로 순수 자바스크립트에 비해 어마어마한 생산성 향상을 꾀할 수 있다. </br>\n" +
      "즉, '자바스크립트를 실제로 사용하기 전에 있을만한 타입 에러들을 미리 잡는 것' 이 타입스크립트의 사용 목적이다.\n",
    book: "<span class='title_white'>책 소개:</span> 타입스크립트 프로그래밍",
    lecture: "<span class='title_white'>강의 소개:</span> TypeScript 강좌 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> PHP",
  },
  {
    name: "Kotlin (ENTJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> IntelliJ IDEA의 개발사 JetBrains에서 2011년에 공개한 오픈 소스 프로그래밍 언어. JVM 기반의 언어이며, Java와 유사하지만 더 간결한 문법과 다양한 기능을 추가하였다. Java와의 상호 운용이 100% 지원된다. </br>" +
      "JVM 바이트코드가 기본이지만, Kotlin/Native 컴파일러를 사용하여 기계어로 컴파일할 수 있다. 안드로이드, 스프링 프레임워크, Tomcat[2], JavaScript, Java EE, HTML5, iOS, 라즈베리 파이 등을 개발할 때 사용할 수 있다.",
    book: "<span class='title_white'>책 소개:</span> Kotlin in Action",
    lecture: "<span class='title_white'>강의 소개:</span> 새차원의 코틀린(Kotlin) 강좌 (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> C#",
  },
  {
    name: "Assembly (INTJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> 기계어는 실제로 컴퓨터의 CPU가 읽어서 실행할 수 있는 0과 1로 이루어진 명령어의 조합이다. </br>" +
      "이러한 각 명령어에 대해 사람이 알아보기 쉬운 니모닉 기호(mnemonic symbol)를 정해 사람이 좀 더 쉽게 컴퓨터의 행동을 제어할 수 있도록 한 것이 어셈블리 언어이다.",
    book: "<span class='title_white'>책 소개:</span> Arm 프로그래밍",
    lecture: "<span class='title_white'>강의 소개:</span> 배은태-어셈블리 언어 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Ruby",
  },
  {
    name: "Go (ENFJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> Go는 2009년 구글에서 일하는 로버트 그리즈머, 롭 파이크, 켄 톰프슨이 개발한 프로그래밍 언어이다. </br>" +
      "가비지 컬렉션 기능이 있고, 병행성(concurrent)을 잘 지원하는 컴파일 언어다. 구문이 C와 비슷하지만 메모리 보안, 쓰레기 수집, 구조 타이핑, CSP 스타일 병행성을 제공한다. 이 언어는 golang.org이라는 도메인 이름 때문에 종종 고랭(Golang)으로도 호칭되지만 정확한 명칭은 Go이다.",
    book: "<span class='title_white'>책 추천:</span> Tucker의 Go 언어 프로그래밍",
    lecture: "<span class='title_white'>강의 추천:</span> 초절정 Go 언어 강좌 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> C++",
  },
  {
    name: "PHP (ISFP)",
    detail:
      "<span class='title_white'>언어 소개:</span> PHP(PHP: Hypertext Preprocessor)는 C언어를 기반으로 만들어진 서버 측에서 실행되는 서버 사이드 스크립트 언어입니다.</br>" +
      "PHP는 동적 웹 페이지를 쉽고 빠르게 만들 수 있도록 해주는 데 그 목적이 있습니다.</br>" +
      "PHP로 작성된 코드를 HTML 코드 안에 추가하면, 웹 서버는 해당 PHP 코드를 해석하여 동적 웹 페이지를 생성합니다.",
    book: "<span class='title_white'>책 추천:</span> PHP 웹 프로그래밍",
    lecture: "<span class='title_white'>강의 추천:</span> 생활코딩 - PHP 기본 A 부터 Z 까지 (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Typescript",
  },
  {
    name: "Python (ENFP)",
    detail:
      "<span class='title_white'>언어 소개:</span> Phython은 웹 애플리케이션, 소프트웨어 개발, 데이터 과학, 기계 학습(ML)에 널리 사용되는 프로그래밍 언어입니다.</br>" +
      "개발자는 Python이 효율적이고 배우기 쉬우며 여러 플랫폼에서 실행될 수 있으므로 Python을 사용합니다. Phython 소프트웨어는 무료로 다운로드할 수 있고, 모든 유형의 시스템과 원활하게 통합되며, 개발 속도를 증가시킵니다.",
    book: "<span class='title_white'>책 추천:</span> Do it! 점프 투 파이썬",
    lecture:
      "<span class='title_white'>강의 추천:</span> 문과생도, 비전공자도, 누구나 배울 수 있는 파이썬(Python)! (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Java",
  },
  {
    name: "Rust (INFJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> 러스트(영어: Rust)는 모질라 리서치에서 개발한 범용 프로그래밍 언어이다. </br>" +
      "안전하고, 병렬적이며, 실용적인 언어로 디자인되었으며, 순수 함수형 프로그래밍, 액터 기반 병렬 프로그래밍, 명령형 프로그래밍, 객체 지향 프로그래밍 스타일을 지원한다.</br>",
    book: "<span class='title_white'>책 소개:</span> 만들면서 배우는 러스트 프로그래밍",
    lecture: "<span class='title_white'>강의 소개:</span> 엄청 쎈 언어! 러스트(Rust) 강의 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Javascript",
  },
  {
    name: "Ruby (ESFP)",
    detail:
      "<span class='title_white'>언어 소개:</span> Ruby는 균형잡힌 언어여머 Ruby를 만든 유키히로 마츠모토(일명 마츠)는 그가 좋아하는 언어인 Perl, Smalltalk, Eiffel, Ada, Lisp를 섞어서 명령형 프로그래밍 언어이자 함수형 언어이다.",
    book: "<span class='title_white'>책 소개:</span> 퍼펙트 루비",
    lecture: "<span class='title_white'>강의 소개:</span> Rails로 쉽고 빠른 웹사이트 만들기(Ruby Coin) (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Assembly",
  },
  {
    name: "Swift (ENTP)",
    detail:
      "<span class='title_white'>언어 소개:</span> 스위프트(영어: Swift)는 애플의 iOS와 macOS를 위한 프로그래밍 언어로 기존의 애플 운영체제용 언어인 오브젝티브-C와 함께 사용할 목적으로 만들어졌다.</br>" +
      "오브젝티브-C와 마찬가지로 LLVM으로 빌드되고 같은 런타임을 공유한다. 클로저, 다중 리턴 타입, 네임스페이스, 제네릭스, 타입 유추 등 오브젝티브-C에는 없었던 현대 프로그래밍 언어가 갖고 있는 기능을 많이 포함시켰으며 코드 내부에서 C나 오브젝티브-C 코드를 섞어서 프로그래밍하거나 스크립트 언어처럼 실시간으로 상호작용하며 프로그래밍 할 수도 있다. 언어 설명서도 함께 배포되었다.",
    book: "<span class='title_white'>책 추천:</span> 꼼꼼한 재은 씨의 스위프트 문법편",
    lecture: "<span class='title_white'>강의 추천:</span> 개발하는 정대리 스위프트 기초 문법 (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> C",
  },
  {
    name: "R (ESTJ)",
    detail:
      "<span class='title_white'>언어 소개:</span> R은 통계 계산과 그래픽을 위한 프로그래밍 언어이자 소프트웨어 환경이다. 오픈소스로 쓰여졌으며 무료이다.</br>" +
      "뉴질랜드 오클랜드 대학의 로버트 젠틀맨(Robert Gentleman)과 로스 이하카(Ross Ihaka)에 의해 시작되어 현재는 R 코어 팀이 개발하고 있다. R은 또한 GNU의 GPL 하에 배포되는 S 프로그래밍 언어의 구현으로 때때로 GNU S 로도 불린다. R는 통계 소프트웨어 개발과 자료 분석에 널리 사용되고 있으며, 패키지 개발이 용이해 통계 소프트웨어 개발에 많이 쓰이고 있다.",
    book: "<span class='title_white'>책 추천:</span> R언어 프로그래밍",
    lecture: "<span class='title_white'>강의 추천:</span> R 기초강의 (유튜브)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> Dart",
  },
  {
    name: "Dart (INFP)",
    detail:
      "<span class='title_white'>언어 소개:</span> google 구글이 javascript 자바스크립트를 대체하기 위해 2011년 개발한 웹프로그래밍 언어이다.<br>" +
      "모바일 앱, 웹 앱, 명령어 스크립트, 서버 프로그래밍 등 어떤 것이든 다트를 사용해 만들 수 있다. </br>" +
      "웹앱이 아닌 네이티브 코드로 안드로이드나 iOS용 앱을 동시에 개발 할 수 있다. </br>" +
      "java랑 유사한 문법으로 몇가지 특징만 숙지하면 쉽게 개발 할 수 있다.</br>",
    book: "<span class='title_white'>책 추천:</span> Do it! 깡샘의 플러터 & 다트 프로그래밍",
    lecture:
      "<span class='title_white'>강의 추천:</span> [코드팩토리] [입문] Dart 언어 4시간만에 완전정복 (인프런)",
    negativeLang: "<span class='title_white'>안 맞는 언어:</span> R",
  },
];
