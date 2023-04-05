<template>
    <footer class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </footer>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            //localStorage.clear();
            this.$emit("clearAll");
        },
    },
};
</script>

<style></style>
