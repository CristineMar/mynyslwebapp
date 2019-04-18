import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC72B0x8ZMcZLS8rUEOkDJp9YwRItY2kWQ",
    authDomain: "myproject-2cef5.firebaseapp.com",
    databaseURL: "https://myproject-2cef5.firebaseio.com",
    projectId: "myproject-2cef5",
    storageBucket: "myproject-2cef5.appspot.com",
    messagingSenderId: "1073575815773"
  };

var fire = firebase.initializeApp(config);

export default fire;