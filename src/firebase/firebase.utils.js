import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCa2_3CkHMwnMUAXV1VI_3jn9e1iFBI-mM",
  authDomain: "crwn-db-5f4f2.firebaseapp.com",
  projectId: "crwn-db-5f4f2",
  storageBucket: "crwn-db-5f4f2.appspot.com",
  messagingSenderId: "599973356210",
  appId: "1:599973356210:web:9b56ef8b5cf2aab7db5fab",
  measurementId: "G-LE933PCGJK",
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creater user', error.message);
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
