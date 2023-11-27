// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAPJtfESjGoytu3HzlO1PMctX7_DZ8WgHE',
  authDomain: 'my-dream-place-7a3de.firebaseapp.com',
  projectId: 'my-dream-place-7a3de',
  storageBucket: 'my-dream-place-7a3de.appspot.com',
  messagingSenderId: '724970541250',
  appId: '1:724970541250:web:b2fdde1ab1cef6dacd2b5b',
  measurementId: 'G-KEVSY0KBXW',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
