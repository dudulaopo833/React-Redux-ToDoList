import todoListReducer from './todoListReducer';
import filterTodoListReducer from './filterTodoListReducer';
import { combineReducers } from 'redux';

const todoAppReducers = combineReducers({
	todos: todoListReducer,
	visibilityFilter: filterTodoListReducer
});

export default todoAppReducers;