<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h3>SIGN UP</h3>
        <p>Let's create a new account !</p>
         <input type="text" class="form-control" placeholder="Please enter your name ..." name="name" v-model="name">
        <input type="text" class="form-control" placeholder="Email" name="email" v-model="email">
        <input type="password" class="form-control" placeholder="Password" name="password" v-model="password">
        <button class="btn blue" @click="signUp"> Sign Up </button>
        <span> or go back to <router-link to="/login"> login </router-link> . </span>
      </div>
    </div>
  </div>
</template>

 


<script>

import firebase from 'firebase';

  export default {
    name: 'signUp',
    data () {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('login')
          },
          (err) => {
            alert ('Oops. ' + err.message)
          }
        );
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

