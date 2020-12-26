import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, updateToDo } from '../../state/todos';
import { updateToDosLog, deleteToDosLog } from '../../state/log';
const ListItem = ({ todo, index, done }) => {
	const [editable, setEditable] = useState(false);
	const [name, setName] = useState(todo.name);
	const dispatch = useDispatch();
	const position = useSelector((state) => state.app.position);
	const { id } = todo;
	const from = todo.name;

	const changeToDone = () => {
		dispatch(
			updateToDo({
				...todo,
				done: !done
			})
		);
		dispatch(
			updateToDosLog({
				id,
				action: !done ? 'done' : 'undone',
				position,
				name
			})
		);
	};

	const updateToDoHandler = () => {
		if (editable) {
			if (!name) {
				dispatch(deleteToDo(id));
				dispatch(deleteToDosLog(id));
			} else {
				if (from !== name) {
					dispatch(
						updateToDo({
							...todo,
							name
						})
					);
					dispatch(
						updateToDosLog({
							id,
							action: 'modified',
							position,
							from,
							name
						})
					);
					setName(todo.name);
				}
			}
		}
		setEditable(!editable);
	};

	const deleteToDoHandler = () => {
		dispatch(deleteToDo(id));
		dispatch(deleteToDosLog(id));
	};

	return (
		<div className={`flex row m-2 rounded shadow-md ${done ? 'bg-green-500' : 'bg-orange-500'}`}>
			<div className="my-auto ml-2 text-white font-bold">{index}).</div>
			<div className="col my-auto text-white w-20">
				{editable ? (
					<input
						type="text"
						className="form-control"
						value={name}
						placeholder={todo.name}
						onChange={(e) => setName(e.target.value)}
					/>
				) : (
						<h4
							className={`text-wrap my-2 text-bold text-xl ${done
								? 'line-through text-green-800 italic'
								: ''}`}
						>
							{todo.name}
						</h4>
					)}
			</div>

			<div className="p-1 my-auto justify-content-end ml-auto">
				<Button variant="success" className="py-1 px-2 m-1 font-black" onClick={() => changeToDone()}>
					&#x02713;
				</Button>
				<Button className="py-1 px-2 m-1" onClick={() => updateToDoHandler()}>
					{editable ? (
						'SAVE'
					) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-6 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								/>
							</svg>
						)}
				</Button>
				<Button variant="danger" className="py-1 px-2 m-1 font-black" onClick={() => deleteToDoHandler()}>
					&times;
				</Button>
			</div>
		</div>
	);
};

export default ListItem;
