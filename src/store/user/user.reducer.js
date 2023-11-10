import { USER_ACTION_TYPES } from './user.types';

//+ -------------- Set the initial state of the subject of use --------------
const USER_INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};
//+ ------------------------------------------------------------------------ //

//+ ------------------------ Set the area of use -----------------------------
export const userReducer = (state = USER_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
			};
		case USER_ACTION_TYPES.SIGN_OUT_FAILED:
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
			return {
				...state,
				error: payload,
			};

		default:
			return state;
	}
};
//+ ---------------------------------------------------------------------- //
