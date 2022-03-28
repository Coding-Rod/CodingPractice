import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, getDoc, updateDoc,
    query, where,
    orderBy, serverTimestamp
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-DRZa_V8jOIbTL9CCE9NbjuFkdPsft4o",
    authDomain: "fir-9-dojo-dd19b.firebaseapp.com",
    projectId: "fir-9-dojo-dd19b",
    storageBucket: "fir-9-dojo-dd19b.appspot.com",
    messagingSenderId: "948155340018",
    appId: "1:948155340018:web:d0f10859cfd807eb802c6b"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// queries

const q = query(colRef, where("author", "==", "patrick rothfuss"), orderBy("createdAt"));//orderBy("title", 'desc')); // orderBy generates an exception the first time, to solve this enter the link of the exception and create index

// get collection data
// getDocs(colRef)
// .then((snapshot) =>{
//     // console.log(snapshot.docs)
//     let books = [];
//     snapshot.docs.forEach((doc) => {
    //         books.push({ ...doc.data(), id: doc.id});
    //     });
//     console.log(books);
// });

// real time collection data
// onSnapshot(colRef, (snapshot) => { //with collection reference
onSnapshot(q, (snapshot) => { //with query
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id});
    });
    console.log(books);
    
})

//#region CRUD

//! Create
// adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colRef, {  //sending books as parameter
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addBookForm.reset();
    });
})

//! Read
// getting documents
const docRef = doc(db, 'books', 'NiYucSWPFwLird685MPM');

// getDoc(docRef)
//     .then((doc) => {
//         console.log(doc.data(), doc.id);
// });

// on real time
onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
})

//! Update
// updating documents
const updateBookForm = document.querySelector('.update');
updateBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', updateBookForm.id.value);

    updateDoc(docRef, {
        title: 'updated title'
    })
        .then(() => {
            updateBookForm.reset();
    });
})

//! Delete
// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', deleteBookForm.id.value);

    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset();
    });
})

//#endregion CRUD