export default {
    dropCard ({ commit }, data) {
        commit('setColumnToCard', data)
        commit('saveState')
    },
    submitFocusedCardForm({ commit, getters }, card) {
        if (card.id === 0) {
            card.id = getters.getMaxCardId + 1;
            commit('saveCard', card);
        } else {
            commit('updateCard', card);
        }
        commit('saveState');
    },
    deleteCard() {

    },
    initColumns({ commit, state }) {
        const columns = localStorage.getItem('columns')
            ? JSON.parse(localStorage.getItem('columns'))
            : state.default_columns;
        commit('setColumns', columns)
    },
    initCards({ commit, state }) {
        const cards = localStorage.getItem('cards')
            ? JSON.parse(localStorage.getItem('cards'))
            : state.default_cards;
        commit('setCards', cards)
    }
}