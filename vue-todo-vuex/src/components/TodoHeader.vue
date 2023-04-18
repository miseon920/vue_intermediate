<template>
    <header>
        <!-- <h1>TODO it! ({{trueNum}} / {{totalNum}})</h1> -->
        <!-- <h1>
            {{ this.headText }} ({{ this.trueNum }} /
            {{ this.TotalNum }})
        </h1> -->
        <h1>
            {{ headText }} ({{ getTrueNum }} /
            {{ getTotalNum }})
        </h1>
        <!--개발자도구 vue-> vuex 툴에서 state로 확인가능! -->
    </header>
</template>

<script>
import { mapState, mapGetters } from "vuex"; //헬퍼함수 사용하기

export default {
    computed: {
        // headText() {
        //     return this.$store.state.headText;
        // },
        ...mapState("todoApp", ["headText"]), //store에 있는 이름과 다르게 쓰고 싶을때 객체로 해서 붙여준 명칭 지정후 컴포넌트에서 사용가능 = 객체 리터럴
        //컴포넌트 메서드명 : Store의 State명
        // trueNum() {
        //     return this.$store.getters.getTrueNum;
        // },
        // TotalNum() {
        //     return this.$store.getters.getTotalNum;
        // },
        ...mapGetters("todoApp",["getTrueNum"]), //mapGetters를 사용하여 뿌려주기
        ...mapGetters("todoApp",["getTotalNum"]),
    },
};
</script>

<style scoped>
/* scoped : 해당컴포넌트에서만 유효한 style이 됨 */
h1 {
    color: #000;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>
