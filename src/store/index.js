import { createStore } from 'vuex'
import { localDB } from '@/localDB'

export default createStore({
  state: {
    itemsCart: localDB.getValue('qpick') || []
  },

  mutations: {
    SET_CART (state, product) {
      const result = state.itemsCart.find(
        i => i.id === product.id
      )
      if (result === undefined) {
        state.itemsCart.push(product)
      } else result.quantity++
      this.commit('SET_DATA')
    },

    SET_DATA (state) {
      localDB.setValue('qpick', state.itemsCart)

    },

    SET_REMOVE (state, id) {
      state.itemsCart = state.itemsCart.filter(
        i => i.id !== id
      )
      this.commit('SET_DATA')
    },

    SET_INCREMENT (state, id) {
      const product = state.itemsCart.find(
        i => i.id === id
      )
      product.quantity++
      this.commit('SET_DATA')
    },

    SET_DECREMENT (state, id) {
      const product = state.itemsCart.find(
        i => i.id === id
      )
      if (product.quantity > 1) product.quantity--
      this.commit('SET_DATA')
    }
  },

  actions: {
    addToCart ({ commit }, product) {
      commit('SET_CART', product)
    },

    removeFromCart ({ commit }, id) {
      commit('SET_REMOVE', id)
    },

    incrementItem ({ commit }, id) {
      commit('SET_INCREMENT', id)
    },

    decrementItem ({ commit }, id) {
      commit('SET_DECREMENT', id)
    }
  }
})
