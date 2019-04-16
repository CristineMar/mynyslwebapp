<template>
<div class="container">
  <v-app id="inspire">
    <button @click="logout">Logout</button>
  </v-app>
</div>
</template>


<script>

import firebase from 'firebase';
import Body from './components/Body.vue'


export default {
  name: 'home',
  components: {
    Body
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
      this.$router.replace('login') 
      })
    }
  }  
}
</script>

<style scoped>

</style>