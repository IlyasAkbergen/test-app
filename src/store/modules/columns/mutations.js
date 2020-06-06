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
    },
    setFocusedCard(state, card) {
        state.focusedCard = card
    },
    setNewCardAsFocused(state, column_id = false) {
        if (!column_id) {
            column_id = state.columns[0].id
        }

        state.focusedCard = {
            id: 0,
            column_id: column_id,
            name: '',
            description: ''
        }
    },
    saveCard(state, card) {
        state.cards.push(card);
    },
    updateCard(state, card) {
        const index = state.cards.indexOf((c) => c.id === card.id);
        state.cards[index] = card;
    },
    deleteCard(state, card_id) {
        state.cards = state.cards.filter(c => c.id !== card_id);
    }
}