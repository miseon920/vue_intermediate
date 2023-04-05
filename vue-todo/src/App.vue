<template>
    <div id="app">
        <todo-header :trueNum="trueNum" :totalNum="totalNum" />
        <!-- 케밥케이스로 작성하는 것을 권고 -->
        <todo-input @addTodoItem="addOneItem" />
        <todo-list
            :propsdata="todoItems"
            @removeItem="removeOneItem"
            @toggleItem="toggleOneItem"
        />
        <todo-footer @clearAll="clearAllItems" />
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import "./assets/css/common.css"; //외부스타일 사용법

export default {
    components: {
        TodoHeader, //TodoHeader : TodoHeader = 값과 속성이 같으므로 축약하여 쓸수 있음
        TodoInput,
        TodoList,
        TodoFooter,
    },
    data() {
        return {
            todoItems: [],
            trueNum: 0,
            totalNum: 0,
        };
    },
    methods: {
        addOneItem(item) { //속성메서드 이므로 : function 제거가능
            //인자로 1개를 보냈기 때문에 매개변수도 맞춰서 만들어줌
            //input에서 추가하는 부분 가져오기
            const obj = { completed: false, value: item }; //const를 쓰면 재선언할 수 없어 디버깅할 때 충돌을 줄일 수 있음
            //오브젝트로 만들어줬기 때문에 obj를 찍게 되면 object object가 찍힘, 따라서 문자열로 변환해 주는것
            //localStorage.setItem(this.newTodoItem,obj);
            localStorage.setItem(item.item, JSON.stringify(obj)); //JavaScript 값이나 객체를 JSON 문자열로 변환
            this.todoItems.unshift(obj);
        },
        removeOneItem(todoItem, index) {
            localStorage.removeItem(todoItem.value.item); //객체일때 로컬스트리지에서 삭제하기
            this.todoItems.splice(index, 1); //현재 리스트에서 삭제하기
        },
        toggleOneItem(todoItem, index) {
            //todoItem.completed = !todoItem.completed; //이벤트로 넘어온값을 바꾸는 것을 안티패턴이라고 하며 어짜피 props로 내려준 값이 변경되므로 아래와같이 변경한것
            this.todoItems[index].completed = !this.todoItems[index].completed;
            //localStorage 갱신하기
            localStorage.removeItem(todoItem.value.item); //localStorage는 업데이트 기능이 없으므로 삭제 후
            localStorage.setItem(todoItem.value.item, JSON.stringify(todoItem)); //새로 추가해준다, 이때 completed 값이 바꼈으므로 바뀐값이 들어오게 된다.
            this.sortTodoOldest();
        },
        clearAllItems() {
            localStorage.clear();
            this.todoItems = [];
        },
        sortTodoOldest() {
            let sortItem = [];

            //this.todoItems.sort((a,b) => a.completed === b.completed ? 0 : a.completed? 1 : -1); //true, bool은 됨

            const trueItem = this.todoItems.filter(
                (item) => item.completed === true
            );
            const falseItem = this.todoItems.filter(
                (item) => item.completed === false
            );

            trueItem.sort(function (a, b) {
                return b.value.time - a.value.time; //내림차순
            });

            falseItem.sort(function (a, b) {
                return b.value.time - a.value.time; //내림차순
            });

            this.trueNum = trueItem.length;
            //this.falseNum = falseItem.length;

            sortItem = [...falseItem, ...trueItem];
            this.todoItems = sortItem;
            this.totalNum = this.todoItems.length;
        },
    },
    created() {
        /**
         * created : data를 반응형으로 추적할 수 있게 되며 computed, methods, watch 등이 활성화되어
         * 접근이 가능하게 됩니다. 하지만 아직까지 DOM에는 추가되지 않은 상태입니다.
            data에 직접 접근이 가능하기 때문에, 컴포넌트 초기에 외부에서 받아온 값들로
            data를 세팅해야 하거나 이벤트 리스너를 선언해야 한다면 이 단계에서 하는 것이
            가장 적절합니다.
         */
        if (localStorage.length > 0) {
            //로컬스트로지에 데이터가 있을시
            for (let i = 0; i < localStorage.length; i++) { //반복문은 계속 값이 바뀌므로 let을 씀
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    //웹팩이 있을때는 제외, 웹팩을 포함한 cli를 설치했을때
                    //this.todoItems.push(localStorage.key(i)); //배열에 담기
                    //객체일때
                    const item = localStorage.getItem(localStorage.key(i));
                    this.todoItems.push(JSON.parse(item));
                    //JSON.parse() = JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성.
                    //console.log(localStorage.key(i)); // - 로컬스트로지에서 확인 가능
                }
            }
            //로컬스트로지는 for문을 활용하여 불러올때 순서가 보장되지 않는다
        }
    },
    mounted() {
        this.sortTodoOldest();
    },
    beforeUpdate(){ //컴포넌트가 데이터가 변하여 업데이트 시작될 때 실행
        this.sortTodoOldest();
    }
};
</script>
