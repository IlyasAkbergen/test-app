<template>
    <div
        :id="id"
        class="board"
        @dragover.prevent
        @drop.prevent="drop"
    >
        <slot />
        <AddButton text="Добавить" @click="addBtnClicked" />
    </div>
</template>

<script>
    import Styles from "../enums/Styles";
    export default {
        name: "Column",
        props: ['id'],
        enums: {
          Styles,
        },
        components: {
          AddButton: () => import('./AddButton'),
        },
        methods: {
            drop: e => {
                const card_id = e.dataTransfer.getData('card_id');
                const card = document.getElementById(card_id);
                card.style.display = Styles.display_block;
                e.target.appendChild(card);
            },
            addBtnClicked () {
                console.log("add btn clicked");
            }
        }
    }
</script>

<style scoped>

</style>