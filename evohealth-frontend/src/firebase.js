import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4qn7dZRbRL3bdSpoz10me9AX3a_71wN8",
  authDomain: "evo-health-project.firebaseapp.com",
  projectId: "evo-health-project",
  storageBucket: "evo-health-project.appspot.com",
  messagingSenderId: "348534064979",
  appId: "1:348534064979:web:d3ec1ef169f9c1a43883a6",
  measurementId: "G-3XJC6GY2N1"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
