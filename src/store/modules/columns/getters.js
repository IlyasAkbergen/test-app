export default {
    getMaxCardId: (state) => state.cards.length > 0
        ? Math.max(...state.cards.map(c => c.id))
        : 1
}