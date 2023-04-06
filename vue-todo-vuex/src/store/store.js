import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//글로벌하게 Vuex를 쓰겠다는 의미
//해당 라이브러리를 사용하기 위한 초기화 코드를 실행하는 구문
//뷰에 연결해야 vuex를 사용할 수 있다

const storage = {
    fetch() { //네트워크의 리소스를 쉽게 비동기적으로 가져오기
        //app에 있는 created를 store에 붙이기
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    const item = localStorage.getItem(localStorage.key(i));
                    arr.push(JSON.parse(item)); //arr배열을 만들어서 푸시해주기
                }
            }
        }
        return arr; // {} 단위밖에서는 arr을 호출할 수 없으므로 return 반환
    },
};

// //다른 컴포넌트에서 this.$store 로 사용할 수 있음

export const store = new Vuex.Store({
    state: {
        headText: "TODO it!", //헤더에 들어갈 값 등록하기
        //todoItems: [],
        todoItems: storage.fetch(), //위에 만들어준 값을 넣어준다
    },
    getters: {
        getTotalNum(state) { //인자는 state
            return state.todoItems.length;
        },
        getTrueNum(state) { //인자는 state
            const trueItem = state.todoItems.filter(
                (item) => item.completed === true
            );
            return trueItem.length;
        }
    },
    mutations:{
        addOneItem(state, value) { 
            //console.log(value)
            const obj = { completed: false, value: value }; //const를 쓰면 재선언할 수 없어 디버깅할 때 충돌을 줄일 수 있음
            //오브젝트로 만들어줬기 때문에 obj를 찍게 되면 object object가 찍힘, 따라서 문자열로 변환해 주는것
            localStorage.setItem(value.item, JSON.stringify(obj)); //JavaScript 값이나 객체를 JSON 문자열로 변환
            state.todoItems.unshift(obj);
        },
        removeOneItem(state, payload) {
            //console.log(payload);
            localStorage.removeItem(payload.todoItem.value.item); //객체일때 로컬스트리지에서 삭제하기
            state.todoItems.splice(payload.index, 1); //현재 리스트에서 삭제하기
        },
        toggleOneItem(state, payload) {
            //todoItem.completed = !todoItem.completed; //이벤트로 넘어온값을 바꾸는 것을 안티패턴이라고 하며 어짜피 props로 내려준 값이 변경되므로 아래와같이 변경한것
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            //localStorage 갱신하기
            localStorage.removeItem(payload.todoItem.value.item); //localStorage는 업데이트 기능이 없으므로 삭제 후
            localStorage.setItem(payload.todoItem.value.item, JSON.stringify(payload.todoItem)); //새로 추가해준다, 이때 completed 값이 바꼈으므로 바뀐값이 들어오게 된다.
            //state.sortTodoOldest();
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    }
});
