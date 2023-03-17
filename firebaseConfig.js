  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDHwF9-bGZmsrBERx1IfZi5wnfPBpl45QM",
  authDomain: "long-test-hust.firebaseapp.com",
  databaseURL: "https://long-test-hust-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "long-test-hust",
  storageBucket: "long-test-hust.appspot.com",
  messagingSenderId: "1012050741145",
  appId: "1:1012050741145:web:8ea80acd3c3945504d3508",
  measurementId: "G-XPFR2CY3VQ"
};

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Initialize Realtime Database and get a reference to the service
  const database = firebase.database();
  
