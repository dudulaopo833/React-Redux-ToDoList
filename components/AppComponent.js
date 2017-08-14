import AddTodoContainer from '../containers/AddTodoContainer';
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer';
import FilterComponent from './FilterComponent';
import React from 'react';

const AppComponent = () => (
	<div>
		<AddTodoContainer />
		<VisibleTodoListContainer />
		<FilterComponent />
	</div>
);

export default AppComponent;