import FilterLinkContainer from '../containers/FilterLinkContainer';
import React from 'react';

const FilterComponent = () => (
	<p>
		Show: 
		{" "}
		<FilterLinkContainer filter="SHOW_ALL">
			All
		</FilterLinkContainer>
		{", "}
		<FilterLinkContainer filter="SHOW_ACTIVE">
			Active
		</FilterLinkContainer>
		{", "}
		<FilterLinkContainer filter="SHOW_COMPLETED">
			Completed
		</FilterLinkContainer>
	</p>
);

export default FilterComponent;