import OneTodoComponent from './OneTodoComponent';
import React from 'react';

const todoListComponent = ({todos, onTodoClick}) => {
	<ul>
		{todos.map(todo => {
			<OneTodoComponent 
				key={todo.id} 
				{...todo} 
				onclick={()=>onTodoClick(todo.id)} 
			/>
		})}
	</ul>
};

export default todoListComponent;