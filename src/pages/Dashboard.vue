<template>
    <div>
        <div class="flexbox">
            <div class="card">
                <AddButton @click="addBtnClicked">Добавить</AddButton>
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
                        :id="card.id" draggable="true"
                        :key="`card-${card.id}`">
                    <p>{{ card.name }}</p>
                    <span>{{ card.description }}</span>
                </Card>
            </Column>
        </main>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    export default {
        name: 'Dashboard',
        components: {
            Column: () => import('../components/Column'),
            Card: () => import('../components/Card'),
            AddButton: () => import('../components/AddButton')
        },
        created() {
            this.initColumns();
            this.initCards();
        },
        computed: {
            ...mapState('columns', ['columns', 'cards']),
        },
        methods: {
            cardsOfColumn (column_id) {
                return this.cards.filter((c) => c.column_id === column_id)
            },
            addBtnClicked() {
                this.setNewCardAsFocused();
                this.$router.push('/card-form');
            },
            ...mapActions('columns', ['initColumns', 'initCards', 'addCard']),
            ...mapMutations('columns', ['setNewCardAsFocused'])
        }
    }
</script>

<style scoped>

</style>