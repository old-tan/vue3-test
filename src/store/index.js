import { createStore } from "vuex"
import { INCREMENT_N } from "./mutation-types"

const store = createStore({
  state() {
    return {
      counter: 222,
      name: "tan",
      age: 18,
      books: [
        { name: "vue", price: 200, count: 2 },
        { name: "react", price: 300, count: 2 },
        { name: "webpack", price: 125, count: 4 },
        { name: "vite", price: 100, count: 3 },
        { name: "angular", price: 223, count: 5 },
      ],
      discount: 0.9,
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload.n
    },
    decrement(state) {
      state.counter--
    },
  },
  getters: {
    currentCiscount(state) {
      return state.discount * 0.9
    },
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentCiscount
    },
    totalPriceMoreThanThree(state, getters) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count <= n) continue
          totalPrice += book.count * book.price
        }
        return totalPrice * getters.currentCiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
  },
})

export default store
