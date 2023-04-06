<template>
    <header>
        <!-- <h1>TODO it! ({{trueNum}} / {{totalNum}})</h1> -->
        <h1>{{this.$store.state.headText}} ({{this.$store.getters.getTrueNum}} / {{this.$store.getters.getTotalNum}})</h1>
        <!--개발자도구 vue-> vuex 툴에서 state로 확인가능! -->
    </header>
</template>

<script>
export default {
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
