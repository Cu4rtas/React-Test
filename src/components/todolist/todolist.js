import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ListItem from './listitem';
import { useSelector, useDispatch } from 'react-redux';
import { saveToDo } from '../../state/todos';
import { updateToDosLog } from '../../state/log';
import { v1 as uuid } from 'uuid';
import './todolist.css';

const TodoList = () => {
	const [ name, setName ] = useState('');
	const todos = useSelector((state) => state.todos);
	const position = useSelector((state) => state.app.position);
	const dispatch = useDispatch();
	const save = () => {
		const id = uuid();
		dispatch(
			saveToDo({
				id,
				name,
				done: false
			})
		);
		if (position) {
			if (position.lat && position.lng) {
				dispatch(
					updateToDosLog({
						id,
						action: 'created',
						position,
						name
					})
				);
			}
		}
		setName('');
	};
	return (
		<Container className="mt-4 shadow p-2">
			<label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="name">
				Type the task name:
			</label>
			<div className="input-group mb-3">
				<input
					value={name}
					id="name"
					type="text"
					onKeyUp={(e) => (e.key === 'Enter' ? save() : null)}
					className="form-control font-medium focus:text-orange-500 placeholder-orange-400"
					required={true}
					placeholder="Task name..."
					onChange={(e) => setName(e.target.value)}
				/>
				<div className="input-group-append">
					<Button variant="success" type="button" id="button-addon2" onClick={() => save()}>
						ADD
					</Button>
				</div>
			</div>
			<hr className="my-2" />

			<ul className="p-2 bg-orange-200 t-list overflow-y-auto">
				{todos.length ? (
					todos.map((todo, i) => {
						return (
							<li key={i}>
								<ListItem todo={todo} index={i + 1} done={todo.done} />
							</li>
						);
					})
				) : (
					<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
						<p className="text-center font-bold">Your list is empty!</p>
						<p className="text-center">Add a task in the field above :)</p>
					</div>
				)}
			</ul>
		</Container>
	);
};

export default TodoList;
