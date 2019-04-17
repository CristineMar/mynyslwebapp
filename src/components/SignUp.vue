<template>
  <div class="container">
    <div class="card signUp">
      <div class="card-body">
        <h3>SIGN UP</h3>
        <p>Let's create a new account !</p>
        <form @submit.prevent="signUp">
        <input type="email" class="form-control" placeholder="Email" name="email" v-model="email">
        <input type="password" class="form-control" placeholder="Password" name="password" v-model="password">
        <button class="btn blue"> Sign Up </button>
        </form>
        <div class="message is-danger" v-if="error">
          <div class="message-body">{{ error }}</div>
        </div>
        <span> or go back to <router-link to="/login"> login </router-link> . </span>
      </div>
    </div>
  </div>
</template>

 


<script>

import database from '@/firebase/init';

  export default {
    name: 'signup',
    data () {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async signUp () {
        let result = await database.signUp(this.email, this.password)

        if (result.message) {
          this.error = result.message
        } else {
          alert('User is created')
        }
      }
    }
  }

</script>

<style scoped>
.signUp {
  max-width: 500px;
  margin-top: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

