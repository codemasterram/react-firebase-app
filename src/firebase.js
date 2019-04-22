import firebase from 'firebase'
const config = {
    apiKey: "Your api key",
    authDomain: "appName.firebaseapp.com",
    databaseURL: "databseurl",
    projectId: "projectid",
    storageBucket: "storeageBucketofProject",
    messagingSenderId: "101"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
