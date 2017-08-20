import OneTodoComponent from './OneTodoComponent';
import React from 'react';

const todoListComponent = ({todos, onTodoClick}) => {
	return (<ul>
		{todos.map(todo => {
			return (<OneTodoComponent 
				key={todo.id} 
				{...todo} 
				onClick={onTodoClick} 
			/>)
		})}
	</ul>);
};

export default todoListComponent;