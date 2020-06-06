export default {
    getMaxCardId: (state) => Math.max(...state.cards.map(c => c.id))
}