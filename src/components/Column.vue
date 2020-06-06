<template>
    <div
        :id="column.id"
        class="column"
        @dragover.prevent
        @drop.prevent="(e) => drop(e)"
    >
        <slot />
        <AddButton @click="addBtnClicked">Добавить</AddButton>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Styles from "../enums/Styles";
    export default {
        name: "Column",
        props: ['column'],
        enums: {
          Styles,
        },
        components: {
          AddButton: () => import('./AddButton'),
        },
        methods: {
            ...mapActions('columns', ['dropCard']),
            drop(e) {
                const card_id = e.dataTransfer.getData('card_id');
                this.dropCard({
                    card_id: card_id,
                    column_id: this.column.id
                })

            },
            addBtnClicked () {
            }
        }
    }
</script>

<style scoped>

</style>