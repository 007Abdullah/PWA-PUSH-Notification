importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkpArY2P8qnkZq-9dQmmCIIPfu6Aod9Tw",
    authDomain: "pwa-push-notification-e8565.firebaseapp.com",
    projectId: "pwa-push-notification-e8565",
    storageBucket: "pwa-push-notification-e8565.appspot.com",
    messagingSenderId: "665068296542",
    appId: "1:665068296542:web:2b8272c23a69aa348697cf",
    measurementId: "G-HE8KK2QJXF"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();