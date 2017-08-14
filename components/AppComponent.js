import AddTodoContainer from '../containers/AddTodoContainer';
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer';
import FilterComponent from './FilterComponent';

const AppComponent = () => (
	<div>
		<AddTodoContainer />
		<VisibleTodoListContainer />
		<FilterComponent />
	</div>
);