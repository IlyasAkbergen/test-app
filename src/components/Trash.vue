<template>
    <i class="fa fa-trash fa-4x" aria-hidden="true"
           @dragover.prevent
           @drop.prevent="(e) => drop(e)" />
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Trash",
        methods: {
            ...mapActions('columns', ['removeCard']),
            drop(e) {
                const card_id = e.dataTransfer.getData('card_id');
                if(confirm("Карточка будет удалена. Продолжить?")) {
                    this.removeCard(parseInt(card_id));
                }
            },
        }
    }
</script>

<style scoped>

</style>