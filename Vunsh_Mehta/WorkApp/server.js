const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import the functions you need from the SDKs you need
// import initializeApp from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD6nITn46KtvTFEcCJ9_OUzWfGRXNw-smw",
//   authDomain: "emloyeescheduler.firebaseapp.com",
//   projectId: "emloyeescheduler",
//   storageBucket: "emloyeescheduler.appspot.com",
//   messagingSenderId: "386714064748",
//   appId: "1:386714064748:web:0d481926851555ecc00549"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// Middleware
// Use ejs template engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
