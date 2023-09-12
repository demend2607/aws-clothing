import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBP-zFDZLtrmW4XyM6ngiTAfupNOzfIMa0',
	authDomain: 'asw-clothing-db.firebaseapp.com',
	projectId: 'asw-clothing-db',
	storageBucket: 'asw-clothing-db.appspot.com',
	messagingSenderId: '242770597479',
	appId: '1:242770597479:web:4659603b98844498e8a6c2',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//+ --------------------------------------- Google Popup Authentication ----------------------------------
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
//+ --------------------------------------------------------------------------------------------------- //

//+ -------------------------------------- FireStore database ------------------------------------------
export const db = getFirestore();
// Take some date and store that inside of Firestorm //
export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) return;
	// Create data collection //
	const userDocRef = doc(db, 'users', userAuth.uid);
	//* -------------- User existence check ----------------
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}
	//* ----------------------------------------------- //
	return userDocRef;
};
//+ ---------------------------------------------------------------------------------------------------- //

//+ -------------------------------Email and Password Authentication -----------------------------------
export const createAuthUserWithEmalAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};
//+ ---------------------------------------------------------------------------------------------------- //

//+ ---------------------------------Login with email and password------------------------------------------------
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
//+ --------------------------------------------------------------------------------------------------------------
