import { User } from 'firebase/auth';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';
import { UserDate, AdditionalInformation } from '../../utils/firebase/firebase.utils';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserDate>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
	USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
	{ email: string; password: string }
>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserDate>;
export type SignInFailded = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignUpStart = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_UP_START,
	{ displayName: string; email: string; password: string }
>;
export type SignUpSuccess = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_UP_SUCCESS,
	{ user: User; additionalDetails: AdditionalInformation }
>;
export type SignUpFailded = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailded = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

//----------------------------------------- Function actions -------------------------------------------------
export const checkUserSession = withMatcher(
	(): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher(
	(user: UserDate): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
	(): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
	(email: string, password: string): EmailSignInStart =>
		createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
	(user: UserDate & { id: string }): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
	(error: Error): SignInFailded => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
	(email: string, password: string, displayName: string): SignUpStart =>
		createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName })
);

export const signUpSuccess = withMatcher(
	(user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
		createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
	(error: Error): SignUpFailded => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher(
	(): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
	(error: Error): SignOutFailded => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
