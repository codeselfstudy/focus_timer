import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Note, you have to set your environment variables with a `.env`
// file. See the `.env-example` file for instructions.
//
// Read this page for more information:
// https://create-react-app.dev/docs/adding-custom-environment-variables/
const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

export const createUserProfile = async (userAuth, userData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // if there isn't a user profile, create it
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...userData,
            });
            console.log("created user profile");
        } catch (err) {
            console.error("error creating user", err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
