import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCPGB_6pibSEezfPyiE9wY-Yhnm6CSDLwg",
    authDomain: "crwn-clothing-2837e.firebaseapp.com",
    projectId: "crwn-clothing-2837e",
    storageBucket: "crwn-clothing-2837e.appspot.com",
    messagingSenderId: "690794302318",
    appId: "1:690794302318:web:df8dd37f3428676072cf7f"
  };
  
  
  // Initialize Firebase

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);