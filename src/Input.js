import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { todoAction } from './state/todo-slice';

const inputClass = {
	borderWidth: '2px',
	borderColor: '#DADDEC',
	margin: '5px',
	fontSize: '1rem',
	color: '#656880'
}

const Input = (props) => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const { addTodo } = todoAction;

	const addTodoHandle = (event) => {
		event.preventDefault();
		dispatch(addTodo(inputRef.current.value));
	};
	return (
		<form onSubmit={addTodoHandle}>
			<input className={inputClass} ref={inputRef} type="text" />
			<button>Add Todo</button>
		</form>
	);
};

export default Input;
