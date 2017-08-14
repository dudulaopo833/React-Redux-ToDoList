const LinkComponent = (active, children, onClick) => {
	if(active){
		return <span>{children}</span>
	}
	return (
		<a 
			href='#'
			onclick={e => {
				e.preventDefault();
				onClick();
			}}
		>
		</a>
	);
}