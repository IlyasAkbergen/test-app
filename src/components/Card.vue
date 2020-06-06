<template>
    <div
        :id="id"
        class="card"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragend="dragEnd"
        @dragover.stop
    >
        <slot />
    </div>
</template>

<script>
    import Styles from "../enums/Styles";
    export default {
        name: "Card",
        props: ['id', 'draggable'],
        enums: {
            Styles,
        },
        methods: {
            dragStart: e => {
                const target = e.target;

                e.dataTransfer.setData('card_id', target.id);

                setTimeout(() => {
                    target.style.display = Styles.display_none;
                }, 0);
            },
            dragEnd: e => {
                const target = e.target;

                e.dataTransfer.setData('card_id', target.id);

                setTimeout(() => {
                    target.style.display = Styles.display_block;
                }, 0);
            }
        }
    }
</script>
