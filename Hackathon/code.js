import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVEARtoCjJ8XvnROCfCurYrlcOLfF5sAY",
    authDomain: "localmarket-a348e.firebaseapp.com",
    databaseURL: "https://localmarket-a348e-default-rtdb.firebaseio.com",
    projectId: "localmarket-a348e",
    storageBucket: "localmarket-a348e.appspot.com",
    messagingSenderId: "978609964164",
    appId: "1:978609964164:web:716c59a7932f150366eed1",
    measurementId: "G-NP9QVP3KN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export async function getUser(location, need, excess) {
    /*querySnapshot.forEach((doc) => {
        if (doc.data().name == "Britton") {
            console.log(doc.data());
            targetJson.push(doc.data())
        }
    });*/
    const querySnapshot = await getDocs(collection(db, "users"));
    let user;
    querySnapshot.forEach((doc) => {
        if ((doc.data().location == location) && (doc.data().Excess == need) && (doc.data().Need == excess)) {
            user = doc.data();
            return;
        }
    });
    return user
}





