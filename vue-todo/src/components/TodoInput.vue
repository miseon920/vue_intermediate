<template>
    <div class="inputBox shadow">
        <!--template 아래 div 한개 - vue 규칙-->
        <input type="text" v-model="newTodoItem" @keypress.enter="addToDO" />
        <!--v-model = input에 입력된 값을 동적으로 vue 인스턴스에 맵핑함 - 앵귤러와 리액트를 합한 vue의 장점-->
        <!-- <button @click="addToDO">add</button> -->
        <span class="addContainer" @click="addToDO">
            <i class="fas fa-solid fa-plus addBtn"></i>
        </span>
        <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">
            <template #header>
                <!--slot을 불러올때 v-slot:header 또는 #slot네임으로 사용가능-->
                <h3>경고!</h3>
                <!-- slot을 사용하면 등록한 컴포넌트에서 재정의가 가능하다! 재사용성이 매우 좋군!-->
            </template>
            <template #body>
                <p>할일을 입력 해 주세요</p>
            </template>
            <template #footer>
                by.Sunny
            </template>
        </modal>
    </div>
</template>

<script>
import getDate from "../assets/js/getDate.js";
import Modal from "./common/ModalLayer.vue";

export default {
    components: {
        Modal,
    },
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addToDO() {
            if (this.newTodoItem !== "") {
                //console.log(this.newTodoItem);
                //저장하는로직 - 로컬스트로지에 저장하기
                //localStorage.setItem(this.newTodoItem,this.newTodoItem); //localStorage.setItem("key","value")
                //localStorage.setItem(this.index++,this.newTodoItem);
                //this.$emit('이벤트이름',인자1,인자2,...); = 이벤트 부모로 보내기
                const value = {
                    item: this.newTodoItem,
                    year: getDate().year,
                    month: getDate().month,
                    date: getDate().date,
                    time: getDate().time,
                };
                this.$emit("addTodoItem", value); //현재 추가된값을 addOneItem이벤트 이름으로 상위로 보내는것
                this.clearInput(); //비우기
            } else {
                //alert("할일을 입력 해 주세요");
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        },
    },
};
</script>

<style></style>

<!--
😊localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

#로컬 스토리지와 세션스토리지
로컬 스토리지와 세션 스토리지는 HTML5에서 추가된 저장소.
간단한 키와 값을 저장할 수 있습니다. 키-밸류 스토리지의 형태

로컬 스토리지	    세션 스토리지
데이터 영구	O       (사용자가 지우지 않는 한)	X (윈도우, 탭 닫을시 내용 제거)
사용방법	        자동 로그인	일회성 로그인
주의사항(공통사항) 비밀번호와 같은 중요 정보는 절대 저장 X

https://racoonlotty.tistory.com/entry/%EC%BF%A0%ED%82%A4%EC%99%80-%EC%84%B8%EC%85%98-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%99%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80

#저장한것을 확인하는 방법
개발자도구 -> 애플리케이션 -> 스트로지 메뉴에서 확인 가능
 -->
