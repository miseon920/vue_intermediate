#뷰 중급과정

1.npm install -g @vue/cli (해당프로젝트는 vue2)

2.vue create 프로젝트명

3.
 $ cd vue-todo
 $ npm run serve

4.컴포넌트 만들기 - 파스칼케이스법으로 작성 - 첫단어는 대문자로 시작

5.컴포넌트 등록하기 - App.vue

6.public - index.html 에 뷰포트, 파피콘 등 메타태그와 필요한 font, icon 등록하기 - cdn 이용

 1 : https://www.favicon-generator.org/ - 파비콘만들기
 
 2 : https://fonts.google.com/ - 구글 웹폰트(요즘은 눈누도 많이씀!)
 
 3 : https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag - 뷰포트(반응형을 위해서 사용)
 
7.작업이 완료 되어도 리액티비티가 일어나지 않아 리스트가 바로바로 갱신되지 않는 문제가 생김

8.App.vue을 중심을 데이터 문제를 해결(이벤트, props 이용)


😊추가작업
1) 날짜 추가, getTime()으로 로컬스트리지를 정렬했음
    1970년 1월 1일 자정을 기준으로 현재시간을 숫자로 나열한것

2) 작업을 완료했을경우 아래로 내리고 최신글이 위로오게 sort 작업
    -이부분은 완료 유무로 filter로 작업한 후 sort하여 합침
    
3) todo 갯수와 완료된 갯수 = data로 작업후 props로 내렸음
    sort 작업에서 모두 완료 처리가 될거같아서 vue 생명주기인 beforeUpdate 시에 호출함

9.사용자 경험 개선

1: https://vuejs.org/examples/#modal - 뷰에서 제공하는 modal

    - slot : slot을 사용하면 등록한 컴포넌트에서 재정의가 가능 (컴포넌트 안에서 ui부분을 재사용하기 위해서 조각낸 부분이라고 이해하면 쉬움)
    - slot name="body 하고 등록한 후 그안에 들어가는 내용은 디폴트내용이 된다
    - import하여 사용하는 부분에서는 template #slot네임 으로 쓰던지 v-slot:솔트네임으로 사용한다. 
      그안에 들어가는 내용은 본인이 작업하는 ui에 맞게 변경가능하다(태그도, 텍스트, 이미지 무엇이든지 가능). 안쓰게 되면 최초 등록한 디폴트 내용이 나오게 된다.

2: https://v2.vuejs.org/v2/guide/transitions.html#Transition-Classes - 뷰에서 제공하는 트랜지션 

    -TransitionGroup은 리스트를 표현할때 사용
     tag로  ul을 써주면 된다.
    - 단일로 쓸경우에는 transition 를 쓰고 name을 설정하고 사용
    
