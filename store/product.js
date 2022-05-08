export const state = () => ({
  orders: []
})

export const mutations = {
  add(state, product) {
    state.orders.push(product)
  },
  remove(state, id) {
    state.orders = state.orders.filter(function (product) {
      return product.id !== id
    })
  }
}
