let nextTodoID = 1;

export const addTodoAction = (text) => {
	return {
		type: 'ADD_TODO_ACTION',
		id: nextTodoID++,
		text
	};
};

export const toggleTodoAction = (id) => {
	return{
		type: 'TOGGLE_TODO_ACTION',
		id
	};
};

export const setFilterAction = (filter) => {
	return{
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};