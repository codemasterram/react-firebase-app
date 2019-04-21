import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBLZ4X2LBc6CFWUwPamGWER5SmSel_NPpI",
    authDomain: "fun-food-friends-655c7.firebaseapp.com",
    databaseURL: "https://fun-food-friends-655c7.firebaseio.com",
    projectId: "fun-food-friends-655c7",
    storageBucket: "fun-food-friends-655c7.appspot.com",
    messagingSenderId: "186240226931"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;