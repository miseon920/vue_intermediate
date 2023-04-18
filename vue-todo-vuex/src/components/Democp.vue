<template>
    <div id="root">
        <ul>
            <li>{{ originerPrice }}</li>
            <li>{{ doublePrice }}</li>
            <li>{{ triplePrice }}</li>
            <!--
                `this`는 컴포넌트의 자바스크립트 부분에만 넣고
                 템플릿의 HTML 코드에서는 생략
             -->
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["originerPrice", "doublePrice", "triplePrice"]),
        // originerPrice() {
        //     return this.$store.getters.originerPrice;
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice() {
        //     return this.$store.getters.triplePrice;
        // },
    },
};
</script>

<style></style>
