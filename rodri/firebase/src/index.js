import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
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
const colref = collection(db, 'books');

//#region CRUD
// get collection data
getDocs(colref)
.then((snapshot) =>{
    // console.log(snapshot.docs)
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id});
    });
    console.log(books);
});

// adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colref, {  //sending books as parameter
        title: addBookForm.title.value,
        author: addBookForm.author.value
    })
    .then(() => {
        addBookForm.reset();
    });
})

// adding documents
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