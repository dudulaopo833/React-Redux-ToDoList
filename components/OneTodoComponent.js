const OneTodoComponent = ({onClick, completed, text}) => (
	<li 
		onclick={onClick}
		style={{textDecoretion:completed?'line-through':'none'}}>
	</li>
);