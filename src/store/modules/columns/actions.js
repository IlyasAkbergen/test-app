export default {
    dropCard ({ commit }, data) {
        commit('setColumnToCard', data)
        commit('saveState')
    },
    addCard() { //({ commit }, card) {
        // commit('setLoading', true);
        // return axios.get('/room-types/')
        //     .then((res) => {
        //         commit('setAllRoomTypes', res.data.result);
        //         commit('setLoading', false);
        //         return res
        //     })
        //     .catch(() => commit('setLoading', false))
    },
    initColumns({ commit, state }) {
        const columns = localStorage.getItem('columns')
            ? JSON.parse(localStorage.getItem('columns'))
            : state.default_columns;
        commit('setColumns', columns)
    },
    initCards({ commit, state }) {
        console.log(localStorage.getItem('cards'));
        const cards = localStorage.getItem('cards')
            ? JSON.parse(localStorage.getItem('cards'))
            : state.default_cards;
        commit('setCards', cards)
    }
}