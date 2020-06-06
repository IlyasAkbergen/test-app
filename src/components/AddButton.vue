<template>
    <button class="btn-add"
            @click="$emit('click')">
       <slot />
    </button>
</template>

<script>
    export default {
        name: "AddButton",
    }
</script>

<style scoped>
    .btn-add {
        padding: 3px;
        background-color: aquamarine;
        cursor: pointer;
    }
</style>