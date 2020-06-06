<template>
  <div id="app">
    <div v-show="loading" class="loading">
        <span class="sr-only">Загрузка...</span>
    </div>
    <div v-show="!loading">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Column: () => import('./components/Column'),
    Card: () => import('./components/Card'),
    AddButton: () => import('./components/AddButton')
  },
  created() {
    this.initColumns();
    this.initCards();
  },
  computed: {
    ...mapState(['loading']),
    ...mapState('columns', ['columns', 'cards']),
  },
  methods: {
    cardsOfColumn (column_id) {
      return this.cards.filter((c) => c.column_id === column_id)
    },
    addBtnClicked() {

    },
    ...mapActions('columns', ['initColumns', 'initCards', 'addCard']),
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: aliceblue;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 15px;
  }

  .flexbox .column {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    background-color: blueviolet;
    padding: 15px;
  }

  .flexbox .column .card {
    padding: 15px 25px;
    background-color: azure;
    cursor: pointer;
    margin-bottom: 15px;
    overflow-x:hidden;
  }

  .loading {
    text-align: center;
    vertical-align: middle;
    line-height: 90px;
  }

  .column-title {
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }
</style>
