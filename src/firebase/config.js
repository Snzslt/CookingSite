import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA201aedZXXVinSBI5e-7K0m_fsvHPAhEI",
    authDomain: "cooking-sun.firebaseapp.com",
    projectId: "cooking-sun",
    storageBucket: "cooking-sun.appspot.com",
    messagingSenderId: "490252770207",
    appId: "1:490252770207:web:30ace797b3f1b935897baa"
  }

  //initialize firebase
  firebase.initializeApp(firebaseConfig)


  //initialize services
  const projectFirestore = firebase.firestore()


  export{
      projectFirestore
  }