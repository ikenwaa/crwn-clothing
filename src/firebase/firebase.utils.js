import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAXg7Siqz6SBatCq640JGZLHJq851bG988",
	authDomain: "crwn-db-50976.firebaseapp.com",
	databaseURL: "https://crwn-db-50976.firebaseio.com",
	projectId: "crwn-db-50976",
	storageBucket: "crwn-db-50976.appspot.com",
	messagingSenderId: "711341255335",
	appId: "1:711341255335:web:e18161ee505145f408c982"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
