import { connect } from 'react-redux';
import { toggleTodoAction } from '../actions';
import TodoListComponent from '../components/TodoListComponent';

const getVisibleTodos = (todos, filter) => {
	switch(filter){
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
	}
};

const mapStateToProps = (state) => {
	return{
		todos : getVisibleTodos(state.todos, state.visibilityFilter)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick : (id) => {
			dispacth(toggleTodoAction(id));
		}
	};
};

const VisibleTodoListContainer = connect(
		mapStateToProps,
		mapDispatchToProps
)(TodoListComponent);

export default VisibleTodoListContainer;