import { USER_ACTION_TYPES } from './user.types';

//+ -------------- Set the initial state of the subject of use --------------
const INITIAL_STATE = {
	currentUser: null,
};
//+ ------------------------------------------------------------------------ //

//+ ------------------------ Set the area of use -----------------------------
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};

		default:
			return state;
	}
};
//+ ---------------------------------------------------------------------- //
