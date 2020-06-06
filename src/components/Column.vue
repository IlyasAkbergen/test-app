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
    import { mapActions, mapMutations } from 'vuex';
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
            ...mapMutations('columns', ['setNewCardAsFocused']),
            drop(e) {
                const card_id = e.dataTransfer.getData('card_id');
                this.dropCard({
                    card_id: card_id,
                    column_id: this.column.id
                })

            },
            addBtnClicked () {
                this.setNewCardAsFocused(this.column.id);
                this.$router.push('/card-form');
            }
        }
    }
</script>

<style scoped>

</style>