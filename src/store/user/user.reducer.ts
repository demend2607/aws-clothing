import { UserDate } from '../../utils/firebase/firebase.utils';
import { AnyAction } from 'redux';
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from './user.action';

//+ -------------- Set the initial state of the subject of use --------------
export type UserState = {
	readonly currentUser: UserDate | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};
//+ ------------------------------------------------------------------------ //

//+ ------------------------ Set the area of use -----------------------------
export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
	if (signInSuccess.match(action)) {
		return { ...state, currentUser: action.payload };
	}
	if (signOutSuccess.match(action)) {
		return {
			...state,
			currentUser: null,
		};
	}
	if (signOutFailed.match(action) || signUpFailed.match(action) || signInFailed.match(action)) {
		return {
			...state,
			error: action.payload,
		};
	}
	return state;
};
//+ ---------------------------------------------------------------------- //
