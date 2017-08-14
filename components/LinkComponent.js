import React from 'react';

const LinkComponent = ({active, children, onClick}) => {
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
		{children}
		</a>
	);
};

export default LinkComponent;