import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         ...expense.val(),
//         id: expense.key,
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log("Error", e);
//   }
// );

// console.log(expenses);
// database.ref("expenses").push(expenses[0]);
// database.ref("expenses").push(expenses[1]);
// database.ref("expenses").push(expenses[2]);

// database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Error", e);
//   }
// );
// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database.ref().set({
//   name: "Tomasz Pietkiewicz",
// });

// database
//   .ref("attributes")
//   .set({
//     height: 179,
//     weight: 73,
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("Failed", e);
//   });

// database.ref().update({
//   name: "Mike",
//   "attributes/height": 150,
// });
