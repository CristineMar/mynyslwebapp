<template>
  <div class="container">
    <div class="card signIn">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="signIn" class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Please enter your name ..." name="name" v-model="name">
            <input type="email" class="form-control" placeholder="Email" name="email" v-model="email">
            <input type="password" class="form-control" placeholder="Password" name="password" v-model="password">
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <button class="btn btn-primary" @click="signIn">Enter Chat</button>
          <p>You don't have an account ? You can <router-link to="/signup">create one</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>


<script>

import database from '@/firebase/init';

export default {
  name: 'signIn',
  data () {
    return {
      name: "",
      errorText: null,
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn () {
      let result = await database.signIn(this.email, this.password)

      if (result.message) {
        this.error = result.message
        this.$router.push('/chat')
      } else {
        alert('User is signed in')
        
      }
    }
  }
}
</script>
<style>
.signIn{
  max-width: 450px;
  margin-top: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>