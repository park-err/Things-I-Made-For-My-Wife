let firebaseConfig = {
    apiKey: "AIzaSyCSE4M-4vWecRGdk7dl8c6MogMYXVItvSc",
    authDomain: "blog-93a59.firebaseapp.com",
    projectId: "blog-93a59",
    storageBucket: "blog-93a59.appspot.com",
    messagingSenderId: "95069567446",
    appId: "1:95069567446:web:71450a30e333872d64cc77"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();