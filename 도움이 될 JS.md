<h1>프로젝트에 이용할 수 있는 JS 코드</h1>

1. toggleClass, addClass, removeClass

사용방법 : id값을 받아온 후 .classList.(선택) 이런 식으로 작성한다.

toggleClass는 영어 단어 뜻 단추, 딸깍 이런 의미에 맞게 계속해서 event를 on/off식으로 실행할 수 있다.
addClass도 비슷하다고 볼 수 있지만 실행이 지속적이지 않고 on된 후 끝나버린다.
removeClass는 적용된 class를 지우는 역할을 한다.

모두 잘 활용하면 더 간단한 코드를 작성할 수 있을 것 같다.

기존의 예
    1. class 받아오기
    2. for문 돌려서 style 지정

변경의 예
    1. id 받아오기
    2. 기존의 css 클래스를 추가시켜주기
