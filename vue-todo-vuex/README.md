# Vuex - 상태관리 라이브러리

1. 컴포넌트를 효율적으로 관리하는 라이브러리
2. 등장배경 Flux
3. 주요속성 : state, getters, mutations, actions 🙌
	state = data : 컴포넌트 간에 공유하는 데이터 또는 상태
	getters = computed : 연산된 state 값을 접근하는 속성 / 캐싱하는 속성도 있음
	mutations = method : state값을 변경하는 이벤트 로직, 메서드 / 인자가 있다면 getters보다 muations 사용을 권장
    > state를 직접변경하지 않고 뮤테이션을 변경하는 이유 : state를 직접변경하면 어느 컴포넌트에서 해당 state를 변경했는지 추적하기 어렵기 때문에 commit을 이용하여 뮤테이션을 변경함(반응성, 디버깅, 테스팅혜택)
	actions = 비동기 메서드 : 비동기 처리 로직을 선언하는 메서드 aysnc methods(데이터 요청, Primise, async과 같은 비동기 처리를 모두 선언, state를 변경할 수 없음)
    > 어느컴포넌트에서 state를 호출하고 변경했는지 확인이 어렵기 때문에 비동기 로직은 actions에 선언함

4. Vuex를 더 쉽게 코딩할수 있는 방법인 Helper 기능
5. 프로젝트를 구조화하는 방법과 모듈 구조화 방법


## Vuex
- 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- react의 flux 패턴에서 기인함

1. flux : mvc 패턴의 복작합 테이터의 흐름 문제를 해결하는 개발 패턴(**단방향 데이터 흐름** = 리액트에서는 flux패턴으로 상태관리를 하는 라이브러리는 리덕스)
> mvc : **모델-뷰-컨트롤러** = 사용자 인터페이스, 데이터 및 논리 제어를 구현하는데 널리 사용되는 소프트웨어 디자인 패턴(모델과 뷰가 데이터를 주고받는 양방향 데이터 흐름)
    > 기능 추가 및 변경에 따른 문제점을 예측을 할 수 없는 문제점이 발생함

  1. action : 화면에서 발생하는 이벤트 또는 사용자 입력
  2. dispatcher : 데이터를 변경하는 방법, 메서드
  3. model(store) : 화면에 표시할 데이터 (데이터를 담는곳 = 자바스크립트 객체와 같은 의미)
  4. view : 사용자에게 비춰지는 화면 (DOM)

## Vuex가 필요한 이유
- 컴포넌트의 갯수가 많아질 경우 컴포넌트 간에 데이터 전달이 어려워짐
- 이벤트 버스로 해결할 경우 어디서 이벤트를 보냈는지 받았는지 알기가 어려움

    *해결할 수 있는 문제
    1. mvc 패턴에서 발생하는 구조적 오류
    2. 컴포넌트간의 데이터 전달 명시
    3. 여러개의 컴포넌트에서 같은 데이터를 업데이트 할때 동기화 문제

## Vuex 컨셉(단방향 데이터 흐름)
- State : 컴포넌트 간에 공유하는 데이터 data()
- view : 데이터를 표시하는 화면 template
- Action : 사용자의 입력에 따라 데이터를 변경하는 methods

## Vuex 구조
컴포넌트 -> 비동기로직 -> 동기로직 -> 상태

**자바스크립트 비동기 처리와 콜백 함수, Promise 쉽게 이해하기**

<https://msweb.tistory.com/115>


## Vuex 설치하기 : npm i vuex@3.6.2
- 가이드 확인 후 버전에 맞게 설치하기

<https://v2.vuejs.org/v2/guide/installation.html#CDN>


## Helper함수(헬퍼)
1. state -> mapState
2. getters -> mapGetters
3. mutations -> mapMutations
4. actions -> mapActions

> vuex에 있는 헬퍼를 로딩

## 헬퍼함수 컴포넌트에 연결하기
<pre>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState(),
            ...mapGetters()
        },
        methods: {
            ...mapMutations(),
            ...mapActions(),
        }
    }
</pre>

## store 모듈화

1. getters와 mutations 를 분리
2. export 후 store에 import
3. 하나의 store로 관리하기 힘들경우 modules 속성 사용
 >  modules/store이름
 
 <pre>
    export const store = new Vuex.Store({
        modules: {
            모듈명칭 : 모듈 파일명
        },
    });
 </pre>

 - 모듈별로 분리할 경우 namespaced: true 옵션을 넣고 호출시 모듈명을 앞에 넣으면 됨
    - 모듈 export 시 namespaced: true 옵션넣기
    - 각컴포넌트에서 헬퍼함수 사용시 "모듈명" 추가하기
