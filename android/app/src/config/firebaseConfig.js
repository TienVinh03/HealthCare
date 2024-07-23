import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc-re1lXwaheh10fGf86jJ1s-ok6rPSuY",
  authDomain: "healthcare-e3879.firebaseapp.com",
  projectId: "healthcare-e3879",
  storageBucket: "healthcare-e3879.appspot.com",
  messagingSenderId: "746849931921",
  appId: "1:746849931921:android:5e2f11d5a4e709ca6e6530",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firestore };
