//#region imports
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, getDoc, updateDoc,
    query, where,
    orderBy, serverTimestamp,
} from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged
} from 'firebase/auth'
//#endregion imports

//#region variables
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
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books');

// queries

const q = query(colRef, where("author", "==", "patrick rothfuss"), orderBy("createdAt"));//orderBy("title", 'desc')); // orderBy generates an exception the first time, to solve this enter the link of the exception and create index
//#endregion variables

//#region Subscribe
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
    // const unsubCol = onSnapshot(q, (snapshot) => { //with query
    const unsubCol = onSnapshot(colRef, (snapshot) => { //with collection reference
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id});
    });
    console.log(books);
    
});
//#endregion Subscribe

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
});

//! Read
// getting documents
const docRef = doc(db, 'books', 'NiYucSWPFwLird685MPM');

// getDoc(docRef)
//     .then((doc) => {
//         console.log(doc.data(), doc.id);
// });

// on real time
const unsubDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
});

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
});

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
});

//#endregion CRUD

//#region UserAuth

// sign up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, signupForm.email.value, signupForm.password.value)
        .then((credential) =>{
            // console.log("User created: ", credential.user);
            signupForm.reset();
        })
        .catch((error) => {
            console.error(error.message);
    });
});

//log in
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value)
    .then((credential) =>{
        // console.log("User logged in: ", credential.user);
        loginForm.reset();
    })
    .catch((error) => {
        console.error(error.message);
});
});

//log out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // console.log('logged out');
        })
        .catch((error) => console.error(error.message));
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user)
})

//#endregion UserAuth

//#region Unsubscribe
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
    console.log('unsubscribing...');
    Promise.all([unsubCol(),unsubDoc(),unsubAuth()]).then(() => {
        console.log('unsubscribed!');
    });
});
//#endregion Unsubscribe