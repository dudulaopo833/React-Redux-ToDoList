import todoListReducer from './todoListReducer';
import filterTodoListReducer from './filterTodoListReducer';
import { combineReducers } from 'redux';

const todoAppReducers = combineReducers({
	todoListReducer,
	filterTodoListReducer
});

export default todoAppReducers;