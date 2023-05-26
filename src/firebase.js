import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDe449JzWahE4uOHXbeFgz2BBpOMjRNtBc",
  authDomain: "uni2hand-d25da.firebaseapp.com",
  projectId: "uni2hand-d25da",
  storageBucket: "uni2hand-d25da.appspot.com",
  messagingSenderId: "68827145137",
  appId: "1:68827145137:web:df0941ec0b20a9cb0dd390",
  measurementId: "G-1WCHW3SCCV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
