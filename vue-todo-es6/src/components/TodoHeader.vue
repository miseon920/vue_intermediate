<template>
    <header>
        <h1>TODO it! ({{trueNum}} / {{totalNum}})</h1>
    </header>
</template>

<script>
export default {
    props: ["trueNum", "totalNum"],
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
