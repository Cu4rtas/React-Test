const SET_POSITION = 'SET_POSITION';

export const setPosition = (position) => ({ type: SET_POSITION, payload: position });

export default function positionReducer(state = {}, action) {
	switch (action.type) {
		case SET_POSITION:
			return { ...state, position: action.payload };
		default:
			return state;
	}
}
