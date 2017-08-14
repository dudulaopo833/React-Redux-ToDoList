import OneTodoComponent from './OneTodoComponent';

const todoListComponent = ({todos, onTodoClick}) => {
	<ul>
		{todos.map(todo => {
			<OneTodoComponent 
				key={todo.id} 
				{...todo} 
				onclick={()=>onTodoClick(todo.id)} 
			/>
		});}
	</ul>
}