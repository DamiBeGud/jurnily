import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBm4bepQFCmH2Xkv84-_6WmrC9gu96fM0g",
    authDomain: "jurnily.firebaseapp.com",
    projectId: "jurnily",
    storageBucket: "jurnily.appspot.com",
    messagingSenderId: "851243467877",
    appId: "1:851243467877:web:6bb8aae3135192fc0b328c",
    measurementId: "G-KS1GRGTWBY"
  };


  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)
//   const analytics = getAnalytics(app);


  export {db}