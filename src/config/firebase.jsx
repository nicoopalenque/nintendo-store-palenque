import { initializeApp } from 'firebase/app';

export const firebaseConfig = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB4TA69iLvnbDCRPvIDS4PY3ijaAqXLqV8",
    authDomain: "coderhouse-ecommerce-f48fa.firebaseapp.com",
    projectId: "coderhouse-ecommerce-f48fa",
    storageBucket: "coderhouse-ecommerce-f48fa.appspot.com",
    messagingSenderId: "751030302937",
    appId: "1:751030302937:web:67fc678c06ea73829b26c8"
  }
  
  initializeApp(firebaseConfig);
}
