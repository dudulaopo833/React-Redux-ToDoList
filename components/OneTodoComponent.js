import React from 'react';

const OneTodoComponent = ({onClick, completed, text}) => (
	<li 
		onclick={onClick}
		style={{textDecoretion:completed?'line-through':'none'}}>
	</li>
);

export default OneTodoComponent;