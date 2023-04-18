import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);
//글로벌하게 Vuex를 쓰겠다는 의미
//해당 라이브러리를 사용하기 위한 초기화 코드를 실행하는 구문
//뷰에 연결해야 vuex를 사용할 수 있다
let sortItem = [];

export default function sortlist(state) {
    const trueItem = state
        .filter((item) => item.completed === true)
        .sort(function (a, b) {
            return b.value.time - a.value.time; //내림차순
        });
    const falseItem = state
        .filter((item) => item.completed === false)
        .sort(function (a, b) {
            return b.value.time - a.value.time; //내림차순
        });

    sortItem = [...falseItem, ...trueItem];
    return sortItem;
}
const storage = {
    fetch() {
        //네트워크의 리소스를 쉽게 비동기적으로 가져오기
        //app에 있는 created를 store에 붙이기
        let arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    const item = localStorage.getItem(localStorage.key(i));
                    arr.push(JSON.parse(item)); //arr배열을 만들어서 푸시해주기
                    //console.log(arr);
                    sortlist(arr);
                }
            }
        }
        return sortItem; // {} 단위밖에서는 arr을 호출할 수 없으므로 return 반환
    },
};

// //다른 컴포넌트에서 this.$store 로 사용할 수 있음

export const store = new Vuex.Store({
    state: {
        headText: "TODO it!", //헤더에 들어갈 값 등록하기
        //todoItems: [],
        todoItems: storage.fetch(), //위에 만들어준 값을 넣어준다
    },
    // getters: getters,
    // mutations: mutations
    getters,
    mutations,
});

//스토어 속성 모듈화 시키기