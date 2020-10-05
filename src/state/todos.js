const SAVE_TODO = 'SAVE_TODO';
const UPADTE_TODO = 'UPADTE_TODO';
const DELETE_TODO = 'DELETE_TODO';

export default function todoReducer(state = [], action) {
	let newTodos;
	switch (action.type) {
		case SAVE_TODO:
			newTodos = [ ...state, action.payload ];
			return action.payload.name !== '' ? newTodos : state;
		case DELETE_TODO:
			newTodos = [ ...state ];
			return newTodos.filter((todo) => todo.id !== action.payload);
		case UPADTE_TODO:
			newTodos = [ ...state ];
			newTodos = newTodos.map((todo) => {
				let todoToUpdate = { ...todo };
				if (todo.id === action.payload.id) {
					todoToUpdate.name = action.payload.name;
					todoToUpdate.done = action.payload.done;
				}
				return todoToUpdate;
			});
			return newTodos;
		default:
			return state;
	}
}

export const saveToDo = (todo) => ({ type: SAVE_TODO, payload: todo });

export const deleteToDo = (todoId) => ({ type: DELETE_TODO, payload: todoId });

export const updateToDo = (todo) => ({ type: UPADTE_TODO, payload: todo });
