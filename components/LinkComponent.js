import React from 'react';

const LinkComponent = ({active, children, onClick}) => {
	if(active){
		return (<span>{children}</span>);
	}
	return (
		<a 
			href='#'
			onClick={e => {
				e.preventDefault();
				e.stopPropagation();
				onClick();
			}}
		>
		{children}
		</a>
	);
};

export default LinkComponent;