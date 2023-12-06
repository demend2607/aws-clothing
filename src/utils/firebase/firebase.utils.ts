import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	NextOrObserver,
	User,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	addDoc,
	QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Category } from '../../store/categories/category.types';

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

//+ --------------------------------------- Google Popup Authentication ----------------------------------+
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
//+ --------------------------------------------------------------------------------------------------- //

//+ -------------------------------------- FireStore database ------------------------------------------+
export const db = getFirestore(firebaseApp);
//* -------------------- Create contact requests database -------------------
export type UserContact = {
	displayName: string;
	email: string;
	message: string;
};

export const createContactCollection = async (user: UserContact) => {
	const { displayName, email, message } = user;

	const contactCollection = collection(db, 'contacts');
	const contactSnapshot = await addDoc(contactCollection, {
		displayName,
		email,
		message,
	});
	return contactSnapshot;
};
//* -------------------- Create list items of categories --------------------
export type ObjectToAdd = {
	title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
	collectionKey: string,
	objectsToAdd: T[]
): Promise<void> => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
	console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

//* -------------------- Create user database --------------------
export type AdditionalInformation = {
	displayName?: string;
};

export type UserDate = {
	createdAt: Date;
	displayName: string;
	email: string;
};

// Take some user date and store that inside of Firestorm //
export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation?: AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserDate>> => {
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
				...additionalInformation,
			});
		} catch (error) {
			console.log('error creating the user', error);
		}
	}

	return userSnapshot as QueryDocumentSnapshot<UserDate>;
};
//* ------------------------------------------------------------- //
//+ ---------------------------------------------------------------------------------------------------- //

//+ ------------------------------- Email and Password Authentication -----------------------------------+
export const createAuthUserWithEmalAndPassword = async (email: string, password: string) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};
//+ ---------------------------------------------------------------------------------------------------- //

//+ --------------------------------- Login with email and password ---------------------------------------+
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
//+ ------------------------------------------------------------------------------------------------------- //

//+ ------------------------------ Sign out method --------------------------------------------------------+
export const signOutUser = async () => await signOut(auth);
//+ ------------------------------------------------------------------------------------------------------- //

//+ ------------------------------- Observer on auth state change ------------------------------------------+
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);
//+ ------------------------------------------------------------------------------------------------------- //

export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
