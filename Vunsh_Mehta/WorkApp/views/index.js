// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6nITn46KtvTFEcCJ9_OUzWfGRXNw-smw",
    authDomain: "emloyeescheduler.firebaseapp.com",
    projectId: "emloyeescheduler",
    storageBucket: "emloyeescheduler.appspot.com",
    messagingSenderId: "386714064748",
    appId: "1:386714064748:web:0d481926851555ecc00549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebaseConfig.auth(); 
const db = firebase.database();