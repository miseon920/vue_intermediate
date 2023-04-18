import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp"

Vue.use(Vuex);
//글로벌하게 Vuex를 쓰겠다는 의미
//해당 라이브러리를 사용하기 위한 초기화 코드를 실행하는 구문
//뷰에 연결해야 vuex를 사용할 수 있다

// //다른 컴포넌트에서 this.$store 로 사용할 수 있음

export const store = new Vuex.Store({
    modules:{
        todoApp
    }
});

//스토어 속성 모듈화 시키기