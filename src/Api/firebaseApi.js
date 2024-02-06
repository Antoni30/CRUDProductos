// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.Domain,
  projectId: "webconjunta-8350a",
  storageBucket: "webconjunta-8350a.appspot.com",
  messagingSenderId: "1023301985908",
  appId: "1:1023301985908:web:b434f47b3b959b2acc1321",
  measurementId: "G-3574MEV2TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
