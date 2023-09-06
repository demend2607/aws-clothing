import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from 'firebase/auth';

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
