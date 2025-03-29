
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rest-app-1e96b.firebaseapp.com",
  projectId: "rest-app-1e96b",
  storageBucket: "rest-app-1e96b.appspot.com",
  messagingSenderId: "553201487773",
  appId: "1:553201487773:web:bcee450e609a9837b4a974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);