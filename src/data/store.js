import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     players: []
  },
 /* Inside actions, I have created one function called loadPlayers.
 This function will take commit as an argument and then call the mutation using commit function.*/
  actions: {
    loadPlayers ({ commit }) {
        axios
          .get('https://api.myjson.com/bins/lgkms')
          .then(list => list.data)
          .then(players => {
          commit('SET_PLAYERS', players)
          })
    }
  },
/*So after the players are fetched, we can commit a mutation,
In our case, the mutation is SET_PLAYERS. So we call that mutation function with an argument of players. 
Set the players state with our fetched players.
Now, we can use these players to display the data.
*/
  mutations: {
    SET_PLAYERS (state, players) {
        state.players = players
      }
  }
})