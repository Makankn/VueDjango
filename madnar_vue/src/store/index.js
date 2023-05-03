import { createStore } from 'vuex'

export default createStore({
  state: {
    cart:{
      items:[],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  getters: {
  },
  mutations: {
    innitializeStore(state){
      if (localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else{
          localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
