import firebase from 'firebase'
import store from '@/store'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC72B0x8ZMcZLS8rUEOkDJp9YwRItY2kWQ",
    authDomain: "myproject-2cef5.firebaseapp.com",
    databaseURL: "https://myproject-2cef5.firebaseio.com",
    projectId: "myproject-2cef5",
    storageBucket: "myproject-2cef5.appspot.com",
    messagingSenderId: "1073575815773"
  };
  const database = firebase.initializeApp(config);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true }) //to get rid red error because of update on firebase will not affect the project.

  database.signUp = async (email,password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
  
      store.commit('setCurrentUser', firebase.auth().currentUser)
  
      return true
    } catch (error) {
      return error
    }
  }
  
  database.signIn = async (email,password) => {
    try {
      await firebase.auth().signInUserWithEmailAndPassword(email, password)
  
      store.commit('setCurrentUser', firebase.auth().currentUser)
  
      return true
    } catch (error) {
      return error
    }
  }

  database.signOut = async () => {
    try {
      await firebase.auth().signOut()
  
      store.commit('setCurrentUser', null)
  
      return true
    } catch (error) {
      return error
    }
  }

  export default database