const oneTodoReducer = (state, action) => {
	switch (action.type){
		case 'ADD_TODO_ACTION':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO_ACTION':
			if(state.id !== action.id){
				return state;
			}
			return Object.assign({}, state, {completed: !state.completed});
		default:
			return state;
	}
};

const todoListReducer = (state, action) => {
	switch(action.type){
		case 'ADD_TODO_ACTION':
			return [
				...state,
				oneTodoReducer(undefined, action),
			];
		case 'TOGGLE_TODO_ACTION':
			return state.map(t => oneTodoReducer(t, action));
		case default:
			return state;
	}
};

export default todoListReducer;