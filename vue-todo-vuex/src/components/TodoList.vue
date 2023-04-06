<template>
    <div class="listBox">
        <TransitionGroup tag="ul" name="list">
            <!--리스트에 애니메이션을 줄때 -->
            <li
                v-for="(todoItem, index) in this.$store.state.todoItems"
                :key="todoItem.value.time"
                class="shadow"
            >
                <label
                    for="check"
                    @click="toggleComplete(todoItem, index)"
                    class="checkBtn"
                    :class="{ textCompleted: todoItem.completed }"
                    ><i class="fas fa-solid fa-check"></i
                ></label>
                <input type="checkbox" id="check" />
                <!--todoItems 배열에서 todoItem(지정된 명은 아님) 갯수만큼 반복 -->
                <span :class="{ textCompleted: todoItem.completed }">
                    {{ todoItem.value.item }}
                </span>
                <span class="date">
                    {{
                        `${todoItem.value.year}년 ${todoItem.value.month}월 ${todoItem.value.date}일`
                    }}
                </span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i class="fas fa-sharp fa-regular fa-trash"></i>
                </span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    // props: ["propsdata"], //store에 있으므로 삭제
    methods: {
        removeTodo(todoItem, index) {
            //this.$emit("removeItem", todoItem, index);
            //localStorage.removeItem(todoItem); //로컬스트리지에서 삭제하기
            // const obj = {
            //     todoItem: todoItem,
            //     index: index,
            // };
            this.$store.commit("removeOneItem", { todoItem, index }); //{ todoItem, index }는 obj와 같음 - 향상된 객체 리터럴방식
        },
        toggleComplete(todoItem, index) {
            //this.$emit("toggleItem", todoItem, index);
            this.$store.commit("toggleOneItem", { todoItem, index }); //{ todoItem, index }는 obj와 같음 - 향상된 객체 리터럴방식
        },
    },
};
</script>

<style>
/* 기존 css 는 생략, 아래 레퍼런스 css 참고
 https://vuejs.org/examples/#list-transition 
*/

/* 리스트 아이템 트랜지션 효과 */
/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
.list-leave-to {
    transform: translateY(30px);
}

.listBox ul {
    position: relative;
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
    width: calc(100% - 1.8rem);
    transition: all 0.5s;
}
</style>
<!--
# 뷰라이플사이클
beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed
https://wormwlrm.github.io/2018/12/29/Understanding-Vue-Lifecycle-hooks.html


 -->
