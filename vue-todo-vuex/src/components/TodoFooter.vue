<template>
    <footer class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </footer>
</template>

<script>
import { mapMutations } from "vuex"; //헬퍼함수 사용하기

export default {
    methods: {
        // clearTodo() {
        //     //localStorage.clear();
        //     //this.$emit("clearAll");
        //     this.$store.commit("clearAllItems");
        // },
         ...mapMutations("todoApp",{
            clearTodo : 'clearAllItems'
        }),
    },
};
</script>

<style></style>
