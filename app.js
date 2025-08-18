// ใส่ config ของ Firebase โปรเจกต์คุณที่ได้จาก Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSy...your-api-key...",
    authDomain: "cdebuopenhouse.firebaseapp.com",
    projectId: "cdebuopenhouse",
    storageBucket: "cdebuopenhouse.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdefghijklmno",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
