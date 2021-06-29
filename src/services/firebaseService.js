import firebase from 'firebase';

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
const messaging = firebase.messaging();

export function InitNotification() {
    Notification.requestPermission().then((permission) => {
        console.log('Permission :', permission)
        if (permission === 'granted') {
            // Get registration token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
                    console.log('Current Token :', currentToken);
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        }
    });
}