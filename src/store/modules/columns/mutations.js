export default {
    setColumns (state, columns) {
        state.columns = columns;
    },
    setCards (state, cards) {
        state.cards = cards;
    },
    setColumnToCard(state, data) {
        let card = state.cards.find((c) => c.id === parseInt(data.card_id));
        card.column_id = data.column_id;
    },
    saveState(state) {
        localStorage.setItem('columns', JSON.stringify(state.columns));
        localStorage.setItem('cards', JSON.stringify(state.cards));
    }
}