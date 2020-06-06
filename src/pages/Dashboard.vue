<template>
    <div>
        <div class="flexbox">
            <div class="card">
                <AddButton @click="addBtnClicked">Добавить</AddButton>
            </div>
        </div>
        <div class="flexbox">
            <div class="card">
                <input type="checkbox" id="dragable" v-model="dragable" @change="setDragable(!dragable)">
                <label for="dragable"> Dragable</label>
            </div>
        </div>
        <main class="flexbox">
            <Column v-for="col in columns"
                    :id="col.id"
                    :column="col"
                    :key="`column-${col.id}`">
                <h2 class="column-title">{{ col.name }}</h2>
                <Card
                        v-for="card in cardsOfColumn(col.id)"
                        :id="card.id"
                        :draggable="dragable"
                        :key="`card-${card.id}`">
                    <p>{{ card.name }} <span class="delete-card" @click="removeCard(card.id)">X</span></p>
                    <span>{{ card.description }}</span>
                </Card>
            </Column>
        </main>
        <div class="flexbox">
            <Trash />
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    export default {
        name: 'Dashboard',
        components: {
            Column: () => import('../components/Column'),
            Card: () => import('../components/Card'),
            AddButton: () => import('../components/AddButton'),
            Trash: () => import('../components/Trash'),
        },
        created() {
            this.initColumns();
            this.initCards();
        },
        computed: {
            ...mapState('columns', ['columns', 'cards']),
            ...mapState(['dragable']),
        },
        methods: {
            cardsOfColumn (column_id) {
                return this.cards.filter((c) => c.column_id === column_id)
            },
            addBtnClicked() {
                this.setNewCardAsFocused();
                this.$router.push('/card-form');
            },
            ...mapActions('columns', ['initColumns', 'initCards', 'addCard', 'removeCard']),
            ...mapMutations('columns', ['setNewCardAsFocused']),
            ...mapMutations(['setDragable'])
        }
    }
</script>

<style scoped>
    .delete-card {
        float: right;
        color: darkred;
        border: 1px solid darkred;
        padding: 0px 2px;
    }
</style>