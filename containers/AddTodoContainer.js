import { connect } from 'react-redux';
import { addTodoAction } from '../actions';
import React from 'react';

let AddTodoContainer = ({dispatch}) => {
	return (
		<div>
			<form onsubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addTodoAction(input.value));
				input.value = '';
			}}>
				<input ref={node=>{input=node}}/>
				<button type='submit'>
					Add Todo
				</button>
			</form>
		</div>
	);
};

AddTodoContainer = connect()(AddTodoContainer);

export default AddTodoContainer;