const UPDATE_TODOS_LOG = 'UPDATE_TODOS_LOG';
const DELETE_TODOS_LOG = 'DELETE_TODOS_LOG';

export default function logReducer(state = [], action) {
	let log;
	switch (action.type) {
		case UPDATE_TODOS_LOG:
			log = [ ...state, action.payload ];
			return log;
		case DELETE_TODOS_LOG:
			log = [ ...state ];
			return log.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
}

export const updateToDosLog = (todolog) => ({ type: UPDATE_TODOS_LOG, payload: todolog });

export const deleteToDosLog = (todoid) => ({ type: DELETE_TODOS_LOG, payload: todoid });
