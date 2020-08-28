import "regenerator-runtime/runtime.js";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { data } from "../data";



const firebaseConfig = {
    apiKey: "AIzaSyAj--BJ6-T69u5KRtjyRVj5wtd0XXO0zVs",
    authDomain: "bebetterthanyesterday-9ce25.firebaseapp.com",
    databaseURL: "https://bebetterthanyesterday-9ce25.firebaseio.com",
    projectId: "bebetterthanyesterday-9ce25",
    storageBucket: "bebetterthanyesterday-9ce25.appspot.com",
    messagingSenderId: "173525984065",
    appId: "1:173525984065:web:c2b291d1c60059050537c0",
    measurementId: "G-12FG8SXKSZ"
}

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
const batch = firestore.batch();

export const addBooksAndPodcast = async() => {
    const collections = Object.keys(data);
     collections.forEach(newCollection => {
       const collectionRef = firestore.collection(newCollection);
       const newRef = collectionRef.doc(data[`${newCollection}`].id);
       batch.set(newRef,( data[`${newCollection}`].books || data[`${newCollection}`].podcast ))
    })
   return await batch.commit()
}

export default firebase