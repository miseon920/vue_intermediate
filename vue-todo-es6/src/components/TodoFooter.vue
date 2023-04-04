<template>
    <footer class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </footer>
</template>

<script>
export default {
    methods: {
        clearTodo: function () {
            //localStorage.clear();
            this.$emit("clearAll");
        },
    },
};
</script>

<style></style>
