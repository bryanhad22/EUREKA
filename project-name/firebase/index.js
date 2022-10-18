// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGk8DNNJelvnMXiFCL7Khpx7ujXiVazXA",
  authDomain: "vue-fire-auth-test.firebaseapp.com",
  projectId: "vue-fire-auth-test",
  storageBucket: "vue-fire-auth-test.appspot.com",
  messagingSenderId: "885769418877",
  appId: "1:885769418877:web:bf2a07c3258866c2a45914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }