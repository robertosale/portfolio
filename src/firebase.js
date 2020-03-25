import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBE6s5d7pJtim38E68P8gTxk54Olf0XtPI",
    authDomain: "portfolio-24ad7.firebaseapp.com",
    databaseURL: "https://portfolio-24ad7.firebaseio.com",
    projectId: "portfolio-24ad7",
    storageBucket: "portfolio-24ad7.appspot.com",
    messagingSenderId: "108261232618",
    appId: "1:108261232618:web:882b0c96dfe9f160ea6c93"
  };


  firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase;
  
  export {
      firebaseApp,
  };
