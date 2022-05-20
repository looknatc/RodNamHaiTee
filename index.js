// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQ84AUvAdWqS7e7ObQB1JFwf7HKYxw_o",
  authDomain: "rodnamhaitee.firebaseapp.com",
  projectId: "rodnamhaitee",
  storageBucket: "rodnamhaitee.appspot.com",
  messagingSenderId: "134258716580",
  appId: "1:134258716580:web:d997c805d52874f95e1b31",
  measurementId: "G-6BMLETB2N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    where,
    getDoc,
    updateDoc, arrayUnion, arrayRemove,deleteField,setDoc,increment  
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

const db = getFirestore();
const data_ref = collection(db, 'RodNam');


//getdata section

// function getStartOfToday() {
//     const now = new Date();
//     now.setHours(5, 0, 0, 0); // +5 hours for Eastern Time
//     const timestamp = db.Timestamp.fromDate(now);
//     return timestamp ;// ex. 1631246400
// }

async function getDataFromDate(){
    // var dateTime = getStartOfToday();
    var dateTime = 0;
    var s =  query(data_ref, where("temperature", ">=", dateTime));
    const querySnapshot = await getDocs(s);
    var ret = {};
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("print  ",doc.id, " => ", doc.data());
        ret[doc.id] = doc.data();
    });
    // var s = questions_ref.where('subject', '==', subjname).get()
    return ret;
}

window.getDataFromDate = getDataFromDate;