import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//TODO install firebase

// firebase configuration ...

const firebaseConfig = {

    apiKey: "AIzaSyBP4bks2_n7Iqo14x4JzWubQ1cOGXrKpHU",
  
    authDomain: "afrifoo.firebaseapp.com",
  
    projectId: "afrifoo",
  
    storageBucket: "afrifoo.appspot.com",
  
    messagingSenderId: "972827879916",
  
    appId: "1:972827879916:web:0d9751bb801bf4c02c78c9"
  
  };
  
  


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
