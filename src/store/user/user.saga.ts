import { takeLatest, put, all, call } from 'typed-redux-saga/macro';

import { USER_ACTION_TYPES } from './user.types';
import {
	signInSuccess,
	signInFailed,
	signUpFailed,
	signUpSuccess,
	signOutFailed,
	signOutSuccess,
	EmailSignInStart,
	SignUpStart,
	SignUpSuccess,
} from './user.action';

import {
	getCurrentUser,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
	createAuthUserWithEmalAndPassword,
	signOutUser,
	AdditionalInformation,
} from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

//----------------------------------- Create data to user Firebase -----------------------------------
export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
	try {
		const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
		if (userSnapshot) {
			yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
		}
	} catch (error) {
		yield* put(signInFailed(error as Error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield* call(getCurrentUser);
		if (!userAuth) return;
		yield* call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield* put(signInFailed(error as Error));
	}
}
//---------------------------------------------------------------------------------------------------- //

//----------------------------------- Methods generate functions ----------------------------------------
export function* signInWithGoogle() {
	try {
		const { user } = yield* call(signInWithGooglePopup);
		yield* call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield* put(signInFailed(error as Error));
	}
}

export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
	try {
		const UserCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);
		if (UserCredential) {
			const { user } = UserCredential;
			yield* call(getSnapshotFromUserAuth, user);
		}
	} catch (error) {
		yield* put(signInFailed(error as Error));
	}
}
//+ ------------------------------ Sign Up ---------------------------------------- /
export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
	try {
		const UserCredential = yield* call(createAuthUserWithEmalAndPassword, email, password, displayName);
		if (UserCredential) {
			const { user } = UserCredential;
			yield* put(signUpSuccess(user, { displayName }));
		}
	} catch (error) {
		yield* put(signUpFailed(error as Error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
	yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}
//+ ------------------------------ Sign Out ---------------------------------------- /
export function* signOut() {
	try {
		yield* call(signOutUser);
		yield* put(signOutSuccess());
	} catch (error) {
		yield* put(signOutFailed(error as Error));
	}
}
//--------------------------------------------------------------------------------------------------- //

//------------------------------- Actions generate functions -----------------------------------------
export function* onGoogleSignInStart() {
	yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
	yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
	yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
//+ ------------------------------ Sign Up ---------------------------------------- /
export function* onSignUpStart() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
//+ --------------------------------------- Sign Out ------------------------------- /
export function* onSignOutStart() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
// ------------------------------------------------------------------------------------------------ //

export function* userSaga() {
	yield* all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart),
	]);
}
