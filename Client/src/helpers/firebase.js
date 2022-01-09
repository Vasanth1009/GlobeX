import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'globex-af933.firebaseapp.com',
  projectId: 'globex-af933',
  storageBucket: 'globex-af933.appspot.com',
  messagingSenderId: '82167614359',
  appId: '1:82167614359:web:3bcaba4ad13c2c7e24d2d2',
};

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
